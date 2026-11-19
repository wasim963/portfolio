# Portfolio

This project uses Next.js with static export and React 18.

## Development

```sh
npm install
npm run dev
```

The local development server uses the `/portfolio` base path to match the
GitHub Pages deployment.

## Build and deploy

```sh
npm run build
npm run deploy
```

Next.js writes the static site to `out/`; the deploy script publishes that
directory to GitHub Pages. The exported site is configured for
`https://wasim963.github.io/portfolio`.
