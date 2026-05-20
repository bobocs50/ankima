# Architecture

## Overview

Ankimax is an Electron desktop app with a strict three-layer split:

- the main process owns native windowing and privileged desktop capabilities,
- the preload bridge exposes a narrow safe API to the renderer,
- the renderer is a React UI that stays isolated from direct Electron access.

The app is no longer just a generic scaffold. The current direction is a compact HUD-style overlay that will become the entry point for screen capture, question flow, flashcard drafting, and Anki export.

## Runtime Structure

## Main Process

Files:

- [src/main/main.ts](/Users/philipp/Documents/ankimax/src/main/main.ts)
- [src/main/ipc.ts](/Users/philipp/Documents/ankimax/src/main/ipc.ts)

Responsibilities:

- create and configure the Electron `BrowserWindow`,
- position the HUD near the top center of the primary display,
- choose the renderer source for development or production,
- register IPC handlers for privileged app capabilities.

Current window shape:

- frameless,
- transparent,
- always on top,
- fixed-size HUD layout,
- preload-driven security model with `contextIsolation: true` and `nodeIntegration: false`.

Today the main process exposes only one IPC capability:

- `app:get-version`

That capability is intentionally small, but it defines the pattern future native features should follow.

## Preload Bridge

Files:

- [src/preload/preload.ts](/Users/philipp/Documents/ankimax/src/preload/preload.ts)
- [src/shared/electron.d.ts](/Users/philipp/Documents/ankimax/src/shared/electron.d.ts)

The preload layer is the only renderer-facing bridge to Electron. It exposes a typed `window.api` object instead of allowing direct imports of Electron or Node APIs in React code.

Current exposed API:

- `getVersion(): Promise<string>`

This layer should remain narrow. Each new desktop capability should be explicitly added here and mirrored in the shared TypeScript declaration.

## Renderer

Files:

- [src/renderer/routes/index.tsx](/Users/philipp/Documents/ankimax/src/renderer/routes/index.tsx)
- [src/renderer/pages/home/index.tsx](/Users/philipp/Documents/ankimax/src/renderer/pages/home/index.tsx)
- [src/renderer/global.css](/Users/philipp/Documents/ankimax/src/renderer/global.css)

The renderer is a React application responsible for presentation, UI state, and user interaction flow.

Current renderer behavior:

- mount a single route at `/`,
- render a HUD-like command bar,
- show placeholder actions for submit, capture-style tools, and history,
- keep the window visually transparent so the frameless Electron shell reads as an overlay,
- mark the container as draggable while keeping interactive controls clickable.

The renderer should stay focused on orchestration and interface logic. Anything that touches the operating system, external apps, file system, screen capture, or model secrets belongs outside the renderer boundary.

## Current End-To-End Flow

The only fully implemented cross-process flow is still the version example:

1. the main process registers `app:get-version`,
2. the preload bridge exposes `window.api.getVersion()`,
3. the renderer can call that function,
4. the main process returns the app version over IPC.

This is small by design. It serves as the reference implementation for every future native capability.

## Window Model

The current UI is designed around an overlay-style window rather than a conventional desktop layout.

Important implications:

- the window is frameless, so dragging must be defined in CSS with `-webkit-app-region`,
- the body and root containers must remain transparent,
- interactive controls must opt out of dragging,
- layout changes should assume limited vertical space and fast access rather than full-screen navigation.

This matters because future features should extend the HUD flow first, not accidentally regress the product back into a generic app window.

## Security Model

The current security posture is simple and should remain strict:

- `contextIsolation: true`
- `nodeIntegration: false`
- no direct Electron imports in the renderer
- desktop capabilities exposed only through preload and IPC

Practical rule:

- if a feature needs the OS, it goes through main and preload,
- if a feature is just UI, it stays in React,
- if a feature needs both, keep the contract explicit and typed.

## Development And Production

In development:

- the main process loads `http://localhost:5173`,
- the renderer is served by Vite,
- detached DevTools are opened automatically.

In production:

- the renderer loads from `dist/index.html`,
- Electron runtime files come from `dist-electron`.

This split should stay stable so feature work does not require rethinking packaging later.

## Extension Pattern

When adding a real feature such as screen capture or Anki export, follow this sequence:

1. define the capability in the main process,
2. expose the smallest useful preload method,
3. add the matching `window.api` type,
4. call it from the renderer without importing Electron directly,
5. keep UI state and privileged execution separate.

Example future capabilities:

- `captureScreenRegion()`
- `generateFlashcardDraft()`
- `askAboutCapture()`
- `exportToAnki()`

These should not be wired ad hoc from the renderer. They should be added as narrow contracts with clear request and response shapes.

## Expected Growth Areas

Based on the current roadmap, the architecture will likely expand in these directions next:

- screen capture and image handoff,
- capture-scoped question flow,
- flashcard draft generation,
- Anki export integration,
- lightweight persistence for recent captures and drafts.

As those arrive, preserve the same split:

- main process for native integration and sensitive operations,
- preload for explicit bridging,
- renderer for workflow, editing, and feedback.
