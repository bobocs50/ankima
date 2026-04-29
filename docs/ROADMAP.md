# Roadmap

## Overview

This roadmap is intentionally lightweight. It is meant to show sequencing and priorities, not lock the project into dated commitments before the product definition is stable.

## Phase 1: Foundation

Status: mostly in place

- Keep the Electron, preload, and renderer boundaries clean.
- Preserve the secure renderer model based on preload-only access.
- Maintain a working local development and build pipeline.
- Replace the placeholder UI once the first real feature is defined.

## Phase 2: First Real Product Slice

Status: next major step

- Define the first user-facing workflow that makes Ankimax more than a scaffold.
- Add the IPC contracts and main-process capabilities required for that workflow.
- Build the first real renderer screens and state flow around that feature.
- Document any new product assumptions that stop being provisional.

## Phase 3: Product Hardening

Status: later

- Improve error handling and app-state resilience.
- Strengthen packaging and release readiness.
- Refine onboarding, user experience, and internal project documentation.
- Capture important architectural decisions once meaningful tradeoffs appear.

## Near-Term Priorities

The highest-value next steps are:

- define the first real product capability,
- replace the starter screen,
- extend the IPC surface deliberately rather than ad hoc,
- keep architecture docs aligned with implementation as the app grows.
