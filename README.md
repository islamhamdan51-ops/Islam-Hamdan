# Islam Hamdan | إسلام حمدان — Bespoke Portfolio & Digital Experience
> **From Coastlines to Canopies**  
> *Environmental Impact. Marine Science. Digital Innovation.*  
> Tripoli, Libya (32°53'N 13°11'E)

A bespoke, production-crafted bilingual portfolio for **Islam Hamdan | إسلام حمدان**, connecting his scientific background in Marine Science, hands-on environmental project coordination on the Gharsa Project, community leadership with the Local Youth Council, and purposeful digital product engineering.

---

## 🧭 Creative Concept & Art Direction

### The Motif: From Coastlines to Canopies
The visual identity follows a continuous conceptual progression:
1. **Marine Contours & Depth**: Reflecting oceanographic bathymetry and South Mediterranean marine science.
2. **Terrestrial & Botanical Branching**: Representing hands-on afforestation, sapling cultivation, and environmental education.
3. **Restrained Digital Grid & Telemetry**: Embodying digital QR-code identification workflows and web application development (Manarah).

### Design Tokens
- **Mediterranean Navy (`#0A192F` / `#060D17`)**: Structural grounding and oceanic depth.
- **Ocean Teal (`#008080` / `#0D9488`)**: Marine biology and scientific research identity.
- **Forest Emerald (`#10B981`)**: Terrestrial afforestation, growth, and positive environmental outcomes.
- **Warm Off-White (`#F8FAFC`)**: Spacious, legible reading surfaces.
- **Sand & Ochre (`#F59E0B`)**: Coastal sand and operational status differentiation.

### Bilingual Typography
- **Arabic**: Cairo (`font-arabic`) with natural RTL layout flow, proper typographic hierarchy, and balanced line-wrapping.
- **English**: Plus Jakarta Sans (`font-english`) with refined geometric editorial balance.
- **Telemetry & Metadata**: JetBrains Mono (`font-mono`) for scientific coordinates, timestamps, and project status codes.

---

## 📊 Single Source of Truth for Impact Data

All metrics are centralized in `src/data/content.ts` and grounded in verified authoritative sources:

| Metric | Value | Period / Context |
| :--- | :--- | :--- |
| **Trees Planted** | **4,589** | Gharsa Project — Season 1 (Exact count verified in CV) |
| **Municipalities Covered** | **11** | Libyan municipalities with municipal and educational coordination |
| **Students Reached** | **1,508** | Interactive school environmental awareness workshops |
| **Volunteers Supervised** | **60+** | Field team delegation and planting day logistics |
| **Verified Volunteer Hours** | **100+** | Recognized with the **Outstanding Volunteer Award — First Place** |
| **QR-Tagged Seedlings** | **6,000+** | Active planted seedlings documented with individual QR codes on [gharsa.ly](https://gharsa.ly/) *(Maintained strictly separate from Season 1 planting total)* |
| **Season 2 Target** | **8,000 – 10,000** | Explicitly classified as a forward strategic planning target *(never represented as completed)* |

---

## 🔒 Confidentiality & Ethical Safeguards

1. **Master's Thesis Subject**: Strictly kept confidential and private in accordance with Islam's explicit instructions.
2. **English Language Proficiency**: Displayed strictly as **Professional Working Proficiency** (never inflated).
3. **Excluded Courses**: The vehicle diagnostics course is permanently excluded from all sections.
4. **Authentic Imagery**: 100% of photographs used across the site are authentic, un-manipulated documentation photos provided by Islam Hamdan (curated from `Pics/`).
5. **Authoritative CV**: Download button links directly to the genuine PDF file (`/cv/Islam_Hamdan_CV.pdf`).
6. **Transparent Project Status**: Civic initiatives (Tripoli Bridge of Work, Municipal Plastic Recycling Model, Al-Mansoura Accessibility) are explicitly tagged as Proposals / Research / Planning.

---

## 🚀 Quick Start & Development

### Prerequisites
- Node.js `v20+` or `v24+`
- npm `v10+` or `v11+`

### Installation
```powershell
npm install
```

### Run Locally (Development)
```powershell
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production
```powershell
npm run build
npm run start
```

---

## 📁 Repository Structure

```
Islam Hamdan/
├── public/
│   ├── cv/
│   │   └── Islam_Hamdan_CV.pdf          # Authoritative CV PDF
│   └── images/                          # Curated authentic field & portrait photography
│       ├── islam-portrait.png           # Professional close-up portrait
│       ├── rehla-presentation.jpg       # Presentation at Rehla
│       ├── award-volunteer-first-place.jpg # Outstanding Volunteer Award
│       ├── gharsa-field-irrigation.jpg  # Field irrigation setup
│       ├── gharsa-students-planting.jpg # Students planting with QR-tagged seedling
│       ├── youth-leadership-award.jpg   # Youth Leadership Camp Certificate
│       ├── zero-carbon-certificate.jpg  # 3ZERO / EU Zero Carbon Certificate
│       └── ...
├── src/
│   ├── app/
│   │   ├── globals.css                  # Custom tokens, fonts, and scrollbars
│   │   ├── layout.tsx                   # Bilingual metadata, open graph & font setup
│   │   └── page.tsx                     # Main one-page asymmetric editorial composition
│   ├── components/
│   │   ├── Navbar.tsx                   # Floating header with language toggle & CV CTA
│   │   ├── Hero.tsx                     # Asymmetrical editorial hero with authentic portrait
│   │   ├── SignatureMotif.tsx           # SVG animated marine-canopy-digital thread
│   │   ├── ImpactStrip.tsx              # Verified Season 1 numbers & QR infrastructure
│   │   ├── About.tsx                    # Authoritative biography & 4 core pillars
│   │   ├── ProjectsGallery.tsx          # Case studies (Gharsa, Blue Horizon, Manarah)
│   │   ├── CivicInitiatives.tsx         # Classified municipal proposals & advocacy
│   │   ├── ExperienceTimeline.tsx       # Custom career trajectory line with achievements
│   │   ├── CommunityLeadership.tsx      # Tripoli Center youth representation
│   │   ├── EducationAndCredentials.tsx  # Marine science research & filterable certificates
│   │   ├── SkillsAndLanguages.tsx       # Interdisciplinary capabilities & languages
│   │   ├── ContactSection.tsx           # Direct verified channels & dispatch composer
│   │   ├── Footer.tsx                   # Colophon, coordinates, and back-to-top
│   │   └── ImageModal.tsx               # High-resolution documentary lightbox viewer
│   ├── context/
│   │   └── LanguageContext.tsx          # Client-side Arabic (RTL) / English (LTR) state
│   └── data/
│       └── content.ts                   # Single structured source of truth
├── tailwind.config.ts                   # Custom color palette tokens & typography
├── tsconfig.json                        # TypeScript configuration
└── package.json                         # Dependencies & scripts
```

---

## 🛠️ How to Update Content

All content, bilingual translations, credentials, and projects are centralized in `src/data/content.ts`.

- To add or update a project, edit `siteContent.projects`.
- To update contact coordinates or phone numbers, edit `siteContent.meta.contact`.
- To add a new verified certificate, append to `siteContent.credentials`.

---

## 📞 Verified Contact Information

- **Email**: `islamhamdan51@gmail.com`
- **Academic Email**: `i.hamdan@uot.edu.ly`
- **Phone**: `+218 091-4061363`
- **WhatsApp**: `https://wa.me/218914061363` *(Trunk 0 correctly omitted)*
- **LinkedIn**: `https://www.linkedin.com/in/islam-hamdan/`

