import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import fg from 'fast-glob';
import matter from 'gray-matter';

const root = process.cwd();
const outputFile = path.join(root, 'src', 'generated', 'ai-index.json');

const collections = [
	{ name: 'docs', dir: path.join(root, 'src', 'content', 'docs') },
	{ name: 'guides', dir: path.join(root, 'src', 'content', 'guides') },
	{ name: 'changelog', dir: path.join(root, 'src', 'content', 'changelog') },
	{ name: 'officialSources', dir: path.join(root, 'src', 'content', 'officialSources') },
];

function stripMarkdown(markdown) {
	return markdown
		.replace(/^import .*$/gm, '')
		.replace(/^export .*$/gm, '')
		.replace(/```[\s\S]*?```/g, ' ')
		.replace(/`([^`]+)`/g, '$1')
		.replace(/!\[[^\]]*]\([^)]*\)/g, ' ')
		.replace(/\[([^\]]+)]\(([^)]+)\)/g, '$1')
		.replace(/^>\s?/gm, '')
		.replace(/^#{1,6}\s*/gm, '')
		.replace(/[*_~>-]/g, ' ')
		.replace(/\n{2,}/g, '\n')
		.replace(/\s{2,}/g, ' ')
		.trim();
}

function toDocsUrl(slug) {
	if (slug === 'docs/index') return '/docs/';
	if (slug.endsWith('/index')) return `/${slug.replace(/\/index$/, '')}/`;
	return `/${slug}/`;
}

function toUrl(collection, slug, data) {
	switch (collection) {
		case 'docs':
			return toDocsUrl(slug);
		case 'guides':
			return `/guides/${slug}/`;
		case 'changelog':
			return `/changelog/${slug}/`;
		case 'officialSources':
			return data.url;
		default:
			return '/';
	}
}

async function readCollectionEntries(collection) {
	const files = await fg('**/*.{md,mdx}', { cwd: collection.dir, absolute: true });

	return Promise.all(
		files.map(async (file) => {
			const raw = await readFile(file, 'utf8');
			const parsed = matter(raw);
			const slug = path
				.relative(collection.dir, file)
				.replace(/\\/g, '/')
				.replace(/\.(md|mdx)$/, '');
			const text = stripMarkdown(parsed.content);
			const title =
				parsed.data.title ||
				parsed.data.label ||
				slug
					.split('/')
					.at(-1)
					.replace(/-/g, ' ');

			return {
				id: slug,
				collection: collection.name,
				title,
				summary:
					parsed.data.description ||
					parsed.data.summary ||
					parsed.data.notes ||
					parsed.data.problem ||
					'',
				url: toUrl(collection.name, slug, parsed.data),
				sourceMapRefs: parsed.data.sourceMapRefs || [],
				topics: parsed.data.topics || [],
				owner: parsed.data.owner || null,
				content: text,
			};
		})
	);
}

const results = await Promise.all(collections.map(readCollectionEntries));
const allEntries = results.flat();
const officialSources = allEntries.filter((entry) => entry.collection === 'officialSources');
const documents = allEntries.filter((entry) => entry.collection !== 'officialSources');

await mkdir(path.dirname(outputFile), { recursive: true });
await writeFile(
	outputFile,
	JSON.stringify(
		{
			generatedAt: new Date().toISOString(),
			documents,
			officialSources,
		},
		null,
		2
	),
	'utf8'
);

console.log(`Built AI index with ${documents.length} documents and ${officialSources.length} official sources.`);
