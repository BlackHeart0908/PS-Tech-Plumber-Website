# Image Slots — PS Tech Website

Drop your 30–40 real photos into the correct paths below.
**No code changes needed** — the gallery and page code already references these filenames and alt texts.

Recommended format: **JPG or WebP**, compressed to under 200 KB per image.
Recommended dimensions: **800×800 px** for gallery thumbnails, **1200×600 px** for hero/banner images.

---

## Plumbing Photos → `public/images/plumbing/`

| Filename | Dimensions | Alt text |
|---|---|---|
| `plumber-geyser-installation-vijay-nagar-indore.jpg` | 800×800 | PS Tech technician installing a geyser in Vijay Nagar, Indore |
| `pipe-leak-repair-indore.jpg` | 800×800 | PS Tech plumber fixing a burst pipe in an Indore home |
| `tap-installation-indore-kitchen.jpg` | 800×800 | New kitchen tap installation by PS Tech in Indore |
| `water-tank-installation-indore.jpg` | 800×800 | Overhead water tank installation by PS Tech in Indore |
| `drain-cleaning-service-indore.jpg` | 800×800 | Drain cleaning and jetting service in Indore by PS Tech |
| `toilet-installation-indore.jpg` | 800×800 | Concealed cistern toilet installation in Indore |
| `sump-pump-installation-indore.jpg` | 800×800 | Sump pump installed by PS Tech for monsoon waterlogging in Indore |
| `shower-installation-indore-bathroom.jpg` | 800×800 | Shower fitting and installation in Indore bathroom |

---

## Electrical Photos → `public/images/electrical/`

| Filename | Dimensions | Alt text |
|---|---|---|
| `electrical-panel-installation-indore.jpg` | 800×800 | MCB distribution board installation by PS Tech electrician in Indore |
| `fan-installation-indore.jpg` | 800×800 | Ceiling fan installation by certified electrician in Indore |
| `home-wiring-repair-indore.jpg` | 800×800 | Home wiring fault repair by PS Tech in Indore |

---

## Interior Design Photos → `public/images/interior/`

| Filename | Dimensions | Alt text |
|---|---|---|
| `modular-kitchen-design-indore.jpg` | 800×800 | Modular kitchen interior design and installation in Indore by PS Tech |
| `bathroom-renovation-indore.jpg` | 800×800 | Complete bathroom renovation in Indore home by PS Tech |
| `living-room-interior-indore.jpg` | 800×800 | Living room interior makeover by PS Tech in Indore |
| `bedroom-wardrobe-indore.jpg` | 800×800 | Custom bedroom wardrobe installation in Indore |

---

## POP & Ceiling Photos → `public/images/pop/`

| Filename | Dimensions | Alt text |
|---|---|---|
| `pop-false-ceiling-design-indore.jpg` | 800×800 | POP false ceiling design and installation in Indore living room |
| `gypsum-false-ceiling-indore.jpg` | 800×800 | Gypsum board false ceiling installed by PS Tech in Indore |
| `pop-cornice-work-indore.jpg` | 800×800 | Decorative POP cornice and border work in Indore home |
| `light-cove-ceiling-indore.jpg` | 800×800 | Light cove and LED tray ceiling design in Indore |

---

## Hero / General Images → `public/images/`

| Filename | Dimensions | Notes |
|---|---|---|
| `hero-team-photo.jpg` | 1200×800 | Team photo for the "Why PS Tech?" section on Home page. Replace the 👷 placeholder. |
| `og-image.jpg` | 1200×630 | Open Graph image used in social media previews. Include logo + "PS Tech, Indore" text. |

---

## Adding More Photos

Simply add more entries to `src/data/gallery.js` following the existing format:

```js
{
  id: 'pl-09',
  file: '/images/plumbing/geyser-repair-palasia-indore.jpg',
  alt: 'Geyser repair by PS Tech in Palasia, Indore',
  category: 'plumbing',
  title: 'Geyser Repair – Palasia',
},
```

The gallery page picks them up automatically.
