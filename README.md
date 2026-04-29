# Ankimax

Ankimax is currently a minimal Electron desktop app scaffold built with React, Vite, Tailwind, and TypeScript. The repo is set up as a secure desktop foundation that can grow into a real product without reworking the app shell, process boundaries, or build pipeline first.

## Current State

The app currently demonstrates one complete renderer-to-main flow:

- Electron creates the desktop window.
- A preload script exposes a safe `window.api` bridge.
- The React renderer calls `window.api.getVersion()`.
- The main process responds over IPC with the app version.

That means the project is ready for feature development, but it is not yet a feature-complete product.

## Local Development

```bash
npm install
npm run dev
```

Useful commands:

- `npm run build` builds the renderer and Electron TypeScript output.
- `npm run dist` builds the app and packages it with `electron-builder`.

## Project Docs

- [Vision](docs/VISION.md)
- [Roadmap](docs/ROADMAP.md)
- [Architecture](docs/ARCHITECTURE.md)
