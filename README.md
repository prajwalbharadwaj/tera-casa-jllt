# Terra Casa JLLT

A lightweight React app (Vite) that showcases a list of commercial properties with clean cards and a detail route scaffold. Built for quick prototyping of property discovery UX.

## Tech stack

- React 19
- React Router 7
- Vite 7
- ESLint 9

## Getting started

Prerequisites: Node.js 18+ and pnpm installed globally.

Install dependencies:

```bash
pnpm install
```

Start the dev server:

```bash
pnpm dev
```

Build for production:

```bash
pnpm build
```

Preview the production build locally:

```bash
pnpm preview
```

If you prefer npm:

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Features

- Property listing rendered from static data (`src/data/properties.js`)
- Card UI with image, location, description, status, office space
- Responsive layout via CSS Modules and global utility classes
- Router-based navigation with a detail page scaffold (`/property/:id`)

## Project structure

```text
terra-casa-jllt/
├─ index.html
├─ package.json
├─ src/
│  ├─ App.jsx                # Router configuration
│  ├─ main.jsx               # App bootstrap
│  ├─ components/
│  │  ├─ PropertyCard.jsx
│  │  └─ PropertyList.jsx
│  ├─ pages/
│  │  └─ PropertyDetail.jsx
│  ├─ data/
│  │  └─ properties.js       # Sample dataset
│  ├─ styles/
│  │  ├─ global.css
│  │  └─ PropertyCard.module.css
│  └─ assets/                # Images & icons
└─ vite.config.js
```

## Available scripts

- `pnpm dev`: start dev server
- `pnpm build`: production build
- `pnpm preview`: preview built app
- `pnpm lint`: run ESLint

## Notes

- The detail page currently contains a basic scaffold; extend it to show full property information based on `id`.
- Images are stored locally under `src/assets/images/`.
