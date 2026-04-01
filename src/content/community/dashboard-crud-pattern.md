---
title: Dashboard CRUD Pattern
summary: A reusable pattern for building admin CRUD pages with the Wix Design System.
type: pattern
author: Wix CLI Bible
updatedAt: 2026-04-01
tags: [dashboard, crud, pattern, design-system]
---

Most Wix CLI dashboard pages follow the same shape: a list of items, a way to view details, and a modal for creating or editing. Once you internalize this pattern, every new admin page becomes a variation on the same theme.

## Mental model

Think of a CRUD dashboard as three layers:

1. **List view** — A table or card grid showing all records. This is the default state when the page loads. It handles filtering, sorting, and bulk actions.
2. **Detail view** — A side panel or dedicated route that shows a single record in full. Users reach it by clicking a row in the list.
3. **Create / Edit modal** — A form overlay for adding new records or modifying existing ones. It shares field definitions with the detail view but lives in a modal so users don't lose their place in the list.

## Component structure

```
DashboardPage/
├── PageHeader          — title, description, primary "Add" button
├── FilterBar           — search input, status dropdown, date range
├── ItemTable           — Wix Design System <Table> with sortable columns
│   └── RowActions      — edit, delete, duplicate per row
├── DetailPanel         — <SidePanel> showing full record
└── ItemFormModal       — <Modal> wrapping a <FormField> group
```

Keep each layer in its own component file. The page component orchestrates state — which item is selected, whether the modal is open — and passes callbacks down.

## Tips for the Wix Design System

- Use `<Table>` with `<Table.Column>` for list views. It handles selection, sorting, and infinite scroll out of the box.
- Wrap form fields in `<FormField>` for consistent labels, tooltips, and validation states.
- Prefer `<SidePanel>` over full-page navigation for detail views. It keeps the list visible and reduces context-switching.
- Use `<Modal>` with `<Modal.Content>` for create/edit forms. Set `shouldCloseOnOverlayClick={false}` to prevent accidental data loss.
- Leverage `<EmptyState>` for zero-data scenarios — it's already styled to match the dashboard aesthetic.

Start with the list view, get the data flowing, then layer in the detail panel and modal. Each piece is independent enough to build and test in isolation.
