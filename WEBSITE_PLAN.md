# ParityScope Website — Complete Design & Implementation Plan

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Tech Stack](#2-tech-stack)
3. [Site Architecture & Sitemap](#3-site-architecture--sitemap)
4. [Design System](#4-design-system)
5. [Page-by-Page Specifications](#5-page-by-page-specifications)
6. [Component Library](#6-component-library)
7. [Content Strategy](#7-content-strategy)
8. [SEO & Performance Strategy](#8-seo--performance-strategy)
9. [Implementation Pipeline](#9-implementation-pipeline)
10. [Deployment & Infrastructure](#10-deployment--infrastructure)

---

## 1. Project Overview

### What is ParityScope?
ParityScope is a **healthcare AI fairness compliance toolkit** — installable software that healthcare organizations run inside their own environment to audit clinical AI models for bias, generate regulatory compliance reports, simulate fairness interventions, and continuously monitor fairness metrics.

### Website Goals
1. **Educate** — Communicate the problem (biased healthcare AI) and the urgency (EU AI Act enforcement)
2. **Differentiate** — Position ParityScope as healthcare-only, regulation-aware, and privacy-first (SDK architecture)
3. **Convert** — Drive qualified leads to book assessment consultations or request demos
4. **Establish credibility** — Build trust with compliance officers, CMIOs, and CTOs at hospitals and MedTech companies

### Target Audiences (in priority order)
| Audience | Role | What They Care About |
|----------|------|---------------------|
| Chief Health AI Officers / CMIOs | Decision maker | Governance frameworks, regulatory compliance, patient safety |
| VP Regulatory Affairs (MedTech) | Decision maker | EU AI Act conformity assessment, documentation, audit trails |
| Chief Compliance Officers | Influencer | Risk mitigation, penalties, audit readiness |
| CIO / CISO | Technical evaluator | Data privacy, on-premise deployment, security certifications |
| ML Engineering Leads | Technical evaluator | SDK integration, API docs, fairness metrics |
| Government Health Agency Directors | Decision maker | National AI governance, public accountability |

---

## 2. Tech Stack

### Framework: **Next.js 14+ (App Router)**
- **Why**: Server-side rendering for SEO, React ecosystem, excellent DX, static generation for marketing pages, incremental static regeneration for blog/resources
- App Router with server components for performance
- TypeScript for type safety

### Styling: **Tailwind CSS + shadcn/ui**
- **Why**: Rapid development, consistent design tokens, accessible components out of the box
- Custom design tokens mapped to ParityScope brand
- Responsive-first approach

### Content: **MDX for blog/resources**
- **Why**: Markdown with React components for rich content, git-based content management
- No CMS dependency in early stage — content lives in repo
- Easy migration to headless CMS (Sanity/Contentful) later

### Animation: **Framer Motion**
- **Why**: Declarative animations, scroll-triggered reveals, page transitions
- Subtle, professional — not flashy

### Deployment: **Vercel**
- **Why**: Native Next.js support, edge network, preview deployments, analytics
- Custom domain: parityscope.com (or .eu / .health)

### Analytics: **Plausible or PostHog**
- **Why**: Privacy-respecting (GDPR-compliant — aligns with brand), self-hostable
- Track: page views, CTA clicks, demo requests, resource downloads

### Forms: **React Hook Form + server action or Resend (email)**
- Contact form, demo request, newsletter signup

### Package Manager: **pnpm**
- Fast, disk-efficient, strict dependency resolution

---

## 3. Site Architecture & Sitemap

```
parityscope.com/
│
├── / ............................ Homepage (hero, value prop, social proof, CTA)
│
├── /product ..................... Product Overview
│   ├── /product/fairness-audit ... Fairness Audit deep-dive
│   ├── /product/monitoring ....... Continuous Monitoring deep-dive
│   └── /product/mitigation ....... Mitigation Simulation deep-dive
│
├── /solutions ................... Solutions by Audience
│   ├── /solutions/hospitals ...... For Health Systems & AMCs
│   ├── /solutions/medtech ........ For MedTech & Device Manufacturers
│   ├── /solutions/ehr-vendors .... For EHR Vendors & Health AI Startups
│   └── /solutions/government ..... For Government Health Agencies
│
├── /regulations ................. Regulatory Landscape
│   ├── /regulations/eu-ai-act .... EU AI Act Compliance Guide
│   ├── /regulations/south-korea .. South Korea AI Framework Act
│   ├── /regulations/taiwan ....... Taiwan AI Basic Law
│   └── /regulations/section-1557 . US Section 1557
│
├── /resources ................... Resources Hub
│   ├── /resources/blog ........... Blog / Thought Leadership
│   ├── /resources/case-studies .... Case Studies
│   ├── /resources/whitepapers .... Whitepapers & Guides
│   └── /resources/glossary ....... AI Fairness Glossary
│
├── /about ....................... About ParityScope
│   ├── /about/team ............... Team & Founders
│   ├── /about/mission ............ Mission & Impact (SDGs)
│   └── /about/careers ............ Careers (future)
│
├── /pricing ..................... Pricing (Assessments + SDK Licensing)
├── /contact ..................... Contact & Demo Request
├── /privacy ..................... Privacy Policy
├── /terms ....................... Terms of Service
├── /imprint ..................... Legal Imprint (required for German market)
└── /security .................... Security & Certifications
```

### Navigation Structure

**Primary Nav (Desktop)**:
```
[Logo]  Product ▾  Solutions ▾  Regulations ▾  Resources ▾  Pricing  About ▾  [Book a Demo →]
```

**Product dropdown**:
- Overview
- Fairness Audit
- Continuous Monitoring
- Mitigation Simulation

**Solutions dropdown**:
- For Health Systems
- For MedTech Companies
- For EHR Vendors
- For Government Agencies

**Regulations dropdown**:
- EU AI Act
- South Korea AI Framework Act
- Taiwan AI Basic Law
- US Section 1557

**Resources dropdown**:
- Blog
- Case Studies
- Whitepapers
- AI Fairness Glossary

**About dropdown**:
- Our Team
- Mission & Impact
- Careers

**Mobile Nav**: Hamburger menu → full-screen overlay with accordion sections

**Footer**:
```
[Logo + tagline]
Product        Solutions         Regulations        Resources       Company
─────────      ─────────         ───────────        ─────────       ───────
Overview       Health Systems    EU AI Act          Blog            About
Audit          MedTech           South Korea        Case Studies    Team
Monitoring     EHR Vendors       Taiwan             Whitepapers     Careers
Simulation     Government        Section 1557       Glossary        Contact

[Newsletter signup]
[Social links: LinkedIn, GitHub, Twitter/X]
[Privacy | Terms | Imprint | Security]
© 2026 ParityScope. All rights reserved.
```

---

## 4. Design System

### 4.1 Brand Personality
- **Trustworthy** — Healthcare compliance demands credibility
- **Technical but accessible** — Speak to both CTOs and compliance officers
- **Urgent but measured** — The problem is serious; the solution is methodical
- **European professionalism** — Clean, precise, no Silicon Valley hype

### 4.2 Color Palette

```
Primary Colors:
┌─────────────────────────────────────────────────┐
│  Deep Navy       #0B1D3A   — Primary brand      │
│  Teal/Cyan       #0EA5A0   — Primary accent      │
│  White           #FFFFFF   — Background           │
└─────────────────────────────────────────────────┘

Secondary Colors:
┌─────────────────────────────────────────────────┐
│  Warm Coral      #E8614D   — Alert/bias/warning   │
│  Soft Green      #34B27B   — Success/fairness     │
│  Amber           #F5A623   — Caution/medium risk  │
│  Slate Gray      #64748B   — Body text secondary  │
└─────────────────────────────────────────────────┘

Neutrals:
┌─────────────────────────────────────────────────┐
│  Near Black      #0F172A   — Headings             │
│  Dark Gray       #334155   — Body text            │
│  Medium Gray     #94A3B8   — Captions             │
│  Light Gray      #F1F5F9   — Backgrounds          │
│  Off White       #F8FAFC   — Alt sections         │
└─────────────────────────────────────────────────┘
```

**Rationale**: Deep navy conveys trust and authority (healthcare/finance standard). Teal accent signals innovation and fairness. Coral for bias/problems creates visual urgency. Green for fairness/solutions shows the positive outcome.

### 4.3 Typography

```
Headings:    Inter (or Satoshi)    — Clean, modern, highly legible
Body:        Inter                  — Consistent, excellent at small sizes
Monospace:   JetBrains Mono         — Code snippets, SDK examples
```

**Type Scale (desktop)**:
| Element | Size | Weight | Line Height |
|---------|------|--------|-------------|
| H1 (Hero) | 56–64px | 700 (Bold) | 1.1 |
| H2 (Section) | 40–48px | 700 (Bold) | 1.2 |
| H3 (Subsection) | 28–32px | 600 (Semibold) | 1.3 |
| H4 (Card title) | 20–24px | 600 (Semibold) | 1.4 |
| Body Large | 18–20px | 400 (Regular) | 1.6 |
| Body | 16px | 400 (Regular) | 1.6 |
| Small / Caption | 14px | 400 (Regular) | 1.5 |

### 4.4 Spacing System
Base unit: 4px. Scale: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128px.

### 4.5 Border Radius
- Buttons: 8px
- Cards: 12px
- Modals: 16px
- Badges/tags: 9999px (pill)

### 4.6 Shadows
```css
--shadow-sm:  0 1px 2px rgba(0, 0, 0, 0.05);
--shadow-md:  0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
--shadow-lg:  0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);
--shadow-xl:  0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
```

### 4.7 Visual Language & Illustrations

**Style**: Clean geometric illustrations, data visualization motifs, abstract representations of fairness/balance
- **No stock photos of doctors** — differentiates from generic healthcare sites
- Use abstract geometric patterns suggesting balance, equity, measurement
- Data visualization aesthetics (charts, graphs, dashboards) to convey analytical rigor
- Subtle grid/dot patterns in backgrounds for technical feel

**Iconography**: Lucide icons (open source, consistent with shadcn/ui)

**Data Visualization Colors** (for product screenshots / diagrams):
- Use the semantic colors: coral for bias detected, green for fair, amber for borderline
- Dashboard mockups should be a key visual asset

---

## 5. Page-by-Page Specifications

### 5.1 Homepage (`/`)

The homepage is the most critical page. It must communicate the problem, solution, and credibility within 10 seconds.

**Section 1: Hero**
```
Layout: Full-width, navy background with subtle geometric pattern
Left side: Copy
Right side: Animated visualization showing bias detection (abstract)

Headline:     "Make Healthcare AI Fair for Every Patient"
Subheadline:  "Audit clinical AI for bias. Generate compliance reports.
               Meet EU AI Act requirements — before enforcement begins."
CTA Primary:  [Book an Assessment →]  (teal button)
CTA Secondary: [See How It Works]     (ghost button, scrolls to demo)
Trust bar:    "Mapping to EU AI Act · South Korea AI Framework Act · Taiwan AI Basic Law · Section 1557"
```

**Section 2: Problem Statement — "The Bias Problem"**
```
Layout: Light background, centered
Headline: "Healthcare AI Is Systematically Biased"
Subtext:  Brief 2-sentence framing

3-4 impact cards in a grid:
┌─────────────────────┐  ┌─────────────────────┐  ┌─────────────────────┐
│ 🔴 200M+            │  │ 🔴 29%              │  │ 🔴 67%              │
│ patients affected   │  │ accuracy drop on     │  │ of sepsis cases     │
│ by biased Optum     │  │ dark skin tones      │  │ missed by Epic's    │
│ algorithm           │  │ in dermatology AI    │  │ model               │
│ Science, 2019       │  │ Science Advances     │  │ JAMA, 2021          │
└─────────────────────┘  └─────────────────────┘  └─────────────────────┘

Small text: "Sources: peer-reviewed publications"
```

**Section 3: The Governance Gap**
```
Layout: Two-column stat highlight
Left: Large stat visualization
  "84% have AI governance committees"
  "Only 16% have governance frameworks"
Right: Brief explanation paragraph + CTA to regulations page
```

**Section 4: Solution — "What ParityScope Does"**
```
Layout: Three feature cards with icons

┌──────────────────┐  ┌──────────────────┐  ┌──────────────────┐
│ ⚖️ Fairness      │  │ 🔄 Continuous    │  │ 🛡️ Mitigation   │
│ Audit            │  │ Monitoring       │  │ Simulation       │
│                  │  │                  │  │                  │
│ Evaluate models  │  │ Track fairness   │  │ Preview impact   │
│ across patient   │  │ metrics as data  │  │ of interventions │
│ demographics.    │  │ distributions    │  │ before deploying │
│ Generate         │  │ shift. Alert     │  │ them. Zero       │
│ compliance-ready │  │ before harm      │  │ accuracy cost.   │
│ reports.         │  │ occurs.          │  │                  │
│                  │  │                  │  │                  │
│ [Learn more →]   │  │ [Learn more →]   │  │ [Learn more →]   │
└──────────────────┘  └──────────────────┘  └──────────────────┘
```

**Section 5: Key Differentiators**
```
Layout: Alternating left-right sections with visuals

1. "Healthcare-Only"
   Visual: Comparison showing generic vs. healthcare-specific
   Copy: Not a generic AI governance tool. Purpose-built for clinical AI.

2. "Regulation-Aware"
   Visual: Map showing jurisdictions covered
   Copy: Proprietary knowledge base maps fairness metrics to
         EU AI Act, South Korea, Taiwan, and Section 1557.

3. "Your Data Stays with You"
   Visual: Architecture diagram showing SDK inside client environment
   Copy: SDK-first architecture. Patient data never leaves your
         organization. Solves the privacy barrier that blocks
         cloud-based governance tools.
```

**Section 6: Regulatory Urgency**
```
Layout: Timeline/countdown visual
Headline: "The Compliance Clock Is Ticking"

Timeline showing:
  Dec 2025: Taiwan AI Basic Law passed
  Jan 2026: South Korea AI Framework Act active
  Aug 2026-2028: EU AI Act high-risk enforcement
  Penalties: Up to €35M or 7% of global turnover

CTA: [Assess Your Readiness →]
```

**Section 7: How It Works**
```
Layout: Stepped process diagram

Step 1: Install the SDK → Your team installs ParityScope in your environment
Step 2: Point to your models → Connect to AI model outputs + patient demographics
Step 3: Run the audit → ParityScope selects appropriate fairness metrics
Step 4: Get compliance reports → Structured reports mapping to specific regulations

Visual: Animated diagram showing data flow (data stays inside, code comes in)
```

**Section 8: Social Proof / Trust**
```
(Initially placeholder — to be filled with real logos/testimonials)
- "Trusted by leading healthcare organizations" (aspirational)
- Partner/certification logos: SOC 2, ISO, academic partner logos
- Quote from an advisor or early customer
```

**Section 9: CTA Section**
```
Layout: Full-width, navy background
Headline: "Ready to Audit Your Healthcare AI?"
Subtext: "Start with an expert assessment. 90-day pilot with clear success metrics."
CTA: [Book an Assessment →]   [Contact Us]
```

### 5.2 Product Overview (`/product`)

```
Hero: "One Toolkit. Complete Fairness Governance."
Subtext: Product philosophy — deterministic, reproducible, transparent

Section: Product Architecture
  - Visual diagram of the three modules
  - How they work together
  - Data access tiers table (Minimal / Standard / Full)

Section: Three module cards linking to deep-dive pages

Section: "Not a Black Box"
  - Deterministic, reproducible results
  - No training data requirements
  - Every output is transparent and explainable
  - Highlight: "Statistical evaluation engine, not a trained AI model"

Section: Deployment Options
  - Cloud SaaS / On-Premise SDK / Privacy-Preserving
  - Visual comparison table

Section: Regulation-Aware Metric Selection
  - Explain the automatic metric recommendation system
  - "Tell us where you're deploying and what you're evaluating"

CTA: [Request a Demo →]
```

### 5.3 Product Deep-Dive Pages (`/product/fairness-audit`, etc.)

Each follows this template:
```
Hero: Feature name + one-line value proposition
Problem: What challenge this solves
How it works: Step-by-step with visuals
Output examples: Sample report screenshots / data visualizations
Regulatory mapping: Which regulations this addresses
Technical details: For ML engineers (expandable/collapsible)
CTA: [See it in action →]
```

### 5.4 Solutions Pages (`/solutions/*`)

Each audience page follows this template:
```
Hero: "ParityScope for [Audience Type]"
Pain points: 3-4 specific challenges this audience faces
How ParityScope helps: Mapped to their specific needs
Deployment recommendation: Which tier fits them
Regulatory context: Which regulations apply to them
Case study preview: (placeholder for future content)
Pricing pointer: Link to relevant pricing tier
CTA: [Talk to Our Team →]
```

**Solutions for Hospitals** emphasizes:
- On-premise SDK (data never leaves)
- CHAIO as buyer persona
- EU AI Act compliance
- Epic/EHR model auditing

**Solutions for MedTech** emphasizes:
- Conformity assessment for AI-enabled devices
- EU AI Act Annex I pathway
- Integration into existing regulatory workflows
- Multi-jurisdiction support

**Solutions for EHR Vendors** emphasizes:
- One integration serves entire customer base
- SDK integration into ML pipelines
- Continuous monitoring for deployed models
- Channel partner opportunity

**Solutions for Government** emphasizes:
- On-premise mandatory
- National AI governance frameworks
- Public accountability and transparency
- Largest contract values

### 5.5 Regulations Pages (`/regulations/*`)

Each regulation page follows this template:
```
Hero: "[Regulation Name] — What Healthcare Organizations Need to Know"
Overview: What the regulation requires
Timeline: Key dates and enforcement milestones
Healthcare impact: Specific requirements for clinical AI
How ParityScope maps to it: Article-by-article compliance mapping
Penalty structure: What non-compliance costs
Preparation checklist: Actionable steps
CTA: [Download Compliance Guide →] (gated content for lead gen)
```

### 5.6 Resources Hub (`/resources`)

```
Layout: Grid of cards, filterable by type (Blog / Case Study / Whitepaper)
Each card: Thumbnail, title, date, read time, category tag
Search functionality
Featured/pinned content at top
```

### 5.7 Pricing Page (`/pricing`)

```
Headline: "Transparent Pricing for Every Stage"

Three tiers:

┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐
│ ASSESSMENT       │  │ SDK LICENSE      │  │ ENTERPRISE       │
│                  │  │                  │  │                  │
│ Expert-led       │  │ Self-serve       │  │ Full platform    │
│ fairness audit   │  │ fairness toolkit │  │ with monitoring  │
│                  │  │                  │  │                  │
│ Starting at      │  │ Starting at      │  │ Custom           │
│ €25,000          │  │ €30,000/year     │  │                  │
│                  │  │                  │  │                  │
│ • Up to 3 models │  │ • Up to 5 models │  │ • Unlimited      │
│ • Compliance     │  │ • All audit      │  │ • Continuous     │
│   report         │  │   features       │  │   monitoring     │
│ • Mitigation     │  │ • Multi-jurisd.  │  │ • Drift alerts   │
│   recommendations│  │   mapping        │  │ • API access     │
│ • 90-day pilot   │  │ • Email support  │  │ • Dedicated CSM  │
│   available      │  │                  │  │ • On-premise     │
│                  │  │                  │  │                  │
│ [Book Assessment]│  │ [Start Pilot →]  │  │ [Contact Sales]  │
└─────────────────┘  └─────────────────┘  └─────────────────┘

FAQ section below
Pilot terms: "100% of pilot fees credited toward full contract"
```

### 5.8 About Page (`/about`)

```
Hero: Mission statement
Section: "Why We Exist" — the fairness problem narrative
Section: Team bios with photos
Section: UN SDG alignment (SDG 3, 10, 16)
Section: Advisory board (if applicable)
Section: Company timeline/milestones
```

### 5.9 Contact Page (`/contact`)

```
Split layout:
Left: Contact form (name, org, role, email, message, "I'm interested in" dropdown)
Right: Office location, email, response time commitment
Below: FAQ about engagement process
```

### 5.10 Security Page (`/security`)

```
Headline: "Security Is Foundational to Our Architecture"
Sections:
- SDK-first privacy approach
- Data handling practices
- Certification roadmap (SOC 2, HITRUST, ISO 42001)
- GDPR compliance
- Responsible disclosure policy
```

---

## 6. Component Library

### Core Components to Build

```
Layout:
├── Navbar              — Sticky, transparent-to-solid on scroll, mega dropdowns
├── Footer              — Multi-column with newsletter signup
├── Container           — Max-width 1280px, responsive padding
├── Section             — Consistent vertical spacing, alt backgrounds
└── PageHeader          — Hero area for interior pages

Typography:
├── Heading             — H1-H4 with consistent styling
├── Paragraph           — Body, large, small variants
├── Badge               — Status/category tags (pill shaped)
└── Code                — Inline and block code styling

Interactive:
├── Button              — Primary, secondary, ghost, outline variants + sizes
├── NavDropdown         — Mega menu with organized links
├── Accordion           — FAQ, expandable sections
├── Tabs                — For switching between content views
├── Modal               — For video/demo embeds
└── MobileMenu          — Full-screen overlay

Content:
├── FeatureCard         — Icon + title + description + optional link
├── StatCard            — Large number + context + source
├── PricingCard         — Tier card with features list
├── TimelineItem        — For regulatory timelines
├── TeamMember          — Photo + name + role + bio
├── TestimonialCard     — Quote + attribution
├── ResourceCard        — Thumbnail + title + meta for blog/resources
├── ComparisonTable     — Feature comparison matrix
├── StepProcess         — Numbered steps with connecting line
└── RegulationCard      — Jurisdiction + status + key details

Forms:
├── Input               — Text, email, textarea
├── Select              — Dropdown with custom styling
├── ContactForm         — Full contact/demo request form
└── NewsletterSignup    — Email + submit inline

Data Visualization:
├── ArchitectureDiagram — SDK deployment visual
├── BiasVisualization   — Abstract representation of bias detection
├── FairnessGauge       — Visual metric display
└── JurisdictionMap     — Interactive map of regulation coverage
```

---

## 7. Content Strategy

### 7.1 Messaging Framework

**Tagline**: "Audit. Monitor. Improve."
**Positioning statement**: "ParityScope is the healthcare AI fairness compliance toolkit that helps hospitals, MedTech companies, and government agencies ensure their clinical AI systems treat all patients equitably — meeting EU AI Act and global regulatory requirements."

**Core Messages by Audience**:

| Audience | Primary Message | Secondary Message |
|----------|----------------|-------------------|
| CMIOs / CHAIOs | "Ensure your clinical AI doesn't harm patients" | "Turn governance committees into governance action" |
| Regulatory Affairs | "Map directly to EU AI Act articles" | "One toolkit, multiple jurisdictions" |
| Compliance Officers | "Avoid €35M penalties" | "Audit-ready documentation" |
| CIO / CISO | "Patient data never leaves your environment" | "SOC 2 certified, HITRUST roadmap" |
| ML Engineers | "SDK installs in minutes" | "Deterministic, reproducible fairness metrics" |

### 7.2 Initial Content Plan

**Launch content** (Day 1):
- Homepage
- Product overview + 3 feature pages
- 4 solutions pages
- EU AI Act regulation page (highest priority)
- Pricing
- About + team
- Contact
- Privacy, terms, imprint, security

**Month 1-3 content**:
- Blog: "What the EU AI Act Means for Healthcare AI" (SEO anchor)
- Blog: "The 84-16 Problem: Why AI Governance Committees Aren't Enough"
- Blog: "Healthcare AI Bias: 6 Cases Every Hospital Should Know"
- Whitepaper: "EU AI Act Compliance Checklist for Healthcare" (gated)
- Glossary: 20-30 fairness terms defined
- Remaining regulation pages (South Korea, Taiwan, Section 1557)

**Month 3-6 content**:
- Case studies from early assessments
- Blog: 2 posts/month on fairness, compliance, and healthcare AI
- Whitepaper: "SDK vs. Cloud: Why On-Premise Matters for Healthcare AI Governance"
- Video: Product demo walkthrough

### 7.3 Tone of Voice
- **Authoritative**: Cite sources, use data, reference regulations by article number
- **Urgent but not alarmist**: "The deadline is approaching" not "PANIC NOW"
- **Technical when needed, plain when possible**: Explain fairness metrics simply, link to technical details
- **European professionalism**: Measured, precise, no hype or superlatives

---

## 8. SEO & Performance Strategy

### 8.1 Target Keywords

**Primary (high intent)**:
- healthcare AI compliance
- EU AI Act healthcare
- AI fairness audit healthcare
- clinical AI bias detection
- healthcare AI governance toolkit

**Secondary (educational)**:
- algorithmic bias in healthcare
- healthcare AI regulations 2026
- EU AI Act high-risk AI
- fairness metrics healthcare AI
- AI bias in clinical decision making

**Long-tail (specific)**:
- EU AI Act Article 10 bias requirements
- how to audit healthcare AI for bias
- healthcare AI fairness compliance software
- on-premise AI governance toolkit healthcare
- South Korea AI Framework Act healthcare

### 8.2 Technical SEO

- Server-side rendering for all pages (Next.js SSR/SSG)
- Structured data (JSON-LD): Organization, Product, FAQ, Article, BreadcrumbList
- XML sitemap auto-generated
- robots.txt configured
- Open Graph + Twitter Card meta for all pages
- Canonical URLs
- hreflang tags for future i18n (de, zh-TW)
- Core Web Vitals optimization:
  - LCP < 2.5s
  - FID < 100ms
  - CLS < 0.1

### 8.3 Performance

- Image optimization: Next.js `<Image>` with WebP/AVIF, lazy loading
- Font optimization: `next/font` with Inter, subset loading
- Code splitting: automatic with Next.js App Router
- Static generation for all marketing pages
- Edge caching via Vercel CDN

---

## 9. Implementation Pipeline

### Phase 1: Foundation (Sprints 1-2)
```
Sprint 1: Project Setup & Design System
├── Initialize Next.js project with TypeScript
├── Configure Tailwind CSS with custom design tokens
├── Set up shadcn/ui component library
├── Configure ESLint, Prettier, Husky
├── Set up project structure (app/, components/, lib/, content/)
├── Build core layout components (Navbar, Footer, Container, Section)
├── Build typography components
├── Build Button component (all variants)
├── Set up Framer Motion
└── Deploy to Vercel (staging)

Sprint 2: Core Components
├── Build NavDropdown (mega menu)
├── Build MobileMenu
├── Build FeatureCard, StatCard, StepProcess
├── Build PricingCard
├── Build ContactForm
├── Build PageHeader (interior page hero)
├── Build Accordion (FAQ)
├── Build Badge, Tabs
├── Build NewsletterSignup
└── Build ComparisonTable
```

### Phase 2: Pages — MVP (Sprints 3-5)
```
Sprint 3: Homepage
├── Hero section with animation
├── Problem/bias section with StatCards
├── Governance gap section
├── Solution overview section
├── Differentiators sections (alternating layout)
├── Regulatory urgency timeline
├── How It Works steps
├── CTA section
└── Responsive testing & polish

Sprint 4: Product + Pricing Pages
├── Product overview page
├── Fairness Audit deep-dive
├── Continuous Monitoring deep-dive
├── Mitigation Simulation deep-dive
├── Pricing page with 3 tiers
├── FAQ accordion on pricing
└── Internal linking between product pages

Sprint 5: Solutions + About + Contact
├── Solutions hub page (if needed)
├── 4 solutions audience pages
├── About page with mission
├── Team page
├── Contact page with form
├── Security page
├── Privacy policy
├── Terms of service
├── Imprint (German legal requirement)
└── 404 page
```

### Phase 3: Content & Polish (Sprints 6-7)
```
Sprint 6: Regulations & Resources
├── EU AI Act compliance guide (priority)
├── Regulations hub page
├── Resources hub page with filtering
├── Blog infrastructure (MDX setup)
├── 2-3 initial blog posts
├── AI Fairness Glossary (initial terms)
├── Open Graph images for all pages
└── Structured data (JSON-LD)

Sprint 7: Polish & Launch Prep
├── Animation and micro-interactions
├── Cross-browser testing (Chrome, Firefox, Safari, Edge)
├── Accessibility audit (WCAG 2.1 AA)
├── Performance optimization (Core Web Vitals)
├── SEO audit (meta, sitemap, robots, structured data)
├── Analytics integration (Plausible/PostHog)
├── Cookie consent (GDPR)
├── Form submission testing (email delivery)
├── Final content review
└── Production deployment & DNS configuration
```

### Phase 4: Post-Launch (Ongoing)
```
├── Remaining regulation pages (South Korea, Taiwan, Section 1557)
├── Blog: 2 posts/month
├── Gated whitepaper: EU AI Act Compliance Checklist
├── Case studies as engagements complete
├── Product demo video
├── A/B testing on CTAs and hero messaging
├── German language version (i18n)
├── Traditional Chinese version for Taiwan market
└── Headless CMS migration when content volume justifies it
```

---

## 10. Deployment & Infrastructure

### 10.1 Environments

| Environment | URL | Purpose |
|------------|-----|---------|
| Development | localhost:3000 | Local development |
| Preview | *.vercel.app | PR preview deployments (auto) |
| Staging | staging.parityscope.com | Pre-production testing |
| Production | parityscope.com | Live site |

### 10.2 CI/CD Pipeline

```
Push to branch → Vercel Preview Deployment → Auto
Pull Request → Lint + Type Check + Build → Required to merge
Merge to main → Vercel Production Deployment → Auto
```

GitHub Actions:
- `lint`: ESLint + Prettier check
- `typecheck`: `tsc --noEmit`
- `build`: `next build` (catches build errors)
- `lighthouse`: Performance audit on preview URLs

### 10.3 Domain & DNS

- Primary: `parityscope.com`
- Consider also: `parityscope.eu` (EU market signal)
- Email: business email via Google Workspace or similar
- DNS: Managed via Vercel or Cloudflare

### 10.4 Monitoring

- Vercel Analytics: Core Web Vitals
- Plausible/PostHog: Page views, conversions
- Sentry: Error tracking (optional, Phase 4)
- Uptime monitoring: BetterUptime or similar

---

## Project Directory Structure

```
ParityScopeWebsite/
├── public/
│   ├── images/
│   │   ├── logo.svg
│   │   ├── og-default.png
│   │   └── ...
│   ├── fonts/                    (if self-hosting)
│   ├── favicon.ico
│   └── robots.txt
│
├── src/
│   ├── app/
│   │   ├── layout.tsx            (root layout: nav + footer)
│   │   ├── page.tsx              (homepage)
│   │   ├── product/
│   │   │   ├── page.tsx          (product overview)
│   │   │   ├── fairness-audit/page.tsx
│   │   │   ├── monitoring/page.tsx
│   │   │   └── mitigation/page.tsx
│   │   ├── solutions/
│   │   │   ├── hospitals/page.tsx
│   │   │   ├── medtech/page.tsx
│   │   │   ├── ehr-vendors/page.tsx
│   │   │   └── government/page.tsx
│   │   ├── regulations/
│   │   │   ├── page.tsx
│   │   │   ├── eu-ai-act/page.tsx
│   │   │   ├── south-korea/page.tsx
│   │   │   ├── taiwan/page.tsx
│   │   │   └── section-1557/page.tsx
│   │   ├── resources/
│   │   │   ├── page.tsx
│   │   │   ├── blog/
│   │   │   │   ├── page.tsx
│   │   │   │   └── [slug]/page.tsx
│   │   │   ├── case-studies/page.tsx
│   │   │   ├── whitepapers/page.tsx
│   │   │   └── glossary/page.tsx
│   │   ├── about/
│   │   │   ├── page.tsx
│   │   │   ├── team/page.tsx
│   │   │   ├── mission/page.tsx
│   │   │   └── careers/page.tsx
│   │   ├── pricing/page.tsx
│   │   ├── contact/page.tsx
│   │   ├── privacy/page.tsx
│   │   ├── terms/page.tsx
│   │   ├── imprint/page.tsx
│   │   ├── security/page.tsx
│   │   └── not-found.tsx
│   │
│   ├── components/
│   │   ├── ui/                   (shadcn/ui primitives)
│   │   │   ├── button.tsx
│   │   │   ├── badge.tsx
│   │   │   ├── accordion.tsx
│   │   │   ├── tabs.tsx
│   │   │   ├── input.tsx
│   │   │   ├── select.tsx
│   │   │   └── ...
│   │   ├── layout/
│   │   │   ├── navbar.tsx
│   │   │   ├── nav-dropdown.tsx
│   │   │   ├── mobile-menu.tsx
│   │   │   ├── footer.tsx
│   │   │   ├── container.tsx
│   │   │   └── section.tsx
│   │   ├── shared/
│   │   │   ├── page-header.tsx
│   │   │   ├── feature-card.tsx
│   │   │   ├── stat-card.tsx
│   │   │   ├── pricing-card.tsx
│   │   │   ├── timeline-item.tsx
│   │   │   ├── team-member.tsx
│   │   │   ├── testimonial-card.tsx
│   │   │   ├── resource-card.tsx
│   │   │   ├── comparison-table.tsx
│   │   │   ├── step-process.tsx
│   │   │   ├── regulation-card.tsx
│   │   │   └── newsletter-signup.tsx
│   │   ├── forms/
│   │   │   └── contact-form.tsx
│   │   └── visuals/
│   │       ├── architecture-diagram.tsx
│   │       ├── bias-visualization.tsx
│   │       ├── fairness-gauge.tsx
│   │       └── jurisdiction-map.tsx
│   │
│   ├── content/
│   │   ├── blog/                 (MDX files)
│   │   │   └── eu-ai-act-healthcare.mdx
│   │   └── glossary/
│   │       └── terms.ts
│   │
│   ├── lib/
│   │   ├── utils.ts              (cn utility, etc.)
│   │   ├── constants.ts          (site config, nav items)
│   │   ├── metadata.ts           (SEO helpers)
│   │   └── mdx.ts                (MDX processing)
│   │
│   └── styles/
│       └── globals.css           (Tailwind directives + custom CSS)
│
├── .eslintrc.json
├── .prettierrc
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── package.json
├── pnpm-lock.yaml
└── README.md
```

---

## Key Design Decisions & Rationale

| Decision | Choice | Why |
|----------|--------|-----|
| Framework | Next.js App Router | SSR/SSG for SEO, React ecosystem, Vercel deployment |
| Styling | Tailwind + shadcn/ui | Rapid development, accessible components, design consistency |
| Content | MDX in repo | No CMS dependency early on, developer-friendly, version controlled |
| Animations | Framer Motion | Professional, declarative, React-native |
| Deployment | Vercel | Native Next.js support, edge CDN, preview deploys |
| Analytics | Plausible/PostHog | GDPR-compliant (brand alignment), privacy-respecting |
| Package manager | pnpm | Fast, strict, disk-efficient |
| No stock photos | Geometric illustrations + data viz | Differentiates from generic healthcare sites, signals technical product |
| SDK-first messaging | Lead with privacy narrative | Biggest differentiator vs. competitors, solves #1 hospital objection |
| Consulting-first pricing | Show assessment pricing openly | Lowers barrier to first engagement, validates willingness to pay |
| German imprint page | Legal requirement | Targeting German beachhead market, shows EU market awareness |
| Multi-jurisdiction | Show all 4 regulations | Demonstrates breadth, serves multi-national buyers |

---

*Plan Version: 1.0*
*Last Updated: 2026-02-17*
