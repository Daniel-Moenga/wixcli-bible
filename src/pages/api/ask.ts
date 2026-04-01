import type { APIRoute } from 'astro';
import { generateText } from 'ai';
import aiIndex from '../../generated/ai-index.json';

export const prerender = false;

const systemPrompt = `You are the Wix CLI Bible assistant.

Answer only from the provided evidence. Prefer the local handbook when it already answers the question clearly.
When platform behavior is involved, prefer official Wix sources. If the evidence is weak, narrow the answer or refuse.
Do not claim certainty beyond the provided material. Keep answers concise and practical.
Always remember that Wix remains the source of truth for platform behavior.`;

function tokenize(input: string) {
	return input
		.toLowerCase()
		.replace(/[^a-z0-9\s-]/g, ' ')
		.split(/\s+/)
		.filter((token) => token.length > 2);
}

function scoreDocument(question: string, document: (typeof aiIndex.documents)[number]) {
	const tokens = tokenize(question);
	const haystack = `${document.title} ${document.summary} ${document.content}`.toLowerCase();
	let score = 0;

	for (const token of tokens) {
		if (document.title.toLowerCase().includes(token)) score += 5;
		if (document.summary.toLowerCase().includes(token)) score += 3;
		if (haystack.includes(token)) score += 1;
	}

	return score;
}

function buildCitations(matches: (typeof aiIndex.documents)[number][]) {
	const citations = new Map<string, { title: string; url: string }>();
	const sourceLookup = new Map(aiIndex.officialSources.map((source) => [source.id, source]));

	for (const match of matches) {
		citations.set(match.url, { title: match.title, url: match.url });

		for (const ref of match.sourceMapRefs) {
			const source = sourceLookup.get(ref);
			if (source) {
				citations.set(source.url, { title: source.title, url: source.url });
			}
		}
	}

	return Array.from(citations.values()).slice(0, 6);
}

export const POST: APIRoute = async ({ request }) => {
	try {
		const { question } = await request.json();
		if (!question || typeof question !== 'string') {
			return new Response(JSON.stringify({ error: 'Question is required.' }), { status: 400 });
		}

		const ranked = aiIndex.documents
			.map((document) => ({ document, score: scoreDocument(question, document) }))
			.filter((entry) => entry.score > 0)
			.sort((a, b) => b.score - a.score)
			.slice(0, 5);

		if (ranked.length === 0 || ranked[0].score < 3) {
			return new Response(
				JSON.stringify({
					answer:
						'I do not have enough strong evidence in the handbook or curated official sources to answer that confidently. Try narrowing the question, or check the official Wix docs directly.',
					citations: [
						{ title: 'Wix CLI overview', url: 'https://dev.wix.com/docs/wix-cli' },
						{
							title: 'Wix CLI command reference',
							url: 'https://dev.wix.com/docs/wix-cli/command-reference/introduction',
						},
					],
					confidence: 'low',
					disclaimer: 'Wix remains the source of truth.',
				}),
				{ status: 200, headers: { 'content-type': 'application/json' } }
			);
		}

		const hasGatewayAuth = Boolean(
			import.meta.env.VERCEL_OIDC_TOKEN || import.meta.env.AI_GATEWAY_API_KEY
		);
		if (!hasGatewayAuth) {
			return new Response(
				JSON.stringify({
					answer:
						'The Ask AI beta is configured for Vercel AI Gateway, but no gateway auth is available yet. Use `vercel link` and `vercel env pull .env.local` to provision `VERCEL_OIDC_TOKEN`, or set `AI_GATEWAY_API_KEY` manually.',
					citations: buildCitations(ranked.map((entry) => entry.document)),
					confidence: 'low',
					disclaimer: 'Wix remains the source of truth.',
				}),
				{ status: 503, headers: { 'content-type': 'application/json' } }
			);
		}

		const context = ranked
			.map(
				({ document }, index) =>
					`[Source ${index + 1}]
Title: ${document.title}
Collection: ${document.collection}
URL: ${document.url}
Summary: ${document.summary}
Excerpt: ${document.content.slice(0, 1800)}`
			)
			.join('\n\n');

		const result = await generateText({
			model: import.meta.env.AI_GATEWAY_MODEL || 'openai/gpt-5.4',
			system: systemPrompt,
			prompt: `Question: ${question}\n\nEvidence:\n${context}\n\nAnswer with a concise explanation grounded in the evidence. End by reminding the reader that Wix remains the source of truth when platform behavior matters.`,
			providerOptions: {
				gateway: {
					tags: ['feature:ask-beta', 'project:wix-cli-bible'],
				},
			},
		});

		return new Response(
			JSON.stringify({
				answer: result.text?.trim() || 'I could not generate a grounded answer from the available evidence.',
				citations: buildCitations(ranked.map((entry) => entry.document)),
				confidence: ranked[0].score >= 8 ? 'high' : 'medium',
				disclaimer: 'Wix remains the source of truth.',
			}),
			{ status: 200, headers: { 'content-type': 'application/json' } }
		);
	} catch (error) {
		return new Response(
			JSON.stringify({
				answer: 'The Ask AI beta hit an unexpected error while building the response.',
				citations: [],
				confidence: 'low',
				disclaimer: 'Wix remains the source of truth.',
				error: error instanceof Error ? error.message : 'Unknown error',
			}),
			{ status: 500, headers: { 'content-type': 'application/json' } }
		);
	}
};
