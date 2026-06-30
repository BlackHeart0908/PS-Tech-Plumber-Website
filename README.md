# PS Tech (Problem Solver Tech) — Website

Astro + Tailwind static site for PS Tech, Indore's multi-service home solutions company.
Optimised for **Google Map Pack local SEO** — targeting "plumber in Indore" and related searches.

---

## Local Development

```bash
npm install
npm run dev        # http://localhost:4321
```

## Build for Production

```bash
npm run build      # outputs to dist/
npm run preview    # preview the built site locally
```

---

## Cloudflare Pages — Exact Build Settings

| Setting | Value |
|---|---|
| **Framework preset** | Astro |
| **Build command** | `npm run build` |
| **Build output directory** | `dist` |
| **Root directory** | *(leave empty — root of repo)* |
| **Node.js version** | `18` (set in Environment variables: `NODE_VERSION = 18`) |

### Environment Variables (Pages dashboard → Settings → Environment Variables)

| Variable | Value | Notes |
|---|---|---|
| `NODE_VERSION` | `18` | Required for Astro 4.x |
| `RESEND_API_KEY` | `<your key>` | From resend.com — free tier: 100 emails/day |

### Form Handling (Cloudflare Pages Functions)

Forms post to `/api/contact` and `/api/careers` — these are handled by Cloudflare Pages Functions in the `functions/` directory. No additional setup needed once `RESEND_API_KEY` is set.

**Alternative:** If you prefer not to use Resend, swap the fetch call in `functions/api/contact.js` and `careers.js` to [Web3Forms](https://web3forms.com/) (free, no domain setup needed).

---

## Push to GitHub

```bash
git init
git add .
git commit -m "Initial PS Tech website"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

Then connect the GitHub repo to Cloudflare Pages in the Pages dashboard.

---

## Launch Checklist — Complete Before Going Live

Work through every `TODO` / `VERIFY` / `CONFIRM` comment in the codebase. Quick list:

### 1. NAP — Verify Against Live Google Business Profile
File: `src/data/business.json`

- [ ] **Business name** — confirm exact spelling/capitalisation matches GBP: `PS Tech (Problem Solver Tech)`
- [ ] **Phone number** — confirm `+91 91199 43168` is the exact number on GBP (including country code format)
- [ ] **Address** — confirm `Problem Solver Tech, near Ram Mandir, Kabit Khedi, Indore, Madhya Pradesh 452010` matches GBP exactly
- [ ] **Opening hours** — confirm `Mo-Su 08:00-21:00` is accurate
- [ ] **Rating / review count** — update `4.9` / `78` to current GBP values at launch

### 2. Schema — Fill Placeholders
File: `src/components/SEO.astro` & `src/data/business.json`

- [ ] `gbpId` — the GBP CID or Google Maps share URL (`@id` in JSON-LD)
- [ ] `gbpReviewUrl` — full URL to GBP reviews tab
- [ ] `geoLat` / `geoLong` — lat/long of the business location (from Google Maps)
- [ ] `heroImageUrl` — URL of the hero/main image (after uploading to CDN or hosting)
- [ ] `domain` — final production domain (e.g. `pstech.in`)

### 3. Domain & Sitemap
- [ ] Update `site` in `astro.config.mjs` with real domain
- [ ] Update `robots.txt` sitemap line with real domain
- [ ] Submit `https://yourdomain.com/sitemap-index.xml` to Google Search Console

### 4. Google Map Embed
File: `src/components/MapEmbed.astro`

- [ ] Replace the placeholder `<div>` with the real Google Maps embed `<iframe>` from the GBP share link
- [ ] Add `loading="lazy"` and `title="PS Tech location in Indore"` to the iframe

### 5. Photos — 30–40 Real Images
See `IMAGES_README.md` for every image slot, filename, and alt text. Drop files into `public/images/` matching the filenames in the readme — no code changes needed.

### 6. Google Analytics / Tag Manager (Optional)
- [ ] Add GA4 measurement ID to `src/layouts/BaseLayout.astro` (in `<head>`)
- [ ] Or add GTM container snippet

### 7. Social Media
- [ ] Update `socialFacebook`, `socialInstagram`, `socialYoutube` in `src/data/business.json` with real profile URLs

### 8. Email Addresses
Files: `functions/api/contact.js`, `functions/api/careers.js`

- [ ] Confirm `contact@pstech.in` for contact form notifications
- [ ] Confirm `careers@pstech.in` (or same email) for job applications
- [ ] Set up Resend sending domain (verify `pstech.in` in Resend dashboard, or use a different sending address)

### 9. Test All Forms
- [ ] Contact form — submit a test, verify email received
- [ ] Careers form — submit a test, verify email received
- [ ] Both forms should reject honeypot submissions silently

### 10. Lighthouse Audit
- [ ] Run Lighthouse mobile on Home, Plumbing, and one blog post
- [ ] Target: Performance ≥ 90, Accessibility ≥ 90, SEO = 100
- [ ] Fix any flagged issues

---

## Project Structure

```
src/
├── data/
│   ├── business.json    ← Single source of truth for NAP (Name/Address/Phone)
│   ├── services.js      ← All 4 service types and their item lists
│   ├── areas.js         ← 6 Indore locality descriptions
│   └── gallery.js       ← Photo data (add real photos here)
├── content/blog/        ← 10 MDX blog posts
├── components/          ← Reusable Astro components
├── layouts/             ← BaseLayout.astro (meta + JSON-LD + fonts)
└── pages/               ← 7 main pages + blog
```

## Adding New Blog Posts

1. Create a new `.mdx` file in `src/content/blog/`
2. Copy the frontmatter schema from any existing post
3. Write the content in markdown
4. The post automatically appears in `/blog` index and gets its own page

## Adding New Gallery Photos

1. Drop the photo into `public/images/<category>/` with the exact filename from `IMAGES_README.md`
2. Or add a new entry to `src/data/gallery.js`

---

## Tech Stack

- **Astro 4** — static site generator
- **Tailwind CSS 3** — utility-first styles
- **Three.js** — 3D hero animation (lazy-loaded, respects prefers-reduced-motion)
- **GSAP + ScrollTrigger** — scroll animations
- **Lenis** — smooth scroll
- **Cloudflare Pages** — hosting + edge functions for forms
- **Resend** — transactional email for form submissions
