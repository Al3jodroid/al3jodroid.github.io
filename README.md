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

### 1. Profile, SEO & Social Metadata

| Field | Type | Description | Example |
| :--- | :--- | :--- | :--- |
| `title` | String | Candidate's display name | `"Alejandro Rodríguez S."` |
| `seo_title` | String | Full `<title>` tag for search engines | `"Alejandro Rodríguez S. - Android && Flutter Specialist"` |
| `role` | String | Professional headline / primary title | `"Android && Flutter Specialist"` |
| `description` | String | SEO meta description & social card summary | `"Senior Mobile Engineer & Architect..."` |
| `keywords` | Array of Strings | Search keywords for indexing | `["Android Specialist", "Flutter", ...]` |
| `bio` | String | Professional summary rendered in the "About Me" card | `"I am a software engineer specializing in..."` |
| `quote` | String | Personal motto displayed in the Quote card | `"Everything is possible, the only thing required is time."` |
| `avatar` | String | Relative path to profile portrait | `"images/profile.jpg"` |
| `droid_avatar` | String | Relative path to 3D flip card reverse image | `"images/droid.jpg"` |
| `og_image` | String | Path to Open Graph preview image (1200x630) | `"images/og-droid.jpg"` |

---

### 2. Contact Information (`contact`)

| Field | Type | Description | Example |
| :--- | :--- | :--- | :--- |
| `email` | String | Contact email address | `"alejodroid.co@gmail.com"` |
| `location` | String | City, state/province, and country | `"Bogotá, D.C., Colombia"` |
| `location_flag` | String | 2-letter country code for flag icon | `"co"` |
| `linkedin` | String (URL) | LinkedIn profile URL | `"https://www.linkedin.com/in/al3jodroid/"` |
| `github` | String (URL) | GitHub profile URL | `"https://github.com/Al3jodroid"` |
| `google` | String (URL) | Google Developer profile URL | `"https://g.dev/Al3jodroid"` |
| `medium` | String (URL) | Medium publication or author profile URL | `"https://medium.com/@al3jodroid"` |

---

### 3. Languages (`languages`)

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
```

---

### 4. Technical Knowledge & Skills

#### `knowledge_sections`
Grouped narrative descriptions for core domains:

```yaml
knowledge_sections:
  - title: "Mobile & Multiplatform Development"
    items:
      - "High expertise in development with the **Android** SDK..."
      - "Proficiency in Google's **Flutter** framework..."
```

#### `skills`
Categorized pill badges rendered in the Skills accordion:

```yaml
skills:
  - category: "Mobile Development"
    items: ["Android SDK (Java & Kotlin)", "Jetpack", "Compose", "Flutter SDK & Dart", "KMP"]
  - category: "Architecture & Integration"
    items: ["MVVM", "Clean Architecture", "Dagger & Hilt DI", "REST(FUL) APIs", "GraphQL"]
```

#### `skills_summary`
List of high-level bullet points highlighting engineering leadership and methodologies:

```yaml
skills_summary:
  - "Appraise graphic design in mobile applications..."
  - "Author comprehensive documentation for AI-driven development (AIDD)..."
```

---

### 5. Work Experience (`experience`)

Chronological list of career positions:

```yaml
experience:
  - company: "HUGE Inc."
    location: "Bogotá, D.C., Colombia"
    role: "Senior UI Engineer"
    period: "Oct. 2026 – Present"
    details: "Technical leadership and development of native **Android** applications..."
    tech: ["Android SDK", "Kotlin", "AI Integrations", "GitHub", "Jetpack"]
```

> [!NOTE]
> **Print Mode Behavior**: In print mode, only the **9 most recent experiences** are printed (`.experience-print-hide` on index ≥ 9) to ensure clean page breaks without spilling into subsequent pages. All experiences remain fully visible and interactive in web mode.

---

### 6. Projects & Showcase Applications (`projects`)

Featured mobile applications and client implementations:

```yaml
projects:
  - title: "Credomatic BAC App"
    icon: "images/apps/bac-credomatic.png"       # App logo (preloaded in head)
    client: "Banco Autónomo de Costa Rica"       # Client or organization name
    platforms: ["android", "ios"]               # Platform badges: "android", "ios", "web"
    description: "Migration with **Flutter** app multiplatform technology..."
    tech: ["Flutter", "Dart", "Banking Security"]
    links:                                      # Store / web links
      - name: "Google Play"
        url: "https://play.google.com/store/apps/..."
      - name: "App Store"
        url: "https://apps.apple.com/..."
```

---

### 7. Education & Other Studies

#### `education`
Academic university and secondary school degrees:

```yaml
education:
  - degree: "Professional Computing Science"
    institution: "Escuela Colombiana de Ingeniería Julio Garavito"
    period: "2003 – 2009"
    details: "(Degree received March 27, 2010) Graduated with emphasis in software quality..."
```

#### `other_studies`
Conferences, specialized courses, certifications, and teaching:

```yaml
other_studies:
  - title: "Attendee FlutterConf Latam Medellín Colombia"
    institution: "Flutter Latam Community"
    period: "25 – 26 October 2023"
```

---

### 8. Publications & Articles (`publications`)

Technical articles, tutorials, and open-source companion repositories. Supports single URLs as well as multiple linked resources:

```yaml
publications:
  - title: "A Tale of Two Technologies: App Android"
    details: "A curated 10-article list comparing Google's modern mobile ecosystems..."
    url: "https://medium.com/@al3jodroid/list/android-flutter-c7512585c5d5" # (Optional) Direct article link
    github: "https://github.com/Al3jodroid/pokemon-android"                  # (Optional) Primary repo link
    links:                                                                  # (Optional) Multiple additional links
      - name: "Flutter Companion Repo"
        url: "https://github.com/Al3jodroid/pokemon-flutter"
      - name: "Documentation / Demo"
        url: "https://example.com/demo"
```

> [!TIP]
> The template automatically inspects link URLs:
> - Links to `github.com` render with the GitHub icon (`bi-github`).
> - Links to `medium.com` render with the Medium icon (`bi-medium`).
> - Other URLs render with a generic external link icon (`bi-link-45deg`).

---

### 9. References (`references`)

Professional recommendations and contact references:

```yaml
references:
  - name: "Luis Javier Torres"
    role: "Specialized Technology Principal Android & Flutter"
    linkedin: "https://www.linkedin.com/in/luisjtorres/"
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
