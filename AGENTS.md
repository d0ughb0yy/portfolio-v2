# AGENTS.md

## Project Structure
- React + Vite portfolio site (React 19, Vite 8)
- Entry: `src/main.jsx` → `App.jsx` (uses react-router-dom)
- Sections: Hero, About, Skills, Projects, Contact, NotFound

## Commands
- `npm run dev` - Start dev server
- `npm run build` - Production build (run before committing)
- `npm run lint` - ESLint (run before committing)

## Tech Stack
- Vite + React 19, Tailwind CSS v4 (`@import "tailwindcss"` in index.css)
- Framer Motion v12 (animations), React Scroll (smooth nav)
- Lucide React (icons), react-router-dom v7 (routing)

## Critical UI Conventions

### Navbar (Header.jsx)
- **Desktop (md+)**: Floating with `top-4 left-4 right-4 rounded-2xl`
- **Mobile**: Always attached `top-0 left-0 right-0` (never floating)
- When mobile menu opens: navbar attaches to top, no rounded corners (seamless connection)
- Blog link uses `motion.div` wrapper for hover effect (unlike other nav links)

### Font Usage
- **Hero only**: Share Tech Mono (`font-mono` class)
- **Everything else**: Inter (default via `--font-sans`)

### Tags (SkillCard, ProjectCard)
- Use `bg-white/5 border-white/10 text-text-muted` (NOT primary/accent colors)

### Hover Effects
- Project cards: 150ms hover (`transition-all duration-150`)
- GitHub links: Color change only (NO glow/shadow)
- Nav items: `motion.div` with `whileHover={{ scale: 1.05 }}`

## CSS Import Order (index.css)
Must be: Inter font → Share Tech font → Tailwind
```css
@import url('Inter...');
@import url('Share Tech Mono...');
@import "tailwindcss";
```

## Dead Code Removed (Don't Restore)
- `skills.js`: Removed `getTierBadgeClass()` function
- `index.css`: Removed `.cursor-blink` and `.grid-bg` classes

## SkillCard Component
- Vertical proficiency bars on left side (not horizontal)
- No tier text/percentage displayed (bars are enough)
- Data from `skills.js`: `proficiency` field drives bar height