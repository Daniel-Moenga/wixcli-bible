---
title: How to Contribute a Pattern
summary: Guidelines for submitting design patterns, skills, and showcase entries to the community.
type: resource
author: Wix CLI Bible
updatedAt: 2026-04-01
tags: [contributing, community, meta]
---

The community section grows through contributions. Whether you've discovered a useful pattern, refined a workflow, or built something worth showcasing, here's how to share it.

## What makes a good pattern

A strong community entry is **specific**, **practical**, and **tested**. It should solve a real problem that other Wix CLI developers encounter. Avoid abstract theory — show the structure, the code, and the reasoning behind your decisions.

Good patterns share these traits:

- **Focused scope** — One pattern per file. "Dashboard CRUD" is a pattern. "Everything about dashboards" is a book.
- **Concrete examples** — Include component structures, code snippets, or command sequences. Readers should be able to follow along.
- **Honest trade-offs** — If your approach has limitations, say so. The community trusts entries that acknowledge what they don't cover.

## Frontmatter format

Every community entry needs valid frontmatter:

```yaml
---
title: Your Pattern Title
summary: A one-sentence description of what this pattern solves.
type: pattern          # pattern | skill | showcase | resource
author: Your Name
authorUrl: https://github.com/yourname   # optional
updatedAt: 2026-04-01
tags: [relevant, tags, here]
---
```

The `type` field determines where your entry appears on the community page. Choose `pattern` for reusable structures, `skill` for workflows and techniques, `showcase` for project examples, and `resource` for meta content like this guide.

## How to submit

1. Fork the [Wix CLI Bible repository](https://github.com/Daniel-Moenga/wixcli-bible).
2. Create your Markdown file in `src/content/community/`.
3. Follow the frontmatter format above and write your content.
4. Open a pull request with a brief description of what your entry covers and why it's useful.

Entries are reviewed for clarity, accuracy, and fit. We may suggest edits, but the goal is always to ship your contribution — not gatekeep it.
