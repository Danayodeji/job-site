# Copilot Instructions for AI Coding Agents

## Project Overview
- This is a React project bootstrapped with Vite, using Tailwind CSS for styling.
- The main entry point is `src/main.jsx`, which renders the `App` component.
- Major UI sections are split into components under `src/components/` (e.g., `Navbar`, `Hero`, `Dev$Emp`).
- Static assets (e.g., images) are located in `src/assets/` and should be imported using relative paths (e.g., `import logo from '../assets/images/logo.png'`).

## Key Files and Structure
- `src/App.jsx`: Main app layout, composes Navbar, Hero, and job listing sections.
- `src/components/`: Place for all reusable UI components.
- `public/`: For static files served at the root (e.g., `vite.svg`).
- `vite.config.js`: Vite configuration, including port and plugin setup.
- `index.html`: HTML template, root for React mounting.

## Developer Workflows
- **Start Dev Server:** `npm run dev` (default port 3000, strict; will error if port is in use)
- **Build for Production:** `npm run build`
- **Preview Production Build:** `npm run preview`
- **Lint:** `npm run lint`
- If port 3000 is in use, free it using PowerShell: `netstat -ano | findstr :3000` then `Stop-Process -Id <PID> -Force`

## Project Conventions
- Use functional React components and hooks.
- Use Tailwind CSS utility classes for styling; do not use separate CSS files for new components unless necessary.
- Import assets with correct relative paths (e.g., `../assets/...`).
- Keep component files PascalCase (e.g., `Navbar.jsx`).
- Use semantic HTML and accessible markup.

## Integration & Dependencies
- Uses `@vitejs/plugin-react` for React fast refresh.
- Uses `@tailwindcss/vite` for Tailwind integration.
- No backend or API integration is present in this codebase.

## Troubleshooting
- If images do not load, check import paths for typos (e.g., missing `/` in `../assets/...`).
- If the dev server fails to start, ensure port 3000 is free.
- For new components, always import and use them in `App.jsx` or the relevant parent component.

## Example Patterns
- Importing a component: `import Navbar from './components/Navbar'`
- Importing an asset: `import logo from '../assets/images/logo.png'`
- Using Tailwind: `<div className="bg-indigo-700 py-4">Content</div>`

---

For further details, see `README.md` and the Vite/React documentation. If you encounter unclear patterns, ask for clarification or check existing components for examples.
