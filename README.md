# Ravi Pratap Singh — Portfolio

A modern, performant personal portfolio for **Ravi Pratap Singh** — Software Development Implementation Team Lead at Amdocs.

> Built by *Digital COE Gen AI Team*.

Sourced from [linkedin.com/in/ravipsingh123](https://www.linkedin.com/in/ravipsingh123).

---

## ✨ Features

- ⚡ **Next.js 15** App Router + React 19 + TypeScript (strict)
- 🎨 **Tailwind CSS** with custom design tokens & dark mode
- 🌗 **Theme switcher** (system / light / dark) via `next-themes`
- 🎬 **Framer Motion** scroll-reveal animations
- 🧠 **Single source of truth** in `content/profile.ts` — edit one file to update the whole site
- 🔍 **SEO ready**: dynamic OG images, JSON-LD `Person` schema, sitemap, robots, full metadata
- 📱 Fully responsive, accessible (WCAG AA color contrast), keyboard navigable
- 🚀 Zero-config deployment to **Vercel**

---

## 🗂 Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx            # Root layout, fonts, SEO metadata, JSON-LD
│   ├── page.tsx              # Home (composes all sections)
│   ├── globals.css           # Tailwind + design tokens
│   ├── og/route.tsx          # Edge-rendered Open Graph image
│   ├── sitemap.ts            # Auto-generated sitemap
│   └── robots.ts             # Robots policy
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── ThemeProvider.tsx
│   ├── ThemeToggle.tsx
│   ├── ui/SectionWrapper.tsx
│   └── sections/
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── Experience.tsx
│       ├── Skills.tsx
│       ├── Education.tsx
│       ├── Certifications.tsx
│       ├── Testimonials.tsx
│       └── Contact.tsx
├── content/
│   └── profile.ts            # ⭐ Edit me to update the site
├── lib/
│   └── utils.ts
├── public/                   # Static assets (place résumé here as resume.pdf)
├── package.json
├── tailwind.config.ts
├── tsconfig.json
├── next.config.ts
└── README.md
```

---

## 🚀 Quick Start (Local Development)

### Prerequisites

- **Node.js 20.x or higher** — install from <https://nodejs.org/>
- **Git** — already installed on your system

Verify:

```powershell
node -v   # should print v20.x or higher
npm -v
git --version
```

### Install & Run

```powershell
cd "c:\temp\C1D1\Code Setup\portfolio"
npm install
npm run dev
```

Open <http://localhost:3000> — the site will hot-reload as you edit.

### Other Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Start dev server with hot reload |
| `npm run build` | Production build |
| `npm run start` | Run the production build locally |
| `npm run lint` | ESLint check |
| `npm run typecheck` | TypeScript check (no emit) |

---

## ✏️ How to Edit Content

**Almost everything lives in one file** → `content/profile.ts`.

To update:

| Want to change... | Edit... |
|---|---|
| Name, headline, tagline, location | `profile` object |
| Add / edit a job | `experience[]` array |
| Skills groups | `skills` object |
| Education entries | `education[]` |
| Certifications | `certifications[]` |
| Testimonials | `testimonials[]` |
| Honors / awards | `awards[]` |
| Nav menu items | `navItems` |
| Social links / email | `profile.social` |

Save → the dev server hot-reloads instantly.

### Add Your Résumé

1. Put your résumé PDF at `public/resume.pdf`.
2. The "Download Résumé" button on the Hero already links to it.

### Add a Profile Photo (optional)

1. Add the image to `public/avatar.jpg` (square, 800×800 recommended).
2. In `components/sections/Hero.tsx`, replace the gradient avatar block with `next/image`.

---

## 🌐 Deploying to Vercel — Method A (Recommended)

This is the **safest, fully managed** way. **No tokens are shared.**

### Step 1 — Push to GitHub

```powershell
cd "c:\temp\C1D1\Code Setup\portfolio"

# Already initialized for you, but if not:
git init
git add .
git commit -m "feat: initial portfolio scaffold"
git branch -M main
```

Then create an **empty** repo on GitHub (no README, no license, no .gitignore):

1. Go to <https://github.com/new>
2. Repo name: `portfolio` (or anything you like)
3. Visibility: Public
4. Click **Create repository**

Copy the repo URL it shows, then:

```powershell
git remote add origin https://github.com/<your-username>/portfolio.git
git push -u origin main
```

### Step 2 — Import into Vercel

1. Go to <https://vercel.com/new>
2. Sign in with **GitHub** (free Hobby plan is enough)
3. Click **Import** next to your `portfolio` repo
4. **Framework preset** auto-detects as **Next.js** ✅
5. **Environment Variables** (optional but recommended):
   - `NEXT_PUBLIC_SITE_URL` = `https://<your-project>.vercel.app` (you can update later after assigning a custom domain)
6. Click **Deploy**

That's it. In ~60 seconds you'll get a live URL like `https://portfolio-xyz.vercel.app`.

### Step 3 — Custom Domain (optional)

1. Buy a domain (Cloudflare Registrar, Namecheap — ~$10/yr).
2. In Vercel → your project → **Settings → Domains** → **Add**.
3. Follow the DNS instructions. SSL is automatic.

### Step 4 — Continuous Deployment

After Step 2 every `git push` to `main` auto-deploys to **production**, and every PR/branch gets its own **preview URL**. Nothing more to configure.

---

## 🔐 What Vercel Needs From You

| Item | Required? | How |
|---|---|---|
| Vercel account | ✅ | Sign up free with GitHub |
| GitHub account | ✅ | Free |
| Vercel password / token | ❌ | Never shared with anyone |
| GitHub personal access token | ❌ | Vercel handles auth via OAuth |
| Custom domain | Optional | ~$10/year |

---

## 📊 Recommended Add-Ons (post-launch)

- **Vercel Analytics** — `npm i @vercel/analytics` then add `<Analytics />` in `layout.tsx`
- **Vercel Speed Insights** — `npm i @vercel/speed-insights`
- **Resend** for a contact form — free 100 emails/day at <https://resend.com>

---

## 🛠 Troubleshooting

**`node` not recognized** — install Node.js 20+ from <https://nodejs.org/> and **reopen the terminal** so `PATH` refreshes.

**Hydration warnings** — usually caused by browser extensions injecting attributes; harmless.

**OG image broken locally** — works in production; in dev visit <http://localhost:3000/og> to verify it renders.

**Build fails on Vercel** — ensure `NEXT_PUBLIC_SITE_URL` is set, then redeploy.

---

## 📜 License

MIT — feel free to fork and adapt for your own portfolio.

---

*Created with care by Digital COE Gen AI Team.*
