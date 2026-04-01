import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
	const entries = (await getCollection('changelog')).sort(
		(a, b) => b.data.date.valueOf() - a.data.date.valueOf()
	);

	return rss({
		title: 'Wix CLI Bible Changelog',
		description: 'Project updates and content changes for Wix CLI Bible.',
		site: context.site,
		items: entries.map((entry) => ({
			title: entry.data.title,
			pubDate: entry.data.date,
			description: entry.data.summary,
			link: `/changelog/${entry.id}/`,
		})),
	});
}
