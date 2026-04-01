---
title: Responsive Widget Pattern
summary: How to build site widgets that adapt to any container size without breaking.
type: pattern
author: Wix CLI Bible
updatedAt: 2026-04-01
tags: [site, widget, responsive, css]
---

Site widgets live inside containers you don't control. The site owner decides the column width, the section padding, and the device breakpoints. Your widget needs to look right in all of them without knowing the page layout in advance.

## Container queries over media queries

Media queries respond to the **viewport** width. Container queries respond to the **parent element** width. Since your widget's parent is a Wix section or column — not the viewport — container queries are almost always the better choice.

```css
.widget-root {
  container-type: inline-size;
}

@container (max-width: 480px) {
  .widget-grid {
    grid-template-columns: 1fr;
  }
}
```

This means your widget collapses to a single column when its container is narrow, regardless of whether the visitor is on mobile or the site owner placed it in a sidebar.

## Avoid fixed widths

Never set a fixed `width` on the widget root. Use `width: 100%` and let the container dictate the size. For internal elements, prefer `max-width` with percentage or `min()` / `clamp()` values so they scale gracefully.

```css
.widget-card {
  width: min(100%, 360px);
}
```

## Testing: editor vs live site

The Wix editor renders widgets in an iframe with its own viewport. Dimensions in the editor preview don't always match the published site. Always test both:

1. **Editor preview** — Resize the widget's column in the editor and confirm nothing overflows or collapses unexpectedly.
2. **Live site preview** — Use `wix dev` and open the site in a real browser. Test at common breakpoints (375px, 768px, 1280px) and drag the browser window to catch in-between sizes.
3. **Iframe quirks** — Some CSS features behave differently inside iframes. If a style works in dev but breaks in the editor, check whether the iframe's own viewport is triggering a media query you didn't intend.

Build from the smallest size up. If the widget looks right at 280px wide, it will look right everywhere.
