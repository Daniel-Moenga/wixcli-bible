export const site = {
	name: 'Wix CLI Bible',
	shortName: 'WCB',
	url: 'https://wixclibible.moenga.space',
	repoUrl: 'https://github.com/Daniel-Moenga/wixcli-bible',
	repoSlug: 'Daniel-Moenga/wixcli-bible',
	githubSponsorsUrl: 'https://github.com/sponsors/Daniel-Moenga',
	tagline: 'A Clearer Way to Learn the Wix CLI.',
	description:
		'Open-Source Docs and Guides for the Current Wix CLI. Structured for learning, not just reference.',
	hero: {
		eyebrow: 'Open-Source',
		title: 'A Clearer Way to Learn the Wix CLI.',
		blurb:
			'The official Wix docs are the source of truth. This Open-Source project organizes them into a learning path that actually makes sense when you\'re starting out.',
	},
	story: {
		title: 'I Kept Getting Lost in the Docs. So I Wrote Better Ones.',
		blurb:
			'Wix stays canonical. This is an Open-Source companion that makes the learning path shorter.',
	},
	sponsorship: {
		eyebrow: 'Support',
		title: 'If This Saves You Time, Consider Sponsoring.',
		blurb:
			'Sponsorship helps cover hosting and AI costs. Everything stays free and Open-Source either way.',
	},
	openSource: {
		codeLicense: 'MIT',
		docsLicense: 'CC BY 4.0',
	},
	credits: [
		{
			name: 'Wix',
			role: 'Platform and source of truth',
			href: 'https://dev.wix.com/docs/wix-cli',
		},
		{
			name: 'Astro + Starlight',
			role: 'Framework and docs engine',
			href: 'https://starlight.astro.build/',
		},
		{
			name: 'Moenga Space',
			role: 'Maintainer',
			href: 'https://github.com/Daniel-Moenga',
		},
	],
} as const;

export const topNavigation = [
	{ label: 'Home', href: '/' },
	{ label: 'Docs', href: '/docs/' },
	{ label: 'Guides', href: '/guides/' },
	{ label: 'Community', href: '/community/' },
	{ label: 'Ask', href: '/ask/', badge: 'Beta' },
	{ label: 'About', href: '/about/' },
] as const;

export const footerNavigation = [
	{
		title: 'Learn',
		links: [
			{ label: 'Docs', href: '/docs/' },
			{ label: 'Guides', href: '/guides/' },
			{ label: 'Community', href: '/community/' },
			{ label: 'Ask AI', href: '/ask/' },
		],
	},
	{
		title: 'Project',
		links: [
			{ label: 'About', href: '/about/' },
			{ label: 'Contribute', href: '/guides/contributing-a-guide/' },
			{ label: 'Open Source', href: '/open-source/' },
			{ label: 'Support', href: '/support/' },
			{ label: 'Changelog', href: '/changelog/' },
		],
	},
] as const;

export function isActivePath(currentPath: string, href: string) {
	if (href === '/') return currentPath === '/';
	return currentPath.startsWith(href);
}

export function formatDisplayDate(date: Date | string) {
	return new Intl.DateTimeFormat('en', {
		month: 'long',
		day: 'numeric',
		year: 'numeric',
	}).format(typeof date === 'string' ? new Date(date) : date);
}
