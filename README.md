# Mentora — Mobile App Design Style Guide & Showcase

> **Connect. Learn. Grow.**

An interactive design system and high-fidelity mobile prototype showcase for **Mentora** — a mobile mentorship platform connecting learners with industry professionals for short, focused 1:1 mentorship sessions. The whole site is a single scrolling page that renders realistic iPhone mockups of every screen in the product, grouped into themed sections, backed by a real, reusable component and token system rather than one-off page styling.

## ✨ Design System

Mentora's visual language is a **minimal editorial** system: confident whitespace, real typographic hierarchy, and color used only where it carries actual signal (price, rating, status) — not as decoration. Concretely, that means:

- **Tokens** ([`src/global.css`](src/global.css)) — a full Electric Azure Blue scale (`--primary-50` → `--primary-950`), an elevation scale (`--shadow-1/2/3`) replacing one-off box-shadow values, and a radius scale (`--radius-sm/md/lg`) that reserves full pill/circle shapes for real toggles, tabs, and primary CTAs instead of using them everywhere.
- **Typography** — `Plus Jakarta Sans` for UI and headings, `Inter` for body copy, and `Playfair Display` reserved as a single deliberate editorial signature (mentor names, brand moments) rather than sprinkled everywhere.
- **Shared components** ([`src/components/`](src/components/)) — a small set of components used across every screen instead of hand-duplicated markup per page:
  - **`Avatar`** — a deterministic illustrated monogram (initials on a brand gradient, hashed from the person's name) that replaces stock photography entirely. Same name always renders identically; different names land on visibly distinct, on-brand gradients.
  - **`Pill`** — consolidates field tags, filter/toggle chips, and rating chips into one component with a small variant set.
  - **`StatRow`** — the stat-trio/pair pattern (divided or boxed) used across dashboards, profiles, and the hero.
  - **`SegmentedTabs`**, **`ScreenHeader`**, **`BottomActionBar`**, **`StatusBadge`** — the recurring tab switcher, screen chrome, and live/status indicator patterns.
- **Illustrated avatars, not stock photos** — every "person" in the product (mentors, mentees, reviewers) is rendered through the `Avatar` system. No external image dependency, no risk of the same stock photo accidentally representing two different people.
- **No decorative filler** — no floating glass badges over imagery, no ambient glow-orb backgrounds, no emoji standing in for icons, no fabricated stats. If something is shown, it's real information from the product.

## 🚀 Live Demo & Presentation

- **Overview** — Hero command center with a dual 3D phone mockup and quick metrics.
- **Section 01 — Design System & Interactive Tokens**: side-by-side light/dark theme token architecture.
- **Section 02 — Authentication & Onboarding Suite**: Splash, Welcome, Sign In, Sign Up, Verify OTP, Reset Password.
- **Section 03 — Mentee Discovery, Profile & Booking**: Mentor Profile, Home Screen, Booking Calendar, Payment.
- **Section 04 — Live Mentorship & Mentor Tools**: Live 1:1 Video Session, Session Notes & Rating, Mentor Dashboard.
- **Section 05 — Primary Mobile Tab Navigation Suite**: core bottom-tab flows across the mentee experience.
- **Section 06 — Mentor Profile Tabs & Host Management Hub**: mentor-side schedule, education, and earnings views.
- **Section 07 — AI Roadmaps, Bundles & Gamification**: Career Roadmap, Mentorship Packages, Achievements & Streaks.

## 🛠️ Tech Stack

- **Framework**: React 19 + Vite 6
- **Icons**: Lucide React
- **Styling**: Vanilla CSS with a real design-token system (no Tailwind, no CSS-in-JS) — one token file, folder-per-component styles
- **Typography**: Inter, Plus Jakarta Sans, Playfair Display

## 📁 Project Structure

```
src/
├── components/        # Shared design-system components (Avatar, Pill, StatRow, …)
├── pages/              # One folder per app screen (index.jsx + styles.css)
├── sections/           # Landing-page sections that present groups of screens
├── global.css          # Design tokens (color, elevation, radius, type)
└── index.css           # Shared presentation-canvas / layout classes
```

## 💻 Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```
