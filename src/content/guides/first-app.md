---
title: Build Your First App Without Getting Lost
summary: A beginner-safe path through setup, generation, and the first meaningful extension choice.
problem: Starting a Wix CLI app can feel confusing because creation, auth, generation, and surface choice get mixed together.
outcome: You will have a clean first-project path and know what to generate next instead of guessing.
prerequisites:
  - Node.js installed
  - Git installed
  - A Wix account
updatedAt: 2026-04-01
sourceMapRefs:
  - wix-cli-overview
  - wix-cli-reference
featured: true
order: 1
---

Start with the app path unless you already know you need headless.

## 1. Create the project

```bash
npm create @wix/new@latest app
```

The CLI will walk you through several prompts. Here is what to expect:

```
? What do you want to create? › App
? What is the app name? › my-first-app
? Select a template › Blank template
? Choose a package manager › npm

Creating your app...

✔ App created successfully

Next steps:
  cd my-first-app
  npm install
  wix login
  wix dev
```

After the prompts finish, move into the new directory and install dependencies before continuing.

## What your folder should look like

After creation and `npm install`, you should see a structure similar to this:

```
my-first-app/
├── src/
│   ├── dashboard/
│   │   └── pages/
│   └── site/
│       └── widgets/
├── wix.config.json
├── package.json
├── tsconfig.json
├── node_modules/
└── .gitignore
```

The exact contents under `src/` depend on the template you chose. A blank template starts nearly empty — that is normal. You will populate it with `wix generate` in step 5.

## 2. Verify auth before debugging anything

```bash
wix login
wix whoami
```

If auth is wrong, everything after this becomes harder to reason about.

### If `wix login` fails

| Symptom | What to try |
|---|---|
| Browser never opens | Run `wix login --browser` to force the browser flow, or check that your default browser is set correctly. |
| "Not authorized" after login | Make sure you are logging in with the account that owns the site or has collaborator access. |
| Token expired errors later | Run `wix login` again — tokens are not permanent. |
| Corporate proxy or VPN blocks it | Try disconnecting the VPN temporarily, or check whether your network blocks OAuth callback URLs. |

## 3. Start local development

```bash
wix dev
```

At this point, do not try to solve architecture with styling. Decide the first surface first.

## 4. Pick your first extension based on the user

- If the site owner needs to manage something: start with a dashboard page.
- If visitors must see it directly on the site: start with a widget.
- If the browser should not own the logic: plan a backend API too.

## 5. Generate instead of hand-rolling structure

```bash
wix generate
```

Accept the generated structure at first. Learn the wiring before reorganizing it.

## 6. Ship through the real loop

```bash
wix build
wix preview
wix release
```

Remember that preview is for testing and release is the step that matters for registration-sensitive behavior.

## What beginners should optimize for

- correct surface choice
- clean loop discipline
- clear understanding of preview vs release
- not mixing legacy docs with the current CLI
