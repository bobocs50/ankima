# Architecture

## Overview

The application uses a standard Electron split between the main process, a preload bridge, and a React renderer. The current implementation is intentionally small, but the boundaries are already set up in the way future features should follow.

## Runtime Structure

### Main process

The main process is responsible for creating and owning the desktop window and for registering backend-like capabilities exposed to the renderer through IPC.

Current responsibilities:

- create the `BrowserWindow`,
- choose the correct content source for development or production,
- register IPC handlers.

### Preload bridge

The preload layer is the only renderer-accessible bridge to Electron capabilities. It exposes a small, explicit API on `window.api` instead of allowing unrestricted Node access in the renderer.

Current exposed API:

- `getVersion(): Promise<string>`

### Renderer

The renderer is a React application that focuses on UI and calls the preload API for anything that crosses the process boundary.

Current renderer behavior:

- render the starter screen,
- call `window.api.getVersion()` on mount,
- display the returned version string.

## Current Flow

The only implemented end-to-end flow is:

1. the main process registers the `app:get-version` IPC handler,
2. the preload script exposes `window.api.getVersion()`,
3. the renderer calls that method,
4. Electron IPC returns the version string to the UI.

This is the reference pattern for future desktop capabilities.

## Security Model

The current Electron window configuration already follows the safer default model for a desktop app:

- `contextIsolation: true`
- `nodeIntegration: false`
- renderer access to main-process functionality only through preload

That means future features should continue to be added through explicit preload APIs and IPC handlers rather than direct Node access in the renderer.

## Development And Production Modes

In development:

- the main process loads `http://localhost:5173`,
- DevTools are opened in detached mode,
- the renderer is served by Vite.

In production:

- the main process loads the built `dist/index.html`,
- Electron uses the compiled files from `dist-electron`.

## Extension Pattern

When adding a new desktop capability, follow the same shape as the existing version example:

1. add an IPC handler in the main process,
2. expose a narrow preload function on `window.api`,
3. declare the renderer-facing TypeScript type for that API,
4. consume it from React components without importing Electron APIs directly into the renderer.

This keeps responsibilities clear and prevents the renderer from taking on privileged access.
