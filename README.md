# Ankimax

Ankimax is an Electron desktop app for students who want to turn lecture material into understanding and then into strong Anki cards with less friction.

The product starts from a compact HUD-style bar at the top of the screen. Instead of beginning with generic chat, the intended workflow starts from something the user is already looking at: a slide, diagram, definition, problem, or note on screen.

## Product Direction

The narrow first product promise is:

- capture part of the screen,
- ask questions about the captured material or generate a flashcard draft,
- review and edit the result,
- send the approved card to Anki.

Ankimax is meant to support active learning, not automate judgment away. The user chooses what to capture, what to keep, and what gets exported.

## Current State

What already exists:

- Electron main, preload, and renderer boundaries are set up.
- The desktop window has been shifted toward a HUD-style overlay shell.
- The renderer mounts the HUD interface and placeholder actions.
- A typed preload bridge exposes a minimal `window.api` contract.

What is not built yet:

- screen capture,
- question flow on captured content,
- flashcard draft generation,
- Anki export,
- persistent history and settings.

The only fully implemented cross-process capability today is a simple version call from the renderer through preload to the main process. The architecture is in place; the core product workflow is not yet complete.

## Tech Stack

- Electron
- React
- Vite
- TypeScript
- Tailwind CSS

## Local Development

```bash
npm install
npm run dev
```

Useful commands:

- `npm run build` builds the renderer and Electron TypeScript output.
- `npm run dist` builds and packages the desktop app with `electron-builder`.

## Project Docs

- [Vision](notes/VISION.md)
- [Roadmap](notes/ROADMAP.md)
- [Architecture](notes/ARCHITECTURE.md)
