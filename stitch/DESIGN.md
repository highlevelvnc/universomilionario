```markdown
# Design System Document: Architectural Authority

## 1. Overview & Creative North Star: "The Digital Monolith"
The construction and cleaning sectors in the premium Portuguese market demand more than just utility; they demand a sense of permanent, immovable excellence. This design system is guided by the Creative North Star of **"The Digital Monolith."** 

Unlike generic "corporate" templates that rely on thin lines and white backgrounds, this system treats the interface as a physical structure. It utilizes deep, obsidian-toned layering to convey strength (Construction) and crystalline clarity to convey precision (Cleaning). By leveraging intentional asymmetry, oversized editorial typography, and "glass" depth, we move the brand from a service provider to an authoritative industry leader. We break the grid with overlapping elements to suggest a dynamic, "under-construction" energy that is simultaneously polished and complete.

---

## 2. Colors: Tonal Depth over Structural Lines
The palette is rooted in the "Dark Mode" of luxury. It is designed to minimize eye strain while maximizing the "pop" of the vibrant blue highlights.

*   **Primary Foundation:** The `surface` (`#131313`) and `surface_container_lowest` (`#0e0e0e`) provide an infinite, expensive-feeling void.
*   **The Vibrant Accent:** `primary_container` (`#0052ff`) is our "Action Blue." It must be used sparingly to guide the eye toward conversion points.

### The "No-Line" Rule
Standard 1px borders are strictly prohibited for sectioning. They feel "cheap" and "boxed in." Instead:
*   **Boundary via Shift:** Define sections by alternating between `surface` and `surface_container_low`. 
*   **The "Glass & Gradient" Rule:** Main CTAs and Hero backgrounds should utilize a subtle linear gradient: `primary` to `primary_container` (at a 135-degree angle). This creates a "soul" in the color that flat hex codes lack.
*   **Signature Textures:** Apply a 3% opacity grain or "noise" overlay on top of `surface_container` layers to mimic the tactile feel of stone or high-end architectural materials.

---

## 3. Typography: Editorial Authority
We utilize a pairing of **Manrope** (Display/Headline) and **Inter** (Body/UI) to balance geometric character with high-readability utility.

*   **Display & Headline (Manrope):** Large, bold, and authoritative. These should be set with tight letter-spacing (-0.02em) to feel like a high-end architectural magazine.
*   **Body & Labels (Inter):** Clean and functional. The `body-lg` (`1rem`) is the workhorse for trust-building copy.
*   **Hierarchy as Identity:** Use `display-lg` for value propositions. The sheer scale of the typography against the `surface_container_lowest` background creates an immediate sense of "Premium."

---

## 4. Elevation & Depth: Tonal Layering
In this system, "Up" means "Brighter." We do not use traditional drop shadows to create hierarchy; we use light.

*   **The Layering Principle:** 
    *   Base Layer: `surface`
    *   Section Layer: `surface_container_low`
    *   Card/Element Layer: `surface_container_high`
    *   Interaction/Hover Layer: `surface_bright`
*   **Ambient Shadows:** If an element must float (e.g., a modal or floating action button), use a shadow with a 40px blur, 0px offset, and 6% opacity using the `on_surface` color. It should feel like a soft glow, not a hard shadow.
*   **The "Ghost Border" Fallback:** If a boundary is visually required for accessibility, use `outline_variant` at **15% opacity**. This creates a "suggestion" of a border that vanishes into the background.
*   **Glassmorphism:** For navigation bars and floating overlays, use `surface_container` at 70% opacity with a `20px` backdrop-blur. This ensures the "Monolith" feels integrated, not fragmented.

---

## 5. Components: Precision & Strength

### Buttons: The "Power" Component
*   **Primary:** Solid `primary_container` background with `on_primary_container` text. Use `xl` (0.75rem) roundedness. No borders.
*   **Secondary:** Ghost style. No background, `outline_variant` (at 20% opacity) border, and `primary` text.
*   **Interaction:** On hover, primary buttons should scale 1.02x and increase brightness by 10%.

### Cards: Content Monoliths
*   **Construction:** Forbid dividers. Use `title-lg` for headers and `body-md` for description, separated by `24px` of vertical space. 
*   **Layout:** Use asymmetrical padding (e.g., `padding-top: 40px`, `padding-bottom: 32px`) to give a custom, non-template feel.

### Input Fields: The "Crystal" State
*   **Base:** `surface_container_highest` background.
*   **Active State:** 1px `primary` border (this is the only time a 100% opaque border is allowed, to signal focus).
*   **Error:** Use `error` (`#ffb4ab`) for helper text, never for the entire background.

### Premium Lists (Specific to Construction/Cleaning)
*   **Service Tiers:** Use `surface_container_low` for the list item. Instead of a bullet point, use a `primary` colored 4x4px square. This geometric rigor reinforces the construction theme.

---

## 6. Do's and Don'ts

### Do:
*   **Do** use extreme white space. If you think there is enough space between sections, double it.
*   **Do** use "High-Contrast Pairing." Place a `display-md` headline directly next to a `label-sm` caption for a sophisticated, editorial look.
*   **Do** use high-quality photography of materials (concrete, glass, water) as subtle, low-opacity background watermarks.

### Don't:
*   **Don't** use pure white (#FFFFFF) for text. Always use `on_surface` (`#e5e2e1`) to maintain the premium, "soft-dark" aesthetic.
*   **Don't** use standard 1px dividers. If you need to separate content, use a background color shift or a `32px` gap.
*   **Don't** use "bouncy" animations. Transitions should be smooth, linear-out, and slightly slower (300ms) to feel "heavy" and "authoritative."

---

## 7. Signature Element: The "Accent Blade"
To unify the construction and cleaning aspects, use a 2px wide vertical "blade" of `primary` color at the start of key headline sections. This represents the precision of a blueprint and the "streak-free" finish of a professional clean. It is the signature mark of this design system.