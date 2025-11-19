# 💫 Ollie Child Theme: Possible This - Brand Core

This directory contains the child theme configuration for the "Possible This" website, based on the **Ollie Block Theme** for WordPress.

The goal of this theme is to establish a high-performance, **light-mode-first aesthetic** (The "Brand Core") focused on clarity and utilizing a fresh, bright color palette.

---

## 🚀 Theme Setup & Performance Optimization

This child theme is built specifically to override default colors and typography via `theme.json` to avoid custom CSS and external font loading, ensuring maximum site speed.

* **Parent Theme:** Ollie
* **Child Theme Folder:** `ollie-child`
* **External Dependencies:** None (All custom fonts and colors are handled internally).

### 📁 Files in This Directory

1. `style.css`: Contains the required child theme header to register with WordPress. (Minimal content).
2. `theme.json`: Contains the complete **Brand Core** style guide, including colors, typography, and block styles.
3. `functions.php`: **(DELETED)** File was removed to prevent enqueuing external Google Fonts in favor of the locally included Mona Sans families.

---

## 🎨 Brand Core: Style Guide Implementation

### 1. Color Palette: Defined in `theme.json`

The palette is **light-mode first**, featuring a **white base** and utilizing the bright **Brand** and **Brand Accent** colors for pop and focus.

| Name | Hex Code | Theme.json Slug | Usage | Rationale |
| :--- | :--- | :--- | :--- | :--- |
| **Base (White)** | `#FFFFFF` | `base` | Primary Background | Clean white for maximum contrast in a light environment. |
| **Base Accent (Dark Grey)** | `#4E5152` | `base-accent` | Body Text, Subheadings | Dark grey for high readability against the white background. |
| **Brand** | `#00E4FF` | `brand` | Features, CTA Background (Default) | **Bright, energetic cyan** for a primary, authoritative focus. |
| **Brand Accent** | `#8BF7FF` | `brand-accent` | Button hover, link hover glow, key highlights. | **Vibrant aqua** for maximum drama and highlight effect. |
| **Brand Alt Accent** | `#366F74` | `brand-alt-accent` | Links, Key Icons, Secondary CTAs | A contrasting dark teal/green that pairs well with the bright brand colors. |
| **Contrast (Black)** | `#000000` | `contrast` | Text in specific CTA buttons, highest contrast element. | Ensures readability on light backgrounds. |
| **Border Base** | `#A3B4B5` | `border-base` | Low-opacity separators, table borders. | Medium, neutral border to create structure. |
| **Border Contrast** | `#284649` | `border-contrast` | Background for Code Blocks (Dark Container). | Dark background for code to preserve a terminal feel and contrast against light page. |
| **Tint (Light Aqua)** | `#E9F7F8` | `tint` | Subtle background shifts, soft containers. | Provides a slight lift from the pure white base. |

### 2. Typography: Optimized for Performance

The theme uses high-performance font families that replace the previous selection.

| Font Family | Theme.json Slug | Usage |
| :--- | :--- | :--- |
| **Mona Sans Narrow** | `mona-sans-narrow` | **Headings** (H1-H6, Site Title) |
| **Mona Sans** | `mona-sans` | **Body Text** (Global, Paragraphs, Lists) |
| **Monospace** | `monospace` | **Code Blocks** (Preformatted, Code) |

### 3. Key Block Styling

| Block Element | Style Applied | Theme.json Implementation |
| :--- | :--- | :--- |
| **Site Background** | Base (`#FFFFFF`) | Global `styles.color.background` |
| **Body Text** | Base Accent (`#4E5152`) | Global `styles.color.text` |
| **Links / Primary Accent** | Brand Alt Accent (`#366F74`) | `styles.elements.link` (default color) |
| **Link Hover** | Brand Accent (`#8BF7FF`) | `styles.elements.link` (`:hover` state) |
| **Primary CTA Button** | Background: `brand`, Text: `contrast`, Border: `brand-accent` | `styles.blocks.core/button` |
| **Code Blocks** | Text: `brand-accent`, Background: `border-contrast` | `styles.blocks.core/code` |
| **Shadows (Light Flare)** | `glow-brand` and `glow-brand-accent` | Custom shadow presets for use on cards/CTAs. |
