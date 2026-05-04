# Mongolian American Community Support — Website

A simple, single-page static website for a Mongolian community-focused
nonprofit that helps Mongolians in the U.S. and Mongolia understand
visa, immigration, and settlement processes.

The site is intentionally calm, warm, and trustworthy — designed to feel
like a community nonprofit, not a law firm or visa agency. The visual
direction is inspired by [gobifoundation.com](https://gobifoundation.com/),
but no copy, images, colors, or branding from that site are reused.

## Highlights

- Built with **React 18 + Vite + Tailwind CSS** (no backend, fully static).
- **English / Mongolian language toggle** (Cyrillic), persisted to `localStorage`.
- **Calendly “Book a Free Consultation” CTAs** in:
  - Header navigation
  - Hero section
  - Services section CTA block
  - Each team profile card (with team-specific Calendly link)
  - Contact section
  - Footer
  - All Calendly links open in a new tab via `target="_blank"` + `rel="noopener noreferrer"`.
- **Polished placeholder visuals**:
  - SVG hero placeholder with soft gradient, abstract shapes, and a subtle dotted pattern.
  - Circular profile avatar placeholders with member initials and per-card gradient palettes.
  - No copyrighted or random photos used.
- **Accessibility & SEO**:
  - Semantic HTML, proper heading hierarchy, skip-to-content link.
  - Keyboard-accessible buttons, focus-visible rings, ARIA labels on icons and form controls.
  - Meta title and meta description in `index.html`.
  - `<html lang>` is updated when the language is toggled.
- **Responsive** mobile-first layout with a hamburger menu under `lg`.

## Sections

1. Header / Navigation (logo, links, EN/MN toggle, Calendly CTA)
2. Hero with prominent Calendly CTA + polished image placeholder
3. Mission
4. Services (4 cards) + “Not sure where to start?” Calendly CTA block
5. Who We Help (6 audience cards)
6. Trust / Disclaimer (3 trust cards + disclaimer panel)
7. About / Team (4 profile cards, click avatar or button to book Calendly)
8. Contact (info + static form)
9. Emergency / Legal Notice
10. Footer (multi-column links, disclaimer, social placeholders)

## Project structure

```
.
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
├── public/
│   └── favicon.svg
└── src/
    ├── App.jsx
    ├── main.jsx
    ├── index.css
    ├── constants.js                  # Calendly URLs, section IDs
    ├── i18n/
    │   ├── LanguageContext.jsx       # EN/MN provider + hook + toggle
    │   └── translations.js           # All EN + MN copy
    └── components/
        ├── Header.jsx
        ├── Hero.jsx
        ├── Mission.jsx
        ├── Services.jsx
        ├── WhoWeHelp.jsx
        ├── Trust.jsx
        ├── About.jsx
        ├── Contact.jsx
        ├── EmergencyNotice.jsx
        ├── Footer.jsx
        └── ui/
            ├── Button.jsx            # Renders <a> for href / <button> otherwise
            ├── PlaceholderImage.jsx  # SVG gradient + shapes placeholder
            ├── ProfileAvatar.jsx     # Circular initial-based avatar
            └── SectionHeading.jsx
```

## Running locally

You need Node.js 18+ and npm.

```bash
npm install
npm run dev
```

Then open the printed URL (default: http://localhost:5173).

### Build for production

```bash
npm run build
npm run preview
```

The static output lives in `dist/` and can be deployed to any static host
(Netlify, Vercel, Cloudflare Pages, GitHub Pages, S3, etc.).

## Deploying to GitHub Pages

This repo includes a ready-to-go GitHub Actions workflow at
`.github/workflows/deploy.yml` that builds the site and publishes it to
GitHub Pages on every push to `main`.

The workflow auto-derives the correct base path from the repo name
(`/<repo>/`), so it works for any GitHub repo without code edits.

### One-time setup

1. **Push to GitHub** (you've already created `temvvlena/ngo-repo`):
   ```bash
   git add .
   git commit -m "Initial site"
   git push -u origin main
   ```
2. **Enable Pages**: in the repo, go to **Settings → Pages**, then under
   **Build and deployment → Source**, select **GitHub Actions**.
3. The next push to `main` will trigger the workflow. You can also run
   it manually from the **Actions** tab → *Deploy to GitHub Pages* →
   *Run workflow*.
4. Once the workflow finishes, the site will be live at:

   ```
   https://<your-username>.github.io/<repo-name>/
   ```

   For this repo that's: <https://temvvlena.github.io/ngo-repo/>

### How the base path works

GitHub Pages project sites are served from a sub-path
(`/<repo>/`), not the domain root. Vite needs to know this at build
time so all asset URLs are correct. The workflow sets:

```yaml
env:
  BASE_PATH: /${{ github.event.repository.name }}/
```

…which `vite.config.js` reads:

```js
const base = process.env.BASE_PATH || "/";
```

If you later move to a custom domain or to a user/organization site
(`username.github.io`), the path becomes `/`. Either:

- Set a custom domain in **Settings → Pages → Custom domain** and add a
  `CNAME` file, or
- Override the workflow's `BASE_PATH` to `/`.

### Triggering a redeploy

Any push to `main` redeploys. To deploy a one-off change without
pushing, go to **Actions → Deploy to GitHub Pages → Run workflow**.

## Customizing

- **Calendly URLs** — edit `src/constants.js`:
  - `CALENDLY_MAIN_URL` — main org-wide consultation link
  - `TEAM_CALENDLY_URLS` — per-team-member booking links (4 entries)
- **Copy / translations** — edit `src/i18n/translations.js`. All visible
  strings (English + Mongolian) live there. Replacing or extending
  translations does not require touching component files.
- **Team members** — update the `members` arrays in both `en` and `mn`
  blocks of `translations.js`. Profile avatars are auto-generated from
  the member’s name.
- **Replace placeholders with real photos** — swap `PlaceholderImage`
  and `ProfileAvatar` usages for real `<img>` tags. Each placeholder
  already has descriptive `alt` text via `aria-label` on the wrapper.
- **Brand colors** — adjust the `brand` and `sand` palettes in
  `tailwind.config.js`.

## Notes on tone & legal safety

The copy intentionally avoids any guarantees about visa outcomes and
makes clear this organization is **not** a law firm. It uses safe,
nonprofit-style language (resources, guidance, education, referrals)
and surfaces a disclaimer in the Trust section, the Emergency Notice,
and the Footer.

For legal advice, visitors are consistently directed to **licensed
immigration attorneys or accredited representatives**.
