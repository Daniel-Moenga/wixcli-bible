---
title: Contributing a Guide
summary: How to write and submit a practical guide for the Wix CLI Bible.
problem: Contributors want to help but do not know the format, quality bar, or submission process.
outcome: You will know exactly how to write a guide that fits the handbook and how to submit it.
prerequisites:
  - Git installed
  - A GitHub account
  - Familiarity with Markdown
updatedAt: 2026-04-01
sourceMapRefs:
  - wix-cli-overview
featured: false
order: 6
---

Guides are the practical layer of the handbook. They solve specific problems with clear steps.

## What makes a good guide

A guide should be:

- **Task-shaped** -- it solves one specific problem, not a broad topic.
- **Actionable** -- the reader can follow the steps and get a result.
- **Grounded** -- claims about platform behavior cite official sources.
- **Short** -- aim for 300-600 words. If it needs more, consider splitting it.

## Guide structure

Every guide uses this frontmatter:

```yaml
---
title: Your Guide Title
summary: One sentence describing what this guide helps with.
problem: The specific confusion or pain point this addresses.
outcome: What the reader will know or be able to do after reading.
prerequisites:
  - What the reader needs before starting
updatedAt: 2026-04-01
sourceMapRefs:
  - wix-cli-reference
featured: false
order: 999
---
```

After the frontmatter, write the guide body in Markdown. Use headings, code blocks, and short paragraphs.

## Submission process

1. Fork the repository.
2. Create a new file in `src/content/guides/` with a kebab-case name like `your-topic.md`.
3. Write the guide using the frontmatter template above.
4. Create a matching page file in `src/pages/guides/your-topic.astro` (copy an existing one and change the entry name).
5. Open a pull request with a clear title.

## Quality checklist

Before submitting, verify:

- [ ] The frontmatter is complete and valid.
- [ ] The guide solves one specific problem.
- [ ] Code examples are tested and use the current Wix CLI.
- [ ] Official sources are cited where platform behavior is discussed.
- [ ] The writing is clear and free of jargon that is not explained.
- [ ] You are not mixing old and new Wix CLI documentation.

## What not to do

- Do not write a guide that restates official docs without adding clarity.
- Do not guess at platform behavior. If you are unsure, say so or cite the source.
- Do not submit guides about deprecated or legacy CLI versions.
