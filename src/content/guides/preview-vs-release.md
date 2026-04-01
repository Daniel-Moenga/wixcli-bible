---
title: Preview vs Release
summary: Learn when preview is enough and when release is the missing step behind confusing extension behavior.
problem: Builders often assume preview and release are interchangeable, then lose time debugging the wrong layer.
outcome: You will know what each step proves and when release matters more than more frontend changes.
prerequisites:
  - Familiarity with wix build
  - Familiarity with wix preview
updatedAt: 2026-04-01
sourceMapRefs:
  - wix-cli-reference
  - wix-embedded-scripts
featured: true
order: 2
---

`preview` and `release` are related, but they do not answer the same question.

## At a glance

| Aspect | Preview | Release |
|---|---|---|
| **Purpose** | Test the build in a sandbox environment | Push the build through the full platform lifecycle |
| **URL** | Generates a temporary preview URL for inspection | No separate URL — the app becomes live on the site |
| **Extension registration** | Extensions are loaded but not formally registered with the platform | Extensions are fully registered and recognized by Wix |
| **When to use** | After every build to verify appearance and basic behavior | When preview looks correct and you need platform-level features to activate |

## Preview proves

- the project built successfully
- you can host and share a test build
- collaborators can inspect the result

## Release proves

- the project is released through the proper platform flow
- extension registration-sensitive behavior has been handled

## When release becomes the real suspect

Release is worth checking when:

- a site widget exists locally but does not behave right in platform context
- an embedded script feels partially wired
- the build seems clean but the platform still does not recognize the feature the way you expect

## Use this debugging question

Ask:

> Am I debugging code, or am I debugging lifecycle state?

That one question prevents a lot of wasted effort.

## Decision flowchart

When something is not working after `wix build`, walk through this sequence:

1. **Did it build clean?** → Run `wix preview`.
2. **Does preview look wrong?** → The problem is in your code. Fix it, rebuild, preview again.
3. **Does preview look right but the platform does not recognize the feature?** → Run `wix release`. This is a lifecycle problem, not a code problem.
4. **Does it still not work after release?** → Now check extension registration, permissions, and platform-level configuration.

Most debugging dead ends happen at step 3: the code is fine, but the builder keeps editing code because they never ran `release`.
