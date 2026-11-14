# Naman Rawat - Systems-Minded Backend Software Engineer Portfolio

A production-quality personal portfolio website built with React 18, Vite, Tailwind CSS, and Framer Motion. Engineered specifically for SWE / SDE candidate positioning: correctness under concurrency, real-time event streaming, and reproducible schema migrations.

![Portfolio Banner](/public/favicon.svg)

---

## ⚡ Quickstart

### Prerequisites
- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher

### Local Development

```bash
# 1. Install dependencies
npm install

# 2. Run the Vite development server
npm run dev

# 3. Open in browser
# http://localhost:3000
```

### Build & Preview Production

```bash
# Compile and optimize for production
npm run build

# Preview production build locally
npm run preview
```

### Code Quality

```bash
# Run ESLint validation
npm run lint
```

---

## 📂 Project Architecture

```
portfolio-website/
├── index.html                   # HTML5 entry with SEO, Open Graph & JSON-LD Person schema
├── public/
│   ├── favicon.svg              # Brand SVG favicon
│   ├── naman-rawat.jpg          # Headshot (Hero + Open Graph image)
│   └── Naman_Rawat_Resume.pdf   # Resume PDF
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   └── FadeIn.jsx       # Framer Motion scroll-reveal & reduced-motion wrapper
│   │   ├── diagrams/
│   │   │   ├── OrderStateMachineDiagram.jsx   # Noush state machine & WebSocket diagram
│   │   │   └── ThreeTierArchitectureDiagram.jsx # Nexfolio Client-API-DB architecture
│   │   ├── Navbar.jsx           # Responsive sticky header with dark/light mode toggle
│   │   ├── Hero.jsx             # Tagline, CTAs, and verified social links
│   │   ├── About.jsx            # Engineering summary and quick-facts stat strip
│   │   ├── Skills.jsx           # Grouped technical skills chips (JetBrains Mono)
│   │   ├── ProjectCard.jsx      # Project cards with tags and architecture triggers
│   │   ├── ProjectModal.jsx     # Accessible dialog modal (Escape listener, focus trap)
│   │   ├── Principles.jsx       # "How I Build" engineering principles
│   │   ├── Education.jsx        # Academic timeline & verified DSA/review milestones
│   │   ├── Contact.jsx          # Contact form with validation & mailto fallback
│   │   └── Footer.jsx           # Semantic footer
│   ├── data/
│   │   └── content.js           # SINGLE SOURCE OF TRUTH (all copy & project metadata)
│   ├── utils/
│   │   └── links.js             # hasLink(): hides links still set to "TODO"
│   ├── hooks/
│   │   └── useTheme.js          # Dark/light theme persistence in localStorage
│   ├── App.jsx                  # Main application container
│   ├── index.css                # Semantic CSS variables for dark/light theme tokens
│   └── main.jsx                 # React root mount
├── vercel.json                  # Vercel deployment configuration & caching headers
├── netlify.toml                 # Netlify deployment configuration & SPA redirects
├── tailwind.config.js           # Tailwind theme extension & custom fonts
└── README.md                    # Documentation & deployment guide
```

---

## 📝 Editing Content (Single Source of Truth)

All content is strictly isolated inside:
📁 `src/data/content.js`

To update projects, skills, education, or social profiles, edit `content.js` directly. Component files consume this data dynamically without requiring structural edits.

---

## 📬 Contact Form Configuration

The contact form is configured to work out-of-the-box:

1. **Production Webhook (Formspree)**:
   Create a `.env` file in the project root (copied from `.env.example`):

   ```bash
   cp .env.example .env
   ```

   Add your Formspree endpoint ID:
   ```env
   VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/your_form_id_here
   ```

2. **Graceful Fallback**:
   If no endpoint is provided or the network is unavailable, the form automatically falls back to generating a pre-filled `mailto:` draft directly into the visitor's native email client so no inquiries are lost.

> **Security Note**: Never commit `.env` or sensitive API keys. `.env` is explicitly ignored in `.gitignore`.

---

## 🚀 Deployment Instructions

### Deploying to Vercel (Recommended)
1. Push this repository to your GitHub account: `https://github.com/NamanRawat08/portfolio`
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import your GitHub repository.
4. Settings:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Optional: Add `VITE_FORMSPREE_ENDPOINT` under Environment Variables.
6. Click **Deploy**. The included `vercel.json` ensures full SPA routing support.

### Deploying to Netlify
1. Go to [netlify.com](https://netlify.com) and click **"Add new site"** → **"Import an existing project"**.
2. Connect your GitHub repository.
3. Build command: `npm run build`, Publish directory: `dist`.
4. The included `netlify.toml` automatically handles SPA redirects.

---

## 📋 Outstanding Candidate TODO Checklist

Links still set to `"TODO"` are hidden on the live site until you fill them in. Update these in `src/data/content.js`:

- [ ] **LeetCode Profile**: Add profile URL to `identity.leetcode`
- [x] **Resume PDF**: `/public/Naman_Rawat_Resume.pdf`
- [ ] **Noush GitHub**: Add repository URL to `projects[0].links.github`
- [ ] **Noush Live Demo**: Add live demo URL to `projects[0].links.live`
- [ ] **Nexfolio GitHub**: Add repository URL to `projects[1].links.github`
- [ ] **Nexfolio Live Demo**: Add live demo URL to `projects[1].links.live`
- [ ] **Resume Builder GitHub**: Add repository URL to `projects[2].links.github`
- [ ] **Contact Form Webhook**: Provide your Formspree Form ID in `.env` (optional)
