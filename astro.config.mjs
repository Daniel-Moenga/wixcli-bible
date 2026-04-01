// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import starlight from '@astrojs/starlight';
import vercel from '@astrojs/vercel';

export default defineConfig({
	site: 'https://wixclibible.moenga.space',
	output: 'server',
	adapter: vercel(),
	integrations: [
		sitemap(),
		starlight({
			title: 'Wix CLI Bible',
			description:
				'A dark-first, open-source handbook for learning the current Wix CLI with better structure, calmer design, and citations-first guidance.',
			favicon: '/favicon.svg',
			social: [
				{
					icon: 'github',
					label: 'GitHub',
					href: 'https://github.com/Daniel-Moenga/wixcli-bible',
				},
			],
			sidebar: [
				{
					label: 'Start Here',
					items: [
						{ slug: 'docs', label: 'Overview' },
						{ slug: 'docs/start-here', label: 'Start Here' },
						{ slug: 'docs/mental-model', label: 'The Mental Model' },
						{ slug: 'docs/app-vs-headless-vs-sites', label: 'App vs Headless vs Sites' },
					],
				},
				{
					label: 'Build Workflow',
					items: [
						{ slug: 'docs/setup-and-core-commands', label: 'Setup and Core Commands' },
						{ slug: 'docs/workflow', label: 'The Real Workflow' },
						{ slug: 'docs/project-structure', label: 'Project Structure' },
						{ slug: 'docs/quick-reference', label: 'Quick Reference' },
					],
				},
				{
					label: 'Surfaces',
					items: [
						{ slug: 'docs/extension-types', label: 'Extension Types' },
						{ slug: 'docs/surfaces/dashboard-extensions', label: 'Dashboard Extensions' },
						{ slug: 'docs/surfaces/site-extensions', label: 'Site Extensions' },
						{ slug: 'docs/surfaces/backend-and-security', label: 'Backend and Security' },
						{ slug: 'docs/permissions-and-security', label: 'Permissions and Security' },
					],
				},
				{
					label: 'Operations',
					items: [
						{ slug: 'docs/design-system-and-ui', label: 'Design System and UI' },
						{ slug: 'docs/data-flow-and-architecture', label: 'Data Flow and Architecture' },
						{ slug: 'docs/self-hosting-and-architecture', label: 'Self-Hosting' },
						{ slug: 'docs/testing-and-debugging', label: 'Testing and Debugging' },
						{ slug: 'docs/common-mistakes', label: 'Common Mistakes' },
						{ slug: 'docs/official-source-map', label: 'Official Source Map' },
					],
				},
			],
			editLink: {
				baseUrl: 'https://github.com/Daniel-Moenga/wixcli-bible/edit/main/',
			},
			customCss: ['/src/styles/site.css', '/src/styles/starlight.css'],
			disable404Route: true,
			components: {
				Header: './src/components/starlight/Header.astro',
				Footer: './src/components/starlight/Footer.astro',
				SiteTitle: './src/components/starlight/SiteTitle.astro',
				ThemeProvider: './src/components/starlight/ThemeProvider.astro',
				ThemeSelect: './src/components/starlight/ThemeSelect.astro',
			},
		}),
	],
});
