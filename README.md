# Pedro Kochinski Landing Page

React/Vite landing page for AI engineering and software consultancy.

## Local development

This project needs Node `>=22.12.0`.

```bash
npm install
npm run dev
```

If the local machine still has an older Node 22.x installed, this also works without changing the global installation:

```bash
npx -y node@24 node_modules/vite/bin/vite.js --host 0.0.0.0
```

## Production build

```bash
npm run build
npm run preview
```

The static output is generated in `dist`.

## GitHub Pages

The workflow in `.github/workflows/pages.yml` deploys the Vite build to GitHub Pages.

1. Push this project to GitHub.
2. In the repository, open `Settings > Pages`.
3. Set `Build and deployment > Source` to `GitHub Actions`.
4. Push to `main` or run the workflow manually.

The Vite config automatically sets the correct `base` path during GitHub Actions. For a project page, it uses `/<repository-name>/`. For a user page like `pedrokochinski.github.io`, it uses `/`.
