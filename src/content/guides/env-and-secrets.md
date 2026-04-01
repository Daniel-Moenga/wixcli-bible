---
title: Environment Variables and Secrets
summary: Keep local and remote configuration clean so onboarding and deployment stay predictable.
problem: Teams frequently blur local env files with remote config and then wonder why machines disagree.
outcome: You will understand the basic rhythm for storing, pulling, and cleaning remote environment values.
prerequisites:
  - Familiarity with terminal basics
updatedAt: 2026-04-01
sourceMapRefs:
  - wix-cli-reference
featured: false
order: 4
---

Environment trouble is often not “advanced.” It is usually a clarity problem.

## The useful command trio

```bash
wix env set
wix env pull
wix env remove
```

## Example `.env.local` file

A typical local env file for a Wix CLI app might look like this:

```
# API keys for third-party services
PAYMENT_GATEWAY_KEY=sk_test_abc123def456
MAPS_API_KEY=AIzaSyB-example-key

# Internal configuration
APP_DEBUG=true
LOG_LEVEL=verbose
```

This file should be in `.gitignore` and never committed. Each developer creates their own from a shared template or by running `wix env pull`.

## Use them this way

- `wix env set`: store remote config or secrets.
- `wix env pull`: hydrate a new machine or sync a teammate setup.
- `wix env remove`: clean up outdated config intentionally.

## What goes where

| Value type | Where to store | Why |
|---|---|---|
| API secret keys | `wix env set` (remote) | Stays server-side, never reaches the browser, syncs across team with `wix env pull` |
| Third-party API keys (public-safe) | `.env.local` or `wix env set` | Acceptable in frontend only if the provider explicitly marks them as publishable |
| Debug flags, log levels | `.env.local` only | Developer-specific, should not affect other machines or production |
| Shared team config (non-secret) | `wix env set` (remote) | Every developer gets the same value via `wix env pull` |
| Passwords, tokens, private keys | `wix env set` (remote) | Never in files, never in version control |

## ⚠ Warning: frontend-visible environment variables

Any value that reaches your widget or embedded script code is **visible to anyone who opens browser DevTools**. This includes values bundled at build time.

If a key would cause damage in the wrong hands (payment keys, admin tokens, database credentials), it must stay in backend code only. Use a backend HTTP function or service to proxy requests that need secrets — never pass them to the client.

## Operational habits that help

- name values clearly
- pull env vars on new machines before assuming the app is broken
- keep secrets out of the frontend
- document which values are required for local development
