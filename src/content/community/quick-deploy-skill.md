---
title: Quick Deploy Workflow
summary: A streamlined build-preview-release workflow for fast iteration.
type: skill
author: Wix CLI Bible
updatedAt: 2026-04-01
tags: [workflow, deploy, release, productivity]
---

The fastest path from code change to deployed app is shorter than most developers expect. Here's the workflow distilled to its essentials.

## The three commands

```bash
# 1. Build and create a preview version
wix app build
wix app create-version

# 2. Preview it (installs on your dev site without publishing)
wix app install

# 3. When you're confident, release to production
wix app create-version --release
```

## When to preview vs release

**Preview** when you're iterating on a feature and want to verify it on a real site without affecting live users. Preview versions are visible only to you and any collaborators on the dev site. Use this for visual checks, integration testing, and stakeholder demos.

**Release** when the change is ready for production. A release version becomes the live version for every site that has your app installed. There's no undo — if something breaks, you'll need to push a fix and release again.

## The fast loop

For day-to-day development, the tightest loop is:

1. Run `wix dev` for local development with hot reload.
2. When a feature is complete, run `wix app build && wix app create-version` to generate a preview.
3. Install the preview on your dev site and verify.
4. Repeat steps 1–3 until satisfied.
5. Run `wix app create-version --release` once to ship.

Skip the preview step only for trivial changes (copy fixes, minor style tweaks) where the risk of regression is near zero. For everything else, the extra thirty seconds of previewing saves hours of debugging in production.
