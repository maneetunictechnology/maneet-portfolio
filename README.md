# Maneet — Personal Developer Portfolio

A production-ready, dark-themed developer portfolio for **Maneet** (Web Developer & BCA Student). Built with **Next.js (App Router)**, **React**, and **Tailwind CSS**.

---

## 🚀 Live Links & Highlights

- **MikuMantra E-Commerce Project (Live Demo)**: [https://miku-mantra.vercel.app/](https://miku-mantra.vercel.app/)
- **MikuMantra GitHub Repository**: [https://github.com/maneetunictechnology/maneet-jwell11](https://github.com/maneetunictechnology/maneet-jwell11)
- **Contact Email**: [mohanmanish740@gmail.com](mailto:mohanmanish740@gmail.com)

---

## 🎨 Design System

- **Background**: `#0B0D12`
- **Secondary Background**: `#11151D`
- **Card Background**: `#151A24`
- **Primary Text**: `#F5F7FB`
- **Secondary Text**: `#A4ACBC`
- **Primary Accent**: `#8B9CFF` (Lavender / Periwinkle)
- **Secondary Accent**: `#70E1C1` (Mint / Emerald)
- **Borders**: `#222938` / subtle dark borders
- **Typography**: Clean sans-serif system stack (`Inter`) + monospace for code accents

---

## 📂 Project Structure

```
maneet-portfolio/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.js           # Server-side contact endpoint with rate-limiting & honeypot
│   ├── projects/
│   │   └── [slug]/
│   │       └── page.jsx           # Dedicated SEO-optimized Case Study pages
│   ├── resume/
│   │   └── page.jsx               # Print-friendly resume with 1-click PDF export
│   ├── globals.css                # Tailwind, CSS variables, dark mode & print styles
│   ├── layout.jsx                 # Root layout with JSON-LD schema, OpenGraph & meta tags
│   ├── page.jsx                   # Home landing page with all portfolio sections
│   ├── robots.js                  # Search engine crawl directives
│   └── sitemap.js                 # Dynamic XML sitemap generation
├── components/
│   ├── Navbar.jsx                 # Sticky responsive navigation with mobile drawer
│   ├── Hero.jsx                   # Hero section with verified tech badges & code visual
│   ├── About.jsx                  # Honest introduction & core development philosophy
│   ├── Skills.jsx                 # Verified skills (Frontend, Backend, Database) + Learning Roadmap
│   ├── Projects.jsx               # Featured projects section
│   ├── ProjectCard.jsx            # Project card with live demo and modal triggers
│   ├── ProjectModal.jsx           # Accessible in-depth case study modal dialog
│   ├── Education.jsx              # BCA degree highlights and editable configuration note
│   ├── Journey.jsx                # "Learning & Building" chronological milestones
│   ├── Contact.jsx                # Contact form with validation, status states & mailto fallback
│   └── Footer.jsx                 # Wordmark, links, and back-to-top button
├── lib/
│   └── portfolio-data.js          # Centralized editable configuration for all portfolio content
├── public/
│   ├── favicon.svg                # Minimalist branded SVG favicon
│   ├── projects/
│   │   └── mikumantra/            # Verified screenshots & assets from live app
│   └── resume/                    # Resume assets
├── tailwind.config.js             # Tailwind design system configuration
├── next.config.js                 # Production image optimization & security headers
├── package.json
└── README.md
```

---

## ⚙️ How to Update Information

All personal details, skills, projects, and education data are centralized in a single file:
**`lib/portfolio-data.js`**

- To add your college/university name or expected graduation year, edit `personalInfo.institution` or `educationData.institution`.
- To add your LinkedIn profile once available, update `personalInfo.linkedin`.
- To update your projects or add new case studies, update the `projectsData` array.

---

## 🛠️ Local Development

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

3. **Run production build**:
   ```bash
   npm run build
   ```

4. **Start production server**:
   ```bash
   npm run start
   ```

5. **Generate PDF resume**:
   ```bash
   npm run generate:pdf
   ```

---

## 🚢 Deployment to Vercel

1. Push this repository to your GitHub account:
   ```bash
   git init
   git add .
   git commit -m "feat: complete developer portfolio"
   git remote add origin https://github.com/<your-username>/<portfolio-repo>.git
   git push -u origin main
   ```

2. Visit [Vercel](https://vercel.com) and import the repository.
3. Framework Preset will automatically detect **Next.js**.
4. Click **Deploy**. No additional environment variables required for core functionality.
