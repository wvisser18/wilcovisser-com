# wilcovisser.com

A small static brochure site for Wilco Visser's independent test management/consultancy work.

## Who Wilco is

- Independent Test Consultant, testing & delivering software projects since 2010 across telecom, mortgage, media and digital industries (Vodafone, T-Mobile among past clients/employers).
- ISTQB certified. Current role: **Test Coordinator at Just Brands**. (A prior LinkedIn scrape suggested "Manager Software Development & Testing at C. Steinweg Handelsveem" — that was wrong/outdated and must not be used anywhere.)
- Education: Hogeschool van Amsterdam, 2005–2009 (IT Service Management / Business Engineering).
- Public-facing contact address: **info@wilcovisser.com**. The personal account on file (`wvisser18@hotmail.com`) must never appear on the site.

## Certifications

Badge artwork available in `assets/images/certs/`:
- ISTQB Certified Tester, Foundation Level (`istqb-ctfl.avif`)
- Professional Agile Leadership I — PAL I, Scrum.org (`pal-1.png`)
- Professional Scrum Product Owner I — PSPO I, Scrum.org (`pspo-i.png`)

Text-only (no badge artwork, sourced from LinkedIn, list on the site without an image):
- Enterprise Product Management Fundamentals (Microsoft, Sep 2025)
- Certified Software Tester / CSTE (ISTQB, Dec 2021)
- Agile Scrum Foundation Certificate (EXIN, Oct 2016)
- Change & Inspire with Storytelling (ICM, Dec 2020)
- Developing Mobile Apps (NTI, Aug 2019)

Note: `istqb-ctfl.avif` was originally named `istqb-ctfl-4-logo.jpg` in the old asset folder but the file content was actually AVIF data, not a JPEG. It's been renamed with the correct extension rather than re-encoded — all current major browsers (Chrome, Firefox, Safari, Edge) render AVIF natively, so no conversion was needed. The duplicate PAL I badge file (`PALI.png`, identical to `pal-1_400.png`) was dropped, keeping one copy as `pal-1.png`.

## Content history: what was kept vs dropped

The site previously ran on WordPress (export preserved at `legacy/WordPress.2023-11-27.xml`, historical reference only, not used at runtime). It was built on a generic Elementor "workshop business" theme. Reviewing that export:

**Kept** (genuinely Wilco-written content, carried into the new site):
- Hero headline/tagline, the "About Me" bio, and the three service blurbs (Test Management / Test Execution / Test Automation) from the old Home page.
- A short essay on Test Policy / Agile testing / the role of a Test Manager, originally on a page called "Workshop 1" — repurposed here as an "On Test Management" subsection of About, since the content has nothing to do with workshops.

**Dropped entirely** (confirmed unedited Elementor template placeholder filler, not real content — do not resurrect):
- The Workshops listing page and Workshop 2/3/4 pages (fake "Duration/Participants/Cost", generic FAQ templates, "Example Projects From Our Students" galleries).
- The old About page ("Use this section to describe your company...").
- The old Contact page's fake details: phone `123-456-7890`, address "123 Main Street, New York, NY 10001", a Google Maps embed pointing at the London Eye.
- Templated student/instructor testimonial cards, a draft Privacy Policy, the default WordPress "Sample Page" and "Hello world!" post, and leftover theme image assets unrelated to this business (`dry-cleaning_*` files, placeholder galleries, generic avatar images).

## Known gaps

- **No headshot photo.** The old site referenced `WV_cropped.png` but that file was never present in this project folder. The site currently ships with a CSS-only placeholder (circle with "WV" initials) in the About section. Replace it with a real photo by adding e.g. `assets/images/headshot.jpg` and swapping the placeholder markup in `index.html` for an `<img>` tag.
- No contact form — by design, since a working form needs a third-party backend (Formspree, Netlify Forms, etc.), which conflicts with the "no dependencies" approach. Contact is a `mailto:` link plus the address as plain text.

## Working conventions for this repo

- Plain static HTML/CSS/JS. No build step, no package manager, no framework, no CSS library, no JS dependency. Don't introduce one without an explicit request — this is a deliberate constraint, not an oversight.
- No dev server needed — edit `.html`/`.css`/`.js` and open `index.html` directly in a browser to preview.
- Semantic HTML5, flat/simple CSS class names, vanilla JS only. Keep `assets/js/main.js` small and feature-scoped (currently: mobile nav toggle + smooth scroll).
- Reach for a subagent/heavier research only for things like generating new image assets or checking current GitHub Pages/DNS documentation before changing deploy config — not for routine HTML/CSS copy edits.
- This is a brochure site with no automated test suite. Verification before pushing is manual/visual: open the page locally, check it at mobile/tablet/desktop widths, proofread text, click the `mailto:` link, confirm images render.
- Hosting: GitHub Pages, custom domain `wilcovisser.com` configured via the `CNAME` file at the repo root plus DNS records in Porkbun (Porkbun is the registrar/DNS host only, not where the site is actually served from).
