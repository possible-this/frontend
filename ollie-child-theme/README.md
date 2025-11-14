# 🌌 Ollie Child Theme: Possible This - Digital Core

This directory contains the child theme configuration for the "Possible This" website, based on the **Ollie Block Theme** for WordPress.

The goal of this theme is to establish a high-contrast, dark-mode-first aesthetic (The "Digital Core") optimized for performance and data-driven content.

---

## 🚀 Theme Setup & Performance Optimization

This child theme is built specifically to override default colors and typography via `theme.json` to avoid custom CSS and external font loading, ensuring maximum site speed.

* **Parent Theme:** Ollie
* **Child Theme Folder:** `ollie-child`
* **External Dependencies:** None (All custom fonts and colors are handled internally).

### 📁 Files in This Directory

1.  `style.css`: Contains the required child theme header to register with WordPress. (Minimal content).
2.  `theme.json`: Contains the complete **Digital Core** style guide, including colors, typography, and block styles.
3.  `functions.php`: **(DELETED)** File was removed to prevent enqueuing external Google Fonts (Roboto/Montserrat) in favor of the locally included Space Grotesque.

---

## 🎨 Digital Core: Style Guide Implementation

### 1. Color Palette: Defined in `theme.json`

The palette is **dark-mode first**, ensuring the **blue and aqua** accents and system status green pop against the black background.

| Name | Hex Code | Theme.json Slug | Usage | Rationale |
| :--- | :--- | :--- | :--- | :--- |
| **Background (Absolute Black)** | `#000000` | `background-black` | Primary Background | Absolute black for maximum contrast and "void of space" feeling. |
| **Primary Base (Blue)** | `#0000FF` | `primary-base` | Features, CTA Background (Default) | **Pure, bold blue** for a primary, authoritative focus. |
| **Accent Color (Bright Blue)** | `#0099FF` | `accent-color` | Links, Key Icons, Secondary CTAs | Represents knowledge, future, and **readable illumination**. |
| **Bold Glow (Bright Aqua)** | `#8BF7FF` | `bold-glow` | Button hover, link hover glow, primary link color (hover). | **Vibrant aqua** for maximum drama and highlight effect. Represents mystery. |
| **Subtle Shine (Light Grey)** | `#A8C3E5` | `subtle-shine` | Body Text, Subheadings | Cool-toned grey for readability against black. |
| **System Status (Neon Green)** | `#00FF00` | `system-status` | Verdict Highlights, Code Text, Success Messages | Classic neon green for a data stream/terminal feel. |
| **Pure White** | `#FFFFFF` | `pure-white` | Text in specific CTA buttons, important contrast element. | Ensures readability on dark backgrounds. |
| **Code Block Background** | `#141414` | `code-bg` | Background for code/preformatted blocks. | Slightly softer container for console output. |
| **Border Grey** | `#333333` | `border-grey` | Low-opacity separators, table borders. | Dark, faint border to create structure. |

### 2. Typography: Optimized for Performance

The theme exclusively uses a high-performance font already included with Ollie.

* **Font Family:** **Space Grotesque** (`space-grotesk` slug)
* **Usage:** Used for all Body Text (Weight 400) and Headings (Weight 700) via global settings in `theme.json`.

### 3. Key Block Styling

| Block Element | Style Applied | Theme.json Implementation |
| :--- | :--- | :--- |
| **Site Background** | Absolute Black (`#000000`) | Global `styles.color.background` |
| **Body Text** | Subtle Shine (`#A8C3E5`) | Global `styles.color.text` |
| **Links / Primary Accent** | Accent Color (`#0099FF`) | `styles.elements.link` (default color) |
| **Link Hover** | Bold Glow (`#8BF7FF`) | `styles.elements.link` (`:hover` state) |
| **Primary CTA Button** | Background: `primary-base`, Border: `bold-glow` | `styles.blocks.core/button` |
| **Code Blocks** | Text: `system-status`, Background: `code-bg` | `styles.blocks.core/code` |
| **Shadows (Light Flare)** | `glow-aqua` and `glow-green` | Custom shadow presets (`glow-aqua` is new) for use on cards/CTAs. |
