import type { APIRoute } from 'astro';

export const prerender = false;

export const GET: APIRoute = async () => {
	try {
		const response = await fetch('https://api.github.com/repos/Daniel-Moenga/wixcli-bible', {
			headers: {
				accept: 'application/vnd.github+json',
				'user-agent': 'wixcli-bible-site',
			},
		});

		if (!response.ok) {
			return new Response(JSON.stringify({ stars: null }), {
				status: 200,
				headers: {
					'cache-control': 'public, max-age=300, s-maxage=300',
					'content-type': 'application/json',
				},
			});
		}

		const data = await response.json();
		return new Response(JSON.stringify({ stars: data?.stargazers_count ?? null }), {
			status: 200,
			headers: {
				'cache-control': 'public, max-age=300, s-maxage=300',
				'content-type': 'application/json',
			},
		});
	} catch {
		return new Response(JSON.stringify({ stars: null }), {
			status: 200,
			headers: {
				'cache-control': 'public, max-age=300, s-maxage=300',
				'content-type': 'application/json',
			},
		});
	}
};
