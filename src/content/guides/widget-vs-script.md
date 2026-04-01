---
title: Widget vs Embedded Script
summary: Use the live-site context to choose the right extension instead of forcing one extension type to do both jobs.
problem: Site UI feels confusing when builders treat widgets and scripts as interchangeable.
outcome: You will choose the right extension type faster and avoid avoidable rewrites.
prerequisites:
  - Understanding of dashboard vs site surfaces
updatedAt: 2026-04-01
sourceMapRefs:
  - wix-embedded-scripts
featured: true
order: 3
---

Both widgets and embedded scripts live on the site side, but they serve different kinds of experiences.

## How to generate each type

Both are created through the same command — the difference is which option you pick at the prompt:

```bash
# Generate a widget
wix generate
# Choose "Site widget" when prompted

# Generate an embedded script
wix generate
# Choose "Embedded script" when prompted
```

After generation, the CLI scaffolds the correct file structure under `src/site/widgets/` or `src/site/embedded-scripts/` respectively.

## Choose a widget when

- the feature should be visually placed on a page
- the experience belongs in a bounded block
- visitors are supposed to see and interact with it directly in-page

## Choose an embedded script when

- the behavior follows the site across pages
- the feature is DOM-attached rather than block-placed
- you need sitewide or cross-page presence

## Quick memory trick

- Widget = placed experience
- Script = traveling behavior

## Example

- A review block belongs in a widget.
- A floating trust badge or persistent helper is often a better script candidate.

## Real-world examples

### Widget examples

- **Product review block** — site owner places it on a product page; visitors read and submit reviews inside a bounded area.
- **Pricing calculator** — a self-contained interactive tool the site owner drops onto a specific page.
- **Event RSVP form** — a visible, in-page form visitors interact with directly.
- **Image gallery or portfolio grid** — a placed visual block with its own layout and scroll behavior.

### Embedded script examples

- **Live chat bubble** — floats in the corner across every page; not tied to a single block.
- **Analytics or tracking pixel** — runs silently on every page load without any visible UI.
- **Cookie consent banner** — appears sitewide and persists across navigation.
- **Floating "back to top" button** — DOM-attached behavior that follows the visitor everywhere.
