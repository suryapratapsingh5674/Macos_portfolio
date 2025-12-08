# macOS Portfolio

A macOS-inspired personal portfolio built with React, Vite, and Tailwind CSS. It mimics familiar macOS UI patterns (navbar, dock, windows) while showcasing projects, blog posts, tech stack, and contact links in a playful, interactive way.

**Live Demo**: Add your deployed URL here

**Repository**: https://github.com/suryapratapsingh5674/Macos_portfolio

## Features
- **macOS-style UI**: Top navbar with status icons, live time, and a dock with apps.
- **Interactive Windows**: Openable sections like Finder, Safari, Photos, Contact, Resume.
- **Projects Showcase**: Clickable items with text, images, and external links.
- **Dynamic Time**: Uses `dayjs` to render formatted current date/time.
- **Blog & Gallery**: Configurable posts and image gallery via constants.
- **Responsive Styling**: Tailwind CSS for fast, modern styling.

## Tech Stack
- **Frontend**: `react`, `react-dom`
- **Bundler**: `vite`
- **Styling**: `tailwindcss`
- **Utilities**: `dayjs`
- **Quality**: `eslint`, `@eslint/js`, `eslint-plugin-react-hooks`

## Project Structure
```
eslint.config.js
index.html
jsconfig.json
package.json
vite.config.js
public/
  files/
  icons/
  images/
src/
  App.jsx
  index.css
  main.jsx
  components/
    Navbar.jsx
  constants/
    index.js
```

- `src/components/Navbar.jsx`: Renders logo, nav links, status icons, and time.
- `src/constants/index.js`: Central config for nav links, icons, dock apps, posts, tech stack, socials, gallery, and window locations.
- `src/App.jsx`: Root app that mounts the navbar and main layout.

## Getting Started

### Prerequisites
- Node.js 18+ recommended
- pnpm, npm, or yarn installed

### Install
```pwsh
pnpm install
# or
npm install
# or
yarn
```

### Run in Development
```pwsh
pnpm dev
# or
npm run dev
# or
yarn dev
```

Vite will print a local URL (typically `http://localhost:5173`).

### Build for Production
```pwsh
pnpm build
# or
npm run build
# or
yarn build
```

### Preview Production Build
```pwsh
pnpm preview
# or
npm run preview
# or
yarn preview
```

## Configuration

- Tailwind v4 is enabled via `@tailwindcss/vite` and `tailwindcss`. Adjust global styles in `src/index.css` and components as needed.
- Aliases: The code uses import aliases like `#components` and `#constants` (configured via Vite and `jsconfig.json`). Ensure these paths resolve correctly if you change folders.
- Content and links: Update data in `src/constants/index.js` (projects, blog posts, socials, gallery, Resume, etc.).

## Customization Ideas
- Replace branding: Update logo in `public/images/logo.svg` and navbar text.
- Update portfolio content: Edit `WORK_LOCATION`, `ABOUT_LOCATION`, `RESUME_LOCATION` in `src/constants/index.js`.
- Add new “apps” to the dock: Extend `dockApps` with your own sections.
- Theming: Connect the `mode` icon to a light/dark theme toggle.

## Scripts
- `dev`: Start Vite dev server.
- `build`: Build production assets.
- `preview`: Preview the built site.
- `lint`: Run ESLint on the project.

## License
No explicit license is set. If you intend to open-source, consider adding a `LICENSE` file.

## Acknowledgements
- Inspired by macOS UI and portfolio concepts common in the React ecosystem.
- Uses Tailwind CSS and Vite for a fast developer experience.

## Author
- Surya Pratap Singh
- GitHub: https://github.com/suryapratapsingh5674# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
