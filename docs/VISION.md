# Vision

## Purpose

Ankimax is intended to become a desktop application with a stronger product identity than the current scaffold. Right now, the repo provides the application shell and technical foundation needed to build that product safely and incrementally.

## Direction

The near-term product direction is to evolve this codebase from a generic Electron starter into a real desktop application with clear user-facing workflows, stable desktop behavior, and a deliberate feature set.

The technical direction is already visible in the current setup:

- Electron for desktop packaging and native app lifecycle.
- React for the UI layer.
- A preload bridge for controlled renderer access to main-process capabilities.
- TypeScript across the stack to keep future growth maintainable.

## What Success Looks Like

A successful next stage for this repo would mean:

- the app has at least one real end-user feature beyond the demo screen,
- renderer and main responsibilities stay clearly separated,
- desktop-specific capabilities are added through explicit IPC contracts,
- the project remains easy to run, build, and extend.

## Current Reality

Today the app is still a scaffold. The only implemented behavior is a simple IPC round trip that fetches and displays the application version in the renderer.

## Unknowns To Refine

These areas are intentionally still open and should be updated as the product becomes clearer:

- the exact target user,
- the core user problem Ankimax should solve,
- the first must-have feature set,
- how success should be measured after launch.
