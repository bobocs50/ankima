# Roadmap

## Purpose

This note turns the vision into an implementation sequence. It is meant to answer what Ankimax should build next, in what order, and what can wait.

## Current Baseline

What already exists:

- Electron main, preload, and renderer boundaries are set up.
- The renderer can call the main process through a typed preload bridge.
- A first HUD-style shell is already replacing the original scaffold window.

What does not exist yet:

- screen capture,
- AI-powered question or card generation,
- Anki integration,
- persistent user data,
- production-ready error handling and release flow.

## Product Roadmap

## Phase 1: HUD Foundation

Goal: make the overlay shell feel intentional and ready to host real workflows.

Status: in progress

- Finalize the overlay window behavior across dev and packaged builds.
- Replace placeholder buttons with real UI states and interaction hooks.
- Add keyboard-first flow for opening, submitting, dismissing, and refocusing the HUD.
- Define the main renderer state model before feature logic spreads across components.

Exit criteria:

- the HUD can open reliably,
- the bar layout is stable,
- the first actions are wired to real commands or clear placeholders,
- the shell is ready for capture-driven workflows.

## Phase 2: Screen Capture Slice

Goal: let the user select part of the screen and bring that capture back into Ankimax.

Status: next

- Add a capture trigger from the HUD.
- Implement region selection UX.
- Return the captured image and metadata to the app through explicit IPC.
- Show the captured result inside a review state instead of dropping directly into generation.

Exit criteria:

- a user can trigger capture from the HUD,
- select a screen region,
- preview the result inside the app,
- retry or confirm the capture.

## Phase 3: Capture To Questions

Goal: turn a screenshot into understanding before card creation.

Status: planned

- Add a question input flow tied to the current capture.
- Send capture context to the model layer through a narrow main-process boundary.
- Display answers in a compact review panel that keeps the screenshot context visible.
- Preserve user control over follow-up questions rather than hiding the model behind one-shot output.

Exit criteria:

- a user can capture content,
- ask a question about it,
- receive a response grounded in that capture,
- continue the loop without restarting the workflow.

## Phase 4: Capture To Flashcard

Goal: deliver the first complete product promise from captured lecture material to a reviewed card draft.

Status: planned

- Generate front and back flashcard drafts from a confirmed capture.
- Support manual editing before anything is exported.
- Add card-type assumptions explicitly instead of silently hardcoding them.
- Keep the draft quality optimized for active recall, not generic summarization.

Exit criteria:

- a user can capture content,
- generate a flashcard draft,
- edit it,
- approve it for export.

## Phase 5: Anki Export

Goal: make approved cards usable immediately.

Status: planned

- Choose the integration path, likely AnkiConnect first.
- Add connection checks and clear failure states.
- Export a reviewed card with predictable field mapping.
- Keep export logic isolated from renderer code.

Exit criteria:

- the app can verify Anki availability,
- send a reviewed card successfully,
- explain what failed when export does not work.

## Phase 6: Hardening

Goal: make the first real workflow robust enough for regular use.

Status: later

- Persist recent captures, drafts, and lightweight history.
- Improve error boundaries, retry behavior, and loading states.
- Add basic settings for model choice, export defaults, and shortcuts.
- Tighten packaging, signing, and release documentation.

Exit criteria:

- the main workflow survives normal user mistakes,
- app state is recoverable,
- release steps are documented and repeatable.

## Near-Term Build Order

If only the next few steps matter, build in this order:

1. stabilize the HUD shell,
2. implement screen capture,
3. ship capture to questions,
4. ship capture to flashcard draft,
5. add Anki export,
6. harden and polish.

## Notes

- Do not expand into broad chat before the capture-first workflow works.
- Keep all privileged desktop capabilities behind preload and IPC.
- Prefer one strong end-to-end flow over several half-finished tools.
- Update this note when a phase is completed or the product scope changes.
