# Agentic Agency — Resources

Public lead-magnet library for **[Agentic Agency](https://agenticagency.io)**, built as a separate site from AgenticVEO.

**Repository:** https://github.com/curious-noman/a2-resources  
**Expected GitHub Pages address (after enabling Pages):** https://curious-noman.github.io/a2-resources/  
**Future custom domain:** https://resources.agenticagency.io (not configured)

## Design system

The brand comes from `curious-noman/agentic-agency`, specifically `src/app/(app)/globals.css`, `Header.tsx`, and `ThemeLogo.tsx`.

- Signal orange: `#FF4F00`
- Dark canvas: `#050505`; dark surfaces `#111111` and `#1C1C1C`
- Light canvas: `#F8F7F5`; light surfaces `#F0EEE9`
- Inter for content; JetBrains Mono for micro-labels
- Thin borders, technical grid pattern, square CTAs, subtle hover/glow effects
- Dark by default, with remembered light/dark toggle
- Header loads the two theme-specific logo images from the Agentic Agency website, with text fallback

## Features

- Static, responsive homepage with searchable category filters and three resource cards.
- Three dedicated, search-indexable resource landing pages, each with twenty actionable concepts/checks.
- Downloadable Markdown checklists.
- Interactive checkboxes with browser-local progress, print, and reset.
- Basic SEO titles, canonical links, sitemap, and robots.txt.
- GitHub Actions workflow for deployment to GitHub Pages.
- No runtime dependencies, database, or build step.

## Project layout

```
index.html                      Resource directory
r/before-adding-ai/index.html   AI adoption checklist
r/vibecoded-app-launch/index.html
r/ai-concepts-field-guide/index.html
downloads/*.md                  Downloadable guides
assets/styles.css               Agentic Agency-themed design
assets/site.js                  Search, filtering, theme, progress
.github/workflows/pages.yml     GitHub Pages deployment
```

## Deployment

In the repository, visit **Settings → Pages → Build and deployment**, and set **Source: GitHub Actions**. The workflow deploys the static files to GitHub Pages on pushes to `main`.

The expected site address is `https://curious-noman.github.io/a2-resources/` **only after** GitHub Pages is enabled and the workflow completes successfully.

To move the site to `resources.agenticagency.io`, configure a custom domain and DNS in GitHub Pages or migrate the static files to Cloudflare Pages. Update canonical links, `sitemap.xml`, and `robots.txt` for whichever public domain becomes the primary URL.

## Editing and publishing resources

Resource HTML currently lives directly in `r/<slug>/index.html`, with matching cards in `index.html` and downloadable files in `downloads/`. A new resource therefore needs a page, a card, and a file. The existing three are editable examples and should be reviewed before public promotion.

## Lead capture

This is a **lead-magnet landing-page foundation**, not a connected email-capture system. Guides are currently freely accessible; no personal details are collected. Integrating a CRM, newsletter, or gated delivery requires a real form endpoint, an appropriate privacy notice, and (for genuine gated assets) nonpublic asset delivery. Do not treat a public repository file as private merely because a form is placed in front of it.
