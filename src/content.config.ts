import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

export const collections = {
	docs: defineCollection({
		loader: docsLoader(),
		schema: docsSchema({
			extend: z.object({
				section: z.string().optional(),
				sourceMapRefs: z.array(z.string()).default([]),
				related: z.array(z.string()).default([]),
			}),
		}),
	}),
	guides: defineCollection({
		loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/guides' }),
		schema: z.object({
			title: z.string(),
			summary: z.string(),
			problem: z.string(),
			outcome: z.string(),
			prerequisites: z.array(z.string()).default([]),
			updatedAt: z.coerce.date(),
			sourceMapRefs: z.array(z.string()).default([]),
			featured: z.boolean().default(false),
			order: z.number().default(999),
		}),
	}),
	changelog: defineCollection({
		loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/changelog' }),
		schema: z.object({
			title: z.string(),
			summary: z.string(),
			date: z.coerce.date(),
			type: z.enum(['launch', 'docs', 'ai', 'content', 'design', 'infra']),
			links: z
				.array(
					z.object({
						label: z.string(),
						href: z.string(),
					})
				)
				.default([]),
			image: z.string().optional(),
		}),
	}),
	officialSources: defineCollection({
		loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/officialSources' }),
		schema: z.object({
			label: z.string(),
			url: z.string().url(),
			owner: z.enum(['Wix', 'Astro', 'Mintlify', 'Moenga Space']),
			topics: z.array(z.string()).default([]),
			lastVerifiedAt: z.coerce.date(),
			notes: z.string().optional(),
		}),
	}),
	community: defineCollection({
		loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/community' }),
		schema: z.object({
			title: z.string(),
			summary: z.string(),
			type: z.enum(['pattern', 'skill', 'showcase', 'resource']),
			author: z.string(),
			authorUrl: z.string().url().optional(),
			updatedAt: z.coerce.date(),
			tags: z.array(z.string()).default([]),
		}),
	}),
};
