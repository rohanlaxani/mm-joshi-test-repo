# M. M. Joshi Eye Institute (Padma Nayanalaya) — React + Vite Landing Page

[![React](https://img.shields.io/badge/React-19.3.1-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.3.8-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Node](https://img.shields.io/badge/Node.js-v18%2B-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

A modern, high-performance, fully responsive single-page application built for **M. M. Joshi Eye Institute (Padma Nayanalaya)** — Karnataka's premier ophthalmic super-specialty hospital in Hubballi, serving patients since 1967.

Converted into a modern **React + Vite** component-based architecture with **100% exact UI fidelity** and **rigorous mobile and tablet responsiveness**.

---

## 📋 Table of Contents

- [Project Overview](#-project-overview)
- [Key Features](#-key-features)
- [Tech Stack](#-tech-stack)
- [Project Architecture](#-project-architecture)
- [Responsive Design Breakpoints](#-responsive-design-breakpoints)
- [Prerequisites](#-prerequisites)
- [Setup & Execution Guide](#-setup--execution-guide)
  - [1. Clone Repository](#1-clone-the-repository)
  - [2. Install Dependencies](#2-install-dependencies)
  - [3. Start Development Server](#3-start-development-server)
  - [4. Build for Production](#4-build-for-production)
  - [5. Preview Production Build](#5-preview-production-build)
  - [6. Windows One-Click Starter](#6-windows-one-click-starter)
- [Form Validation & Interactions](#-form-validation--interactions)
- [Design Tokens](#-design-tokens)
- [Author & Credits](#-author--credits)

---

## 🌟 Project Overview

This repository hosts the official landing page for **M. M. Joshi Eye Institute (Padma Nayanalaya)**. The application provides an engaging user experience, highlighting decades of clinical excellence, specialized medical subspecialties, experienced ophthalmologists, patient success stories, hospital locations, and an interactive appointment scheduling system.

### Highlights:
- **Pixel-Accurate UI**: Preserves the original clinical aesthetics, colors, typography, badges, and illustrations.
- **Modern React 19 Architecture**: Modular component hierarchy with functional components, hooks (`useState`, `useEffect`, `useRef`), and clean separation of concerns.
- **Lightning-Fast Vite Build**: Sub-second dev server startup with Hot Module Replacement (HMR) and optimized bundle chunking.
- **Mobile & Tablet Responsive**: Seamlessly adapts from small mobile screens (320px) to large ultra-wide monitors (1440px+).

---

## ✨ Key Features

| Feature | Description |
|---|---|
| **Sticky Navigation Bar** | Dynamic header that reveals a drop shadow on scroll, highlights the active section in view, and includes quick action CTAs. |
| **Mobile & Tablet Menu** | Responsive navigation drawer with animated hamburger toggle button (`aria-expanded` compliant). Automatically closes on navigation, outside clicks, or screen resize. |
| **Hero Section** | Custom SVG eye graphic with layered radial gradients, founding badge ("Est. 1987"), prominent headlines, dual call-to-actions, and trust statistics. |
| **Animated Stats Counter** | Smooth count-up animations powered by `IntersectionObserver` and `requestAnimationFrame` with cubic `easeOut` easing and Indian numbering format (`1,00,000+`). |
| **8 Super-Specialty Services** | Interactive cards for Cataract, Vitreo-Retina, Paediatrics, LASIK / Clear Eye, Cornea, Glaucoma, Oculoplasty, and Contact Lens Clinic with smooth scroll triggers. |
| **Why Choose Us Section** | 6 institutional differentiator cards showcasing technological leadership, eye bank activities, research, and community outreach. |
| **Specialist Profiles** | 12 board-certified ophthalmologists with compact, refined portrait cards, department badges, and category filtering (All, Vitreo-Retina, Cornea & LASIK, Cataract & Phaco, Glaucoma, Pediatric). |
| **Patient Stories** | High-trust testimonial cards featuring star ratings, location details, and a highlighted featured patient story. |
| **Locations & Pinned Map** | Complete 8+ hospital branch network across Karnataka (EyeSiri Flagship, Gokul Road Hubballi, Dharwad, Navanagar, Bagalkot, Koppal, Sankeshwar, Jamakhandi, Raichur) with interactive pinned GPS beacon map, live timings, and one-click directions. |
| **Appointment Booking** | Controlled form with real-time field validation, inline error handling, loading indicator, and cosmetic reference confirmation receipt (`MMJ-XXXXXX`). |
| **Back to Top Navigation** | Smooth auto-scrolling to the page header from the footer. |

---

## 🛠 Tech Stack

- **Frontend Framework**: [React 19](https://react.dev/)
- **Build Tool / Bundler**: [Vite 8](https://vitejs.dev/) with `@vitejs/plugin-react`
- **Styling**: Pure CSS3 with CSS Custom Properties (Variables), Flexbox, and CSS Grid
- **Typography**: Google Fonts CDN ([Playfair Display](https://fonts.google.com/specimen/Playfair+Display) & [Inter](https://fonts.google.com/specimen/Inter))
- **Icons & Graphics**: Pure inline SVGs (zero external icon library overhead)
- **Runtime**: Node.js v18+

---

## 📁 Project Architecture

```
mm-joshi-eye-institute/
├── index.html                  # HTML entry point with Google Fonts & metadata
├── vite.config.js              # Vite server & build configuration (Port 3000)
├── package.json                # Dependencies, scripts & metadata
├── START_SERVER.bat            # One-click Windows development launcher
├── serve.js                    # Node HTTP fallback server for dist/
├── src/
│   ├── main.jsx                # React root mount (StrictMode)
│   ├── App.jsx                 # Main application shell with scroll reveal observer
│   ├── index.css               # Complete stylesheet, design tokens & responsive queries
│   └── components/
│       ├── Header.jsx          # Header, active link indicator & mobile drawer
│       ├── Hero.jsx            # Hero banner, eye graphic, CTAs & trust badges
│       ├── Stats.jsx           # Animated stat counters (Indian format)
│       ├── Services.jsx        # 8 eye specialty cards
│       ├── WhyUs.jsx           # 6 institutional differentiator cards
│       ├── Doctors.jsx         # 5 doctor profile cards with specialty tags
│       ├── Testimonials.jsx    # Patient review cards with star ratings
│       ├── Locations.jsx       # Branch locations, emergency badge & map directions
│       ├── AppointmentForm.jsx # Controlled appointment request form with validation
│       └── Footer.jsx          # Footer links, contact info, social links & top button
└── README.md
```

---

## 📱 Responsive Design Breakpoints

The design has been thoroughly engineered and tested across the following viewport ranges:

| Breakpoint | Target Devices | Layout Behavior |
|---|---|---|
| **< 360px** | Ultra-small phones | Single-column stats, compact padding, fluid font sizes. |
| **361px – 480px** | Standard smartphones | Single-column service, doctor, location, and testimonial cards; vertical CTAs; wrapping trust badge chips. |
| **481px – 768px** | Tablet Portrait (e.g., iPad Mini/Air) | 2-column services & why-us grid; full-width form; 2-column footer; mobile hamburger navigation. |
| **769px – 960px** | Intermediate Tablets | Clean navigation drawer; 2-column service cards; responsive form layout. |
| **961px – 1120px** | Tablet Landscape / Small Laptops | Compact navbar spacing preventing line wrapping. |
| **1024px+** | Standard Desktops | Full horizontal multi-column grids, desktop navigation bar, and CTAs. |
| **1440px+** | Large Desktop & 4K Displays | Expanded container width (1320px) with scaled typography. |

---

## ⚙️ Prerequisites

Before running this project, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (Version **18.0.0** or higher)
- [npm](https://www.npmjs.com/) (Version **9.0.0** or higher)
- [Git](https://git-scm.com/)

---

## 🚀 Setup & Execution Guide

### 1. Clone the Repository

```bash
git clone https://github.com/rohanlaxani/mm-joshi-test-repo.git
cd mm-joshi-test-repo
```

### 2. Install Dependencies

Install the project dependencies using npm:

```bash
npm install
```

### 3. Start Development Server

Run the development server with Hot Module Replacement (HMR):

```bash
npm run dev
```

The application will start immediately at:
👉 **`http://localhost:3000/`**

### 4. Build for Production

To create an optimized, minified production build:

```bash
npm run build
```

This generates production-ready assets inside the `dist/` directory.

### 5. Preview Production Build

To locally preview the generated production build:

```bash
npm run preview
```

### 6. Windows One-Click Starter

For Windows users, you can simply double-click the **`START_SERVER.bat`** file in the root folder to start the development server automatically.

---

## 📝 Form Validation & Interactions

The appointment booking form includes robust client-side validation logic:

1. **Full Name**: Required, minimum 2 characters, alphabetic and standard name punctuation only.
2. **Phone Number**: Required, exactly 10 digits (non-digit characters are automatically stripped upon input).
3. **Email Address**: Optional, validated with standard email regex if provided.
4. **Specialty**: Required dropdown selection from the 8 ophthalmic departments.
5. **Doctor Preference**: Optional dropdown selection.
6. **Reason for Visit**: Required, minimum 10 characters for clinical detail.
7. **Submission Feedback**:
   - Disables submit button with a *"Submitting…"* state.
   - Generates a unique cosmetic reference number (e.g., `Ref. No: MMJ-583921`).
   - Renders a clean success receipt screen with an option to reset and submit another request.

---

## 🎨 Design Tokens

| Token | Hex Value | Application |
|---|---|---|
| `--primary` | `#1a4fa0` | Primary branding, buttons, active states, dark accents |
| `--primary-dark`| `#133b7a` | Button hover states, deep headers |
| `--secondary` | `#0ea5e9` | Eyebrow badges, icons, focus rings, link accents |
| `--accent` | `#f59e0b` | Call-To-Action (CTA) buttons, high-visibility badges |
| `--accent-dark` | `#d97706` | CTA button hover state |
| `--dark` | `#0f172a` | Footer background, primary typography headings |
| `--light-bg` | `#f0f7ff` | Alternating section backgrounds, trust badge backdrops |
| `--white` | `#ffffff` | Card surfaces, hero wave fill, clean backgrounds |
| `--border` | `#e2e8f0` | Subtle card borders, input borders |
| `--success` | `#10b981` | Valid form state, confirmation checks |
| `--error` | `#ef4444` | Form validation error indicators |

---

## 👤 Author & Credits

- **Candidate / Developer**: Rohan Laxani
- **Project**: M. M. Joshi Eye Institute Frontend Assessment
- **Hospital**: M. M. Joshi Eye Institute (Padma Nayanalaya), Vidyanagar, Hubballi – 580031, Karnataka
