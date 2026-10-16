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
  - **Lightweight & High-DPI (< 1 MB)**: Embedded raster icons and portraits are optimized for high-DPI (300+ DPI) while keeping the final PDF lightweight (< 1 MB).
  - **Dynamic Sanitized Export Naming**: Automatically suggests clean file names on export (`CV_Alejandro_Rodríguez_EN.pdf` / `CV_Alejandro_Rodríguez_ES.pdf`) controlled directly via `config.yaml`.
  - Branded Android bottom bar docked cleanly across printed pages.
  - **Browser Compatibility**: Optimized exclusively for **Google Chrome (Desktop)**. Mobile browsers (especially iOS Safari / WebKit) have known limitations with CSS Paged Media (`break-inside: avoid`, exact `@page` margins, and canvas scaling), which may cause uneven page breaks. For the best PDF export, print from desktop Chrome using:
    - Destination: *Save as PDF*
    - Margins: *Default*
    - Options: *Background graphics enabled*
- ♿ **Accessibility & Standards (WCAG 2.1 AA Compliant)**:
  - Fully keyboard operable W3C WAI-ARIA accordions (`<button class="accordion-trigger">` with dynamic `aria-expanded`).
  - High-visibility Material 3 focus rings (`:focus-visible`) and native reduced-motion preference support (`prefers-reduced-motion`).
  - Strict semantic heading hierarchy (`h1` &rarr; `h2` &rarr; `h3`), single `<main>` landmark region, and accessible `aria-label` attributes on all contact and action icons.
  - Mobile pinch-to-zoom enabled (WCAG 1.4.4 Level AA compliance).
- ⚡ **Ultra-Fast & Modern Stack**: Built with Hugo extended, TailwindCSS v4, CSS Container Queries, and clean, decoupled modular Vanilla JavaScript.
- 🚀 **Automated CI/CD**: Native GitHub Actions deployment pipeline running on Node 24 and deploying directly to GitHub Pages.

---

## 🛠️ Tech Stack

