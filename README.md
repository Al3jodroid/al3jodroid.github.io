# Alejandro Rodríguez S. — Professional CV & Portfolio

[![Live Site](https://img.shields.io/badge/Live_Site-al3jodroid.github.io-006c47?style=flat-square&logo=github)](https://al3jodroid.github.io/)
[![Hugo](https://img.shields.io/badge/Hugo-v0.163+-ff4088?style=flat-square&logo=hugo&logoColor=white)](https://gohugo.io/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![GitHub Actions](https://img.shields.io/badge/CI%2FCD-GitHub_Pages-2088FF?style=flat-square&logo=githubactions&logoColor=white)](https://github.com/Al3jodroid/al3jodroid.github.io/actions)
[![License](https://img.shields.io/badge/License-All_Rights_Reserved-red?style=flat-square)](LICENSE)

Personal curriculum vitae and portfolio website for **Alejandro Rodríguez S.**, Senior Software Engineer specializing in Mobile Development (**Android & Flutter**), Multiplatform Architecture, and AI-Driven Engineering.

Live: **[https://al3jodroid.github.io/](https://al3jodroid.github.io/)**

---

## ✨ Features

- 🌐 **Bilingual Support (i18n)**: Seamless instant language switching between English (`/`) and Spanish (`/es/`).
- 📱 **Fully Responsive Design**: Fluid, mobile-first adaptive layout meticulously optimized across smartphones, tablets, and high-resolution desktop screens.
- 🌓 **Dynamic Theme Engine**: Material Design 3 inspired Dark and Light mode toggle with persistent local storage.
- 🪙 **Interactive 3D Coin-Flip Avatar**: Custom CSS 3D card flip animation toggling between Android Droid mascot and personal portrait.
- 🖨️ **Print-to-PDF Engine (Experimental)**:
  - Custom print stylesheet (`static/css/print.css`) tailored for an exact 3-page layout with compact typography and custom headers.
  - Branded Android bottom bar docked cleanly across printed pages.
  - **Browser Compatibility**: Optimized exclusively for **Google Chrome (Desktop)**. Mobile browsers (especially iOS Safari / WebKit) have known limitations with CSS Paged Media (`break-inside: avoid`, exact `@page` margins, and canvas scaling), which may cause uneven page breaks. For the best PDF export, print from desktop Chrome using:
    - Destination: *Save as PDF*
    - Margins: *Default*
    - Options: *Background graphics enabled*
- ⚡ **Ultra-Fast & Modern Stack**: Built with Hugo extended, TailwindCSS v4, and minimal vanilla JavaScript.
- 🚀 **Automated CI/CD**: Native GitHub Actions deployment pipeline running on Node 24 and deploying directly to GitHub Pages.

---

## 🛠️ Tech Stack

- **Static Site Generator**: [Hugo](https://gohugo.io/) (Extended edition)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) + Custom CSS tokens
- **Theme Base**: Custom-tailored `aafu` theme overrides
- **Icons**: [Bootstrap Icons](https://icons.getbootstrap.com/) & [Academicons](https://jpswalsh.github.io/academicons/)
- **Typography**: Roboto & Roboto Mono (Google Fonts)
- **Hosting & Deployment**: [GitHub Pages](https://pages.github.com/) via GitHub Actions

---

## 📂 Project Structure

```text
.
├── .github/workflows/   # Automated CI/CD Pages deployment (deploy.yml)
├── archetypes/          # Hugo template archetypes
├── assets/              # Tailwind CSS entrypoint (main.css)
├── content/
│   ├── en/              # English CV content & metadata (_index.md)
│   └── es/              # Spanish CV content & metadata (_index.md)
├── i18n/
│   ├── en.yaml          # English translation strings
│   └── es.yaml          # Spanish translation strings
├── layouts/
│   ├── _default/        # Base HTML templates (baseof.html)
│   └── partials/        # Components (profile, experience, skills, bottom bar, etc.)
├── static/
│   ├── css/             # Custom print (print.css) and web styles (custom.css)
│   ├── images/          # Assets (avatars, icons, flags, SVGs)
│   └── favicon*         # Multi-size favicons and web manifests
├── config.yaml          # Hugo configuration & per-language titles
└── package.json         # Tailwind CSS dependencies
```

---

## 🚀 Local Development

### Prerequisites

- [Hugo](https://gohugo.io/installation/) (extended version `v0.140+`)
- [Node.js](https://nodejs.org/) (`v20+` or `v22 LTS`)
- [Git](https://git-scm.com/)

### Getting Started

1. **Clone the repository with submodules**:
   ```bash
   git clone --recurse-submodules https://github.com/Al3jodroid/al3jodroid.github.io.git
   cd al3jodroid.github.io
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```
   > [!IMPORTANT]
   > Always ensure `npm install` has been run. Hugo's `css.TailwindCSS` asset transformer specifically requires the Node.js script located in `node_modules/.bin/tailwindcss`. If `node_modules/` is missing, Hugo will fall back to system binaries (e.g. Homebrew's `/opt/homebrew/bin/tailwindcss`) and fail with:  
   > `binary "tailwindcss" is not a Node.js script`

3. **Start the local development server**:
   ```bash
   hugo server -D --ignoreCache --disableFastRender
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:1313/
   ```

### Building for Production

To build the static site locally:

```bash
hugo --minify
```

The compiled output will be generated inside the `./public` directory.

---

## 📬 Contact & Links

- **Website**: [al3jodroid.github.io](https://al3jodroid.github.io/)
- **Email**: [alejodroid.co@gmail.com](mailto:alejodroid.co@gmail.com)
- **LinkedIn**: [linkedin.com/in/al3jodroid](https://www.linkedin.com/in/al3jodroid/)
- **GitHub**: [github.com/Al3jodroid](https://github.com/Al3jodroid)
- **Google Developer**: [g.dev/Al3jodroid](https://g.dev/Al3jodroid)
- **Medium**: [medium.com/@al3jodroid](https://medium.com/@al3jodroid)

---

## 💡 Development & Acknowledgments

As a Software Engineer specializing primarily in native and cross-platform mobile development (**Android & Flutter**), web layout internals and CSS paged media can present distinct challenges.

Special thanks to **Antigravity** (AI pair programming assistant by Google DeepMind) for collaborating throughout this project:
- Helping debug complex layout bugs and resolve subtle cross-browser printing quirks.
- Providing guidance and deep-dives into modern HTML5 and CSS architecture to bridge native mobile paradigms with the web.
- Streamlining CI/CD workflows and automated deployments to GitHub Pages.

---

## 📄 License

© Alejandro Rodríguez Salazar. All rights reserved.  
Content, design, and personal branding may not be reproduced without prior permission.
