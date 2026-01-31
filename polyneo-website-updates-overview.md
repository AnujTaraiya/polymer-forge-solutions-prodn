# Polyneo Advanced Materials - Website Update Guide

**Date:** 11th December 2025  
**Project:** Sun Mobility  
**Website:** www.polyneo.in

---

## Table of Contents

1. [Hero Banner Updates](#hero-banner-updates)
2. [Product Pages](#product-pages)
3. [Contact Form](#contact-form)
4. [Implementation Files](#implementation-files)

---

## Hero Banner Updates

### Current Issue
- Hero banner is too narrow
- Lacks dynamic engagement

### Proposed Solutions

#### **Option 1: Dynamic Animation (Recommended)**

Create an animated sequence with dynamic lines, inspired by [Indofast Energy](https://indofastenergy.com/)

**Animation Sequence:**

**Scene 1:**
- **Primary Line:** "We understand your application"
- **Secondary Line:** "Performance • Cost • Processing • Pain points"

**Scene 2:**
- **Primary Line:** "We Engineer the right compound"
- **Secondary Line:** "Optimised for performance, processability & value"

**Scene 3:**
- **Primary Line:** "Built to meet regulations"
- **Secondary Line:** "Automotive • Electrical • Global standards"

**Scene 4:**
- **Primary Line:** "Ready for serial production"
- **Secondary Line:** "Consistent Quality • Reliable Supply"

**Technical Requirements:**
- Smooth transitions between scenes
- Dynamic line animations
- Better hero image (wider format)
- Auto-loop or user-controlled progression

---

#### **Option 2: Static Hero Banner with Dynamic Text**

- Keep static background
- Cycle through the four primary lines dynamically in sequence
- Use the same messaging as Option 1

---

## Product Pages

Each section below should be **clickable and link to its own dedicated page**:

1. [Colour Solutions for Thermoplastic Compounds](./colour-solutions.md)
2. [Conductive & Anti-Static Thermoplastic Compounds](./conductive-antistatic.md)
3. [Flame Retardant / Fire-Resistant Thermoplastic Compounds](./flame-retardant.md)
4. [Long Glass Fiber (LGF) Thermoplastic Compounds](./lgf-compounds.md)

*See individual markdown files for detailed content*

---

## Contact Form

### Requirements

Add a lead capture form with the following fields:

**Form Fields:**
- **Organization Name** (required)
- **Requirement** (textarea, required)
- **Contact Person's Email** (required, validated)
- **Contact Person's Phone Number** (required)

**Integration:**
- Link form submissions to **Bigin CRM**
- Include form validation
- Success/error message handling
- Privacy policy consent checkbox (recommended)

**Placement Suggestions:**
- Footer of each product page
- Dedicated "Contact Us" page
- Sticky sidebar on product pages

---

## Implementation Files

This package includes the following files:

1. `polyneo-website-updates-overview.md` - This file (main guide)
2. `colour-solutions.md` - Colour Solutions page content
3. `conductive-antistatic.md` - Conductive & Anti-Static page content
4. `flame-retardant.md` - Flame Retardant page content
5. `lgf-compounds.md` - Long Glass Fiber page content
6. `contact-form-spec.md` - Contact form specifications and integration guide

---

## Next Steps

1. **Review** all content files
2. **Choose** hero banner option (1 or 2)
3. **Design** page layouts for each product section
4. **Source** high-quality images for each product category
5. **Set up** Bigin CRM integration
6. **Implement** responsive design for all pages
7. **Test** contact form submission flow
8. **Launch** and monitor user engagement

---

## Notes

- Ensure all pages are mobile-responsive
- Optimize images for web performance
- Maintain brand consistency across all pages
- Consider SEO optimization for each product page
- Add breadcrumb navigation for better UX
