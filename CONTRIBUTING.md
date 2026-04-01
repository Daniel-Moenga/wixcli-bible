# Contributing

Thanks for helping improve Wix CLI Bible.

## What good contributions look like

- Clearer explanations of the current Wix CLI
- Better guides for real build problems
- Stronger citations and source mapping
- Fixes to structure, wording, accessibility, or design quality
- Corrections when Wix platform behavior has changed

**Want to write a guide?** See the [Contributing a Guide](/guides/contributing-a-guide/) page on the site for the format, quality bar, and submission process.

## Before opening a PR

1. Check whether Wix already documents the behavior differently.
2. Prefer the current unified CLI sources over older Wix CLI material.
3. Keep the writing practical, specific, and beginner-safe.
4. Credit Wix, Astro, or other upstream sources when your contribution depends on them.

## Content rules

- Do not treat this project as the source of truth over Wix docs.
- Do not add platform-sensitive claims without evidence.
- Do not silently mix old and new Wix CLI generations.
- Prefer short sections, clear headings, and practical examples over long theory dumps.

## Code rules

- Keep the dark-first visual system intact.
- Preserve the compact, polished docs density.
- Keep the Ask AI beta citations-first and refusal-capable.
- Avoid adding unnecessary dependencies when Astro/Starlight already solves the job.

## Local workflow

```bash
npm install
npm run dev
npm run build
```

## Pull request checklist

- explain what changed
- note whether the change affects docs, design, AI behavior, or infra
- include citations if the change updates platform behavior
- verify the site still builds