- **Static Site Generator**: [Hugo](https://gohugo.io/) (Extended edition)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) + CSS Container Queries (`@container`)
- **JavaScript**: Vanilla ES6+ modular scripts (`theme.js`, `accordion.js`, `print.js`)
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
│   ├── css/             # Custom print (print.css) and web styles
│   ├── images/          # Assets (avatars, icons, flags, SVGs)
│   ├── js/              # Modular scripts (theme.js, accordion.js, print.js)
│   └── favicon*         # Multi-size favicons and web manifests
├── config.yaml          # Hugo configuration & per-language export titles
└── package.json         # Tailwind CSS dependencies
```

---

## 📋 Content Schema & Front Matter Reference

All CV content is maintained declaratively in the YAML front matter of `content/en/_index.md` (English) and `content/es/_index.md` (Spanish). Below is the comprehensive field specification:

### 1. Profile, SEO & Social Metadata — *Nerdy Example*

| Field | Type | Description | Example |
| :--- | :--- | :--- | :--- |
| `title` | String | Candidate's display name | `"Miles Morales"` |
| `seo_title` | String | Full `<title>` tag for search engines | `"Miles Morales - Senior Mobile & Systems Engineer"` |
| `role` | String | Professional headline / primary title | `"Senior Mobile & Systems Engineer"` |
| `description` | String | SEO meta description & social card summary | `"Senior Software Engineer specializing in multiplatform architecture..."` |
| `keywords` | Array of Strings | Search keywords for indexing | `["Mobile Engineer", "Kotlin", "Flutter", ...]` |
| `bio` | String | Professional summary rendered in the "About Me" card | `"Software engineer building resilient mobile systems across the multiverse..."` |
| `quote` | String | Personal motto displayed in the Quote card | `"With great power comes great responsibility — and clean architecture."` |
| `avatar` | String | Relative path to profile portrait | `"images/profile.jpg"` |
| `droid_avatar` | String | Relative path to 3D flip card reverse image | `"images/droid.jpg"` |
| `og_image` | String | Path to Open Graph preview image (1200x630) | `"images/og-droid.jpg"` |

---

### 2. Contact Information (`contact`) — *Nerdy Example*

| Field | Type | Description | Example |
| :--- | :--- | :--- | :--- |
| `email` | String | Contact email address | `"miles.morales@example.com"` |
| `location` | String | City, state/province, and country | `"Brooklyn, NY, USA"` |
| `location_flag` | String | 2-letter country code for flag icon | `"us"` |
| `linkedin` | String (URL) | LinkedIn profile URL | `"https://www.linkedin.com/in/..."` |
| `github` | String (URL) | GitHub profile URL | `"https://github.com/..."` |
| `google` | String (URL) | Google Developer profile URL | `"https://g.dev/..."` |
| `medium` | String (URL) | Medium publication or author profile URL | `"https://medium.com/@..."` |

---

### 3. Languages (`languages`) — *Nerdy Example*

List of spoken languages with optional competency breakdown:

```yaml
languages:
  - name: "English (B2)"
    flag: "gb"            # 2-letter country code for flag icon
    level: "Professional" # Proficiency label
    percent: 85           # Overall percentage (0-100)
    skills:               # (Optional) Detailed breakdown
      - name: "Reading"
        percent: 85
      - name: "Writing"
        percent: 70
      - name: "Speaking"
        percent: 90
      - name: "Listening"
        percent: 85
  - name: "Elvish / Sindarin"
    flag: "un"
    level: "Native"
    percent: 100
```

---

### 4. Technical Knowledge & Skills — *Nerdy Example*

#### `knowledge_sections`
Grouped narrative descriptions for core domains:

```yaml
knowledge_sections:
  - title: "Astromech Avionics & Holonet Protocols"
    items:
      - "Architecting real-time navigational firmware for R2-series Astromech droids running customized **Android Open Source Project (AOSP)** kernels under dependency injection principles..."
      - "Cross-starfighter targeting telemetry and sub-light avionics using Google's **Flutter** framework for Rebel Alliance cockpits..."
      - "Implementation of Kyber-encrypted Holonet relay streams via low-latency sub-space coroutines and decentralized mesh networks..."
```

#### `skills`
Categorized pill badges rendered in the Skills accordion:

```yaml
skills:
  - category: "Astromech Engineering"
    items: ["Android SDK (Kotlin)", "Jetpack Compose", "Flutter & Dart", "Binary Droidspeak (0101)", "Kotlin Multiplatform"]
  - category: "Holonet & Avionics Architecture"
    items: ["Sub-Space gRPC", "Kyber Encryption", "Hyperdrive Telemetry", "Clean Architecture", "Rebel Mesh Protocols"]
```

#### `skills_summary`
List of high-level bullet points highlighting engineering leadership and methodologies:

```yaml
skills_summary:
  - "Direct technical avionics strategy for Incom T-65B X-Wing starfighter telemetry arrays..."
  - "Engineer fault-tolerant neural coprocessors for autonomous Protocol and Astromech droids (AIDD)..."
```

---

### 5. Work Experience (`experience`) — *Nerdy Example*

Chronological list of career positions:

```yaml
experience:
  - company: "Cyberdyne Systems"
    location: "Sunnyvale, CA, USA"
    role: "Principal Mobile Architect"
    period: "2026 – Present"
    details: "Technical leadership and architectural stewardship of autonomous companion software for **Android**..."
    tech: ["Android SDK", "Kotlin", "Neural Networks", "GitHub", "Jetpack"]
```

> [!NOTE]
> **Print Mode Behavior**: In print mode, only the **9 most recent experiences** are printed (`.experience-print-hide` on index ≥ 9) to ensure clean page breaks without spilling into subsequent pages. All experiences remain fully visible and interactive in web mode.

---

### 6. Projects & Showcase Applications (`projects`) — *Nerdy Example*

Featured mobile applications and client implementations:

```yaml
projects:
  - title: "Pip-Boy 3000 Personal Companion"
    icon: "images/apps/pipboy-terminal.png"      # App logo image path
    client: "Vault-Tec Industries"              # Client or organization name
    platforms: ["android", "ios"]               # Platform badges: "android", "ios", "web"
    description: "Multiplatform survival telemetry suite built with **Kotlin Multiplatform** and **Compose**, streaming real-time Geiger counter rad levels, V.A.T.S. targeting calibration, and inventory state machines."
    tech: ["Kotlin Multiplatform", "Jetpack Compose", "BLE Telemetry", "Vault-Tec SDK"]
    links:                                      # Store / web / demo links
      - name: "RobCo Terminal"
        url: "https://robco.internal/apps/..."
      - name: "Holonet / GitHub"
        url: "https://github.com/vault-tec/..."
```

---

### 7. Education & Other Studies — *Nerdy Example*

#### `education`
Academic university and secondary school degrees:

```yaml
education:
  - degree: "B.S. in Advanced Cybernetics & Quantum Computing"
    institution: "Starfleet Academy, San Francisco"
    period: "2380 – 2384"
    details: "Graduated with highest honors specializing in fault-tolerant distributed warp-drive operating systems..."
```

#### `other_studies`
Conferences, specialized courses, certifications, and teaching:

```yaml
other_studies:
  - title: "Certified Warp Core & POSIX Systems Specialist"
    institution: "Daystrom Institute of Technology"
    period: "October 2385"
```

---

### 8. Publications & Articles (`publications`) — *Nerdy Example*

Technical articles, tutorials, and open-source companion repositories. Supports single URLs as well as multiple linked resources:

```yaml
publications:
  - title: "Chronicles of the Multiverse: High-Performance Mobile Kernels"
    details: "A 10-part technical series detailing low-latency render loops across alternate realities..."
    url: "https://medium.com/@.../multiverse-kernels"
    github: "https://github.com/example/multiverse-android"
    links:
      - name: "Flutter Companion Repo"
        url: "https://github.com/example/multiverse-flutter"
      - name: "Holonet Interactive Demo"
        url: "https://example.com/demo"
```

> [!TIP]
> The template automatically inspects link URLs:
> - Links to `github.com` render with the GitHub icon (`bi-github`).
> - Links to `medium.com` render with the Medium icon (`bi-medium`).
> - Other URLs render with a generic external link icon (`bi-link-45deg`).

---

### 9. References (`references`) — *Nerdy Example*

Professional recommendations and contact references:

```yaml
references:
  - name: "Tony Stark"
    role: "Chief Technology Officer & Lead Architect, Stark Industries"
    linkedin: "https://www.linkedin.com/in/..."
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
- **Email**: [al3jodroid@proton.me](mailto:al3jodroid@proton.me)
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
- Conducting accessibility (WCAG 2.1 AA) and performance audits to ensure full keyboard navigation, ARIA semantics, and optimal Core Web Vitals.
- Streamlining CI/CD workflows and automated deployments to GitHub Pages.

---

## 📄 License

© Alejandro Rodríguez Salazar. All rights reserved.  
Content, design, and personal branding may not be reproduced without prior permission.
