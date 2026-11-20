# Final Submission — M. M. Joshi Eye Institute Landing Page

**Candidate:** Rohan Laxani  
**Date:** November 20, 2024  
**Assignment:** Frontend Developer Interview Assessment — CONFIDENTIAL  
**Submitted to:** M. M. Joshi Eye Institute (Padma Nayanalaya), Hubballi, Karnataka

---

## Project Summary

This is a complete, responsive, single-page landing website for M. M. Joshi Eye Institute (Padma Nayanalaya), Hubballi. The page is fully self-contained — it runs by simply opening `index.html` in any modern browser with no server, build tools, or dependencies beyond a CDN link for Google Fonts.

The page covers all ten required sections: navigation, hero, stats, services, why-choose-us, doctors, testimonials, locations, appointment form, and footer — with full mobile responsiveness, hover animations, counter animations, form validation, and scroll-reveal effects.

---

## Design Decisions

### Color Palette
The palette was chosen to communicate trust, calm, and clinical professionalism:
- **Deep Royal Blue (#1a4fa0)** as the primary brand color — associated with trust, expertise, and stability in healthcare.
- **Sky Blue (#0ea5e9)** as a secondary accent — modern, clean, medical.
- **Amber (#f59e0b)** for call-to-action buttons — warm, approachable, attention-grabbing without aggression.
- **Near-black (#0f172a)** for the footer and deep backgrounds — premium, serious.
- **Light blue-tinted white (#f0f7ff)** for alternating section backgrounds — calm and airy.

### Typography
- **Playfair Display** (serif) for headings — elegant, authoritative, trustworthy. Ideal for a heritage medical institution founded in 1987.
- **Inter** (sans-serif) for body — highly readable at all sizes, modern, clinical clarity.

### Visual Hierarchy
Strong hierarchy is maintained through: font size scaling (clamp), weight contrast, section eyebrow labels, card shadows and hover lifts, and consistent CTA button placement.

---

## UX Approach

1. **Trust first** — The hero immediately surfaces the founding year, patient count, and specialist count as social proof.
2. **Action-oriented** — Every major section has a contextual CTA linking to the appointment form.
3. **Scannable** — Section eyebrows, card grids, and icon-led layouts let users quickly find what they need.
4. **Mobile-first** — All layouts are designed from smallest screen up. The hamburger menu is fully keyboard-accessible (aria-expanded).
5. **Accessibility** — Semantic HTML5 elements (header, main, section, nav, footer), aria labels on interactive controls, and sufficient color contrast ratios throughout.

---

## Technical Stack

| Layer | Technology |
|---|---|
| Markup | HTML5 (semantic) |
| Styles | CSS3 with custom properties (variables) |
| Scripting | Vanilla JavaScript ES5+ (IIFE, no transpiler needed) |
| Fonts | Google Fonts CDN (Playfair Display, Inter) |
| Icons | Inline SVG (no icon library dependency) |
| Build | None — zero build step, zero npm |

---

## Component Breakdown

| Section | Description |
|---|---|
| A. Header / Nav | Sticky, scroll-shadow, mobile hamburger, phone CTA, amber Book button |
| B. Hero | Full-viewport gradient hero, animated badge dot, abstract eye SVG, trust badges |
| C. Stats Row | 4 animated counters (IntersectionObserver + requestAnimationFrame easing) |
| D. Services Grid | 8 specialty cards with top-border reveal on hover |
| E. Why Choose Us | 6 feature cards on a blue-tinted background |
| F. Doctors | 5 specialist cards with gradient avatar initials and skill tags |
| G. Testimonials | 3 testimonial cards, center card featured (inverted blue) |
| H. Locations | 2 location cards with icons and details, map placeholder |
| I. Appointment Form | Full validation, success state, demo disclaimer banner |
| J. Footer | 4-column grid: brand, quick links, services, contact and social |

---

## Responsive Design Approach

A **mobile-first** CSS architecture was used:
- Base styles target mobile (< 480px) first.
- Progressive enhancement via @media breakpoints at 480px, 768px, 1024px, and 1440px.
- CSS Grid auto-fit / minmax() is used extensively so card grids reflow naturally without explicit breakpoints for every column count.
- The header nav collapses to a hamburger below 768px with a slide-down mobile menu.
- Typography uses clamp() for fluid scaling between breakpoints.

---

## Accessibility Notes

- All interactive elements are reachable via keyboard tab navigation.
- aria-label on icon-only buttons (hamburger, social links).
- aria-expanded on the hamburger reflects open/closed state for screen readers.
- aria-hidden="true" on decorative SVG graphics.
- Semantic landmark elements: header, main, nav, section, footer.
- Form label elements are explicitly associated with their inputs via for/id pairing.
- Required fields are marked with both a visual asterisk and the required attribute.
- Color is never the sole means of conveying information (error states also use text).

---

## Known Limitations

1. **Form is a frontend demo.** No data is transmitted to any server or real hospital system. The reference number is randomly generated client-side and purely cosmetic. A real deployment would integrate a backend API or a form service.
2. **No real images.** Doctor profiles use gradient initials avatars; the hero uses a CSS/SVG abstract eye. A production build would use real photography.
3. **Map is a placeholder.** An embedded Google Maps iframe or Mapbox integration would be added in production.
4. **Google Fonts CDN dependency.** The page requires an internet connection for optimal typography. Offline fallback fonts (Georgia, system-ui) are defined.
5. **No backend/CMS.** Content is hardcoded in HTML. A real site would use a CMS for doctor profiles, news, and service content.

---

## How to Run

1. Navigate to `mm-joshi-eye-institute/` on your machine.
2. Open `index.html` in any modern browser (Chrome, Firefox, Edge, Safari).
3. No installation, build step, or server required.

---

*This document is submitted in confidence as part of the Frontend Developer Interview Assessment for M. M. Joshi Eye Institute. All content is representative/illustrative for assessment purposes only.*
