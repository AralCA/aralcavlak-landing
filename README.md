# aralcavlak.works

Personal landing page with dark neon aesthetic. Built with vanilla HTML, CSS, and JavaScript.

## Local Development

```bash
# Using npx serve
npx serve .

# Or Python
python -m http.server 8000
```

Open `http://localhost:8000`

## Cloudflare Pages Deployment

### Option 1: GitHub Integration (Recommended)

1. Push this repo to GitHub
2. Go to [Cloudflare Pages](https://pages.cloudflare.com)
3. Create a new project → Connect to Git
4. Select this repository
5. Configure:
   - **Build command**: (leave empty - static site)
   - **Build output directory**: `/` or `.`
6. Deploy

### Option 2: Direct Upload

1. Go to Cloudflare Pages Dashboard
2. Create a new project → Direct Upload
3. Drag and drop all files
4. Deploy

## Custom Domain Setup

1. In Cloudflare Pages → Your Project → Custom Domains
2. Add `aralcavlak.works`
3. If domain is on Cloudflare:
   - DNS records auto-configured
4. If domain is elsewhere:
   - Add CNAME record pointing to `<project>.pages.dev`

## Structure

```
aralcavlak-landing/
├── index.html      # Main page
├── styles.css      # Dark neon styling
├── script.js       # Animations & interactions
├── _headers        # Cloudflare security headers
├── _redirects      # Cloudflare redirects
└── README.md
```

## Features

- Dark theme with neon cyan/purple accents
- Floating gradient orbs with animations
- Mouse-following glow effect
- 3D tilt effect on project cards
- Smooth scroll animations
- Responsive design
- Console easter egg

## Customization

### Colors (in styles.css)
```css
--neon-cyan: #00f0ff;
--neon-purple: #a855f7;
--neon-pink: #ec4899;
```

### Content
Edit `index.html` to update:
- Hero text
- About section
- Projects
- Contact info
- Social links

---

Built with curiosity / 2025
