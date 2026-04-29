# Karvina Grant Portal

Static multi-page demo portal for Karvina grants and dotations with separate applicant and administration views.

## Open locally

Run the local preview server:

```bash
node serve.mjs
```

Then open `http://localhost:4173`.

## What is included

- Mock login landing page
- Separate top-level applicant page
- Separate top-level administration/evaluator page
- Program subpage template with fields, workflow, and attachment checklist
- Grant data stored in `grants.json`
- Lightweight local preview server with no dependencies

## Publishing

Because this is a static site, it can be published easily on:

- Netlify
- Cloudflare Pages
- GitHub Pages
- Any municipal web server that can host HTML, CSS, and JS files
