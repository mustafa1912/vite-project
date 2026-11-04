# 🚀 Apex - Creative Developer Portfolio & Resume Next.js 15 Template

**Apex** is a modern, high-performance personal portfolio, vCard, and resume template crafted specifically for software developers, full-stack engineers, designers, and tech freelancers. Built on the cutting-edge foundation of **Next.js 15 (App Router)**, **React 19**, and **TypeScript 5**, Apex delivers blazing-fast page loads, fluid micro-interactions, and effortless customization.

---

## 🌟 Key Features

* ⚡ **Next.js 15 & React 19:** Powered by the latest App Router with automatic static prerendering.
* 🛡️ **TypeScript 5:** 100% strictly typed codebase with zero linting or compile errors.
* 🎨 **Dynamic 10-Color Style Switcher:** Instant theme switching with persistent local state and zero FOUC.
* ⚙️ **Centralized Configuration (`src/config/site.ts`):** Modify your name, bio, skills, timeline, projects, and contact info from a single file in minutes.
* 🖼️ **Interactive Project Gallery:** Built-in modal lightbox with keyboard navigation (`Esc`, `ArrowLeft`, `ArrowRight`).
* 📬 **Working Contact Form:** EmailJS integration ready for deployment with `.env.example` template.
* 💬 **Floating WhatsApp Widget:** One-click contact trigger with pre-filled greeting text.
* 📱 **Pixel-Perfect Responsive Design:** Tailored for seamless viewing across smartphones, tablets, and 4K displays.
* ♿ **Accessibility (a11y):** Semantic HTML5 landmarks, proper aria attributes, and focus states.
* 📚 **Comprehensive Documentation:** Full HTML documentation included inside the `documentation/` directory.

---

## 📦 File Structure

```text
apex-template/
├── src/
│   ├── app/                    # Next.js 15 App Router pages & layouts
│   │   ├── page.tsx            # Home / Hero section
│   │   ├── resume/page.tsx     # About, Skills, Experience & Education
│   │   ├── portfolio/page.tsx  # Project gallery & category filters
│   │   ├── contact/page.tsx    # Working contact form & social links
│   │   ├── layout.tsx          # Root layout with Google Fonts
│   │   └── globals.css         # Theme styles & variables
│   ├── components/             # Reusable UI components
│   │   ├── layout/             # Header, Navigation & WhatsApp widget
│   │   ├── portfolio/          # Modal Lightbox gallery component
│   │   └── switch/             # Color theme switcher
│   ├── config/
│   │   └── site.ts             # ⭐ Central configuration file for all content
│   └── assets/                 # Vector fonts, styles & icons
├── public/                     # Static media & optimized demo images
├── documentation/              # HTML Documentation for buyers
├── .env.example                # Sample environment variables for EmailJS
├── tsconfig.json               # TypeScript strict configuration
└── package.json                # Project scripts & dependencies
```

---

## 🛠️ Getting Started

### Prerequisites
* **Node.js:** v18.18.0 or newer (v20+ recommended)
* **Package Manager:** `npm`, `yarn`, or `pnpm`

### Installation
1. Extract the downloaded package.
2. Open your terminal in the project directory:
   ```bash
   npm install
   ```
3. Start the local development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your web browser.

### Building for Production
To generate a production-ready, highly optimized static build:
```bash
npm run build
npm run start
```

---

## ⚙️ Customization Guide

All personal data, projects, experience, education, and contact details can be customized directly in:
👉 **`src/config/site.ts`**

Simply open this file and update the values for:
* `name`, `role`, `shortBio`, `avatar`
* `personalInfo` (phone, email, address, etc.)
* `stats` (years of experience, completed projects)
* `skills` (labels, colors, badges)
* `experience` & `education` (timelines, titles, descriptions)
* `projects` (titles, categories, filters, links, gallery images)

---

## 📄 License & Attribution

* Sold exclusively on **Envato Market (ThemeForest / Envato Elements)**.
* Please see `LICENSING.txt` for license details and `CREDITS.md` for full asset attribution.
