# Arvind Tutorials — Redesign Concept

Independent redesign concept (not the official site). Plain HTML, CSS and vanilla JS — no build step, no dependencies, no external requests.

## Content source
Only information visible on the reference site was used (Home, About, Courses, Free Demo, Contact): 21+ years, CBSE Classes IX–XII, course list, 10-day free demo, address (Sector 11, Near Miraj Cinema, New Panvel), phones 9892516908 / 9702326677, map coordinates.

**Intentionally omitted** (nothing verified): faculty, results, testimonials, fees, timings, email. Email is a marked placeholder in `index.html`.

## Run locally
```
cd arvind-tutorials
python3 -m http.server 8000     # or: npx serve
```
Open http://localhost:8000

## Deploy on Vercel (free)
1. Push this folder to a GitHub repo.
2. vercel.com → Add New → Project → import the repo.
3. Framework Preset: **Other**. Build command: none. Output directory: leave blank (root).
4. Deploy. Or via CLI: `npx vercel --prod` inside the folder.

## Enquiry
There is no backend, so there is no form submission. The enquiry card builds a pre-filled SMS to 9892516908 that the visitor sends from their own phone. Call links use `tel:`.
For real form handling later, connect a free service (e.g. Formspree) or a Vercel serverless function.

## Adding verified content
Add a new `<section>` before `#faq`, and a nav link. Template, once genuine data is provided:
```html
<section id="results" class="sec"><div class="wrap"><h2>Results</h2>
 <div class="grid3"><article class="card"><h3>[Verified result]</h3><p>[Source/year]</p></article></div></div></section>
```
Do the same for faculty (name, qualification, subject) and testimonials (only with permission).

## Customise
Colours are CSS variables at the top of `styles.css`. Animations honour `prefers-reduced-motion`.
