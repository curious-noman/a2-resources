# 20 checks before you launch a vibe-coded app

A pre-launch checklist for AI-assisted apps: security, reliability, usability, and ownership.

**Audience:** Indie builders, founders, and AI-assisted developers

**Outcome:** Catch the important problems before you invite the first real users.

## Product and data

- [ ] **Validate the core task** — Can a new user complete the main job from start to finish?
- [ ] **Confirm data ownership** — Know which database, service, or tenant owns every record.
- [ ] **Review privacy expectations** — Publish accurate notices and collect only required data.
- [ ] **Separate development and production** — Never test destructive changes against live users.
- [ ] **Create a restore plan** — Test backup and recovery, not just backup creation.

## Security

- [ ] **Protect secrets** — Move API keys to server-side environment variables.
- [ ] **Audit authentication** — Test account creation, sessions, reset flows, and logout.
- [ ] **Enforce authorization** — Check access per user and per resource on the server.
- [ ] **Validate inputs** — Reject malformed, oversized, and unsupported requests.
- [ ] **Review dependencies** — Check known vulnerabilities and remove unused packages.

## Reliability

- [ ] **Test error states** — Show clear messages for failures, offline mode, and timeouts.
- [ ] **Check performance** — Load-test the routes and queries that matter.
- [ ] **Add observability** — Capture errors, request context, and useful alerts.
- [ ] **Make deploys reversible** — Have a rollback plan for broken releases.
- [ ] **Test across devices** — Verify responsive layouts, keyboards, and browsers.

## Operations

- [ ] **Connect a real domain** — Verify DNS, HTTPS, and redirects.
- [ ] **Set sensible usage limits** — Prevent runaway API spending and abusive requests.
- [ ] **Check accessibility** — Use semantic labels, visible focus, and adequate contrast.
- [ ] **Test email flows** — Verify delivery, links, sender reputation, and unsubscribe actions.
- [ ] **Write the support path** — Make it easy for a real user to report an issue.

---

Agentic Agency · https://agenticagency.io
