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

## Claude Code Best Practices

Guidelines for working with Claude Code on this project (via Anthropic CEO):

### 1. Plan Mode Default
- Enter plan mode for ANY non-trivial task (3+ steps or architectural decisions)
- If something goes sideways, STOP and re-plan immediately; don't keep pushing
- Use plan mode for verification steps, not just implementation
- Write detailed specs upfront to reduce ambiguity

### 2. Parallel Execution Strategy
- Use parallel tool calls liberally to keep momentum high and context clean
- Offload research, exploration, and independent checks into parallel workstreams
- For complex problems, increase parallel analysis before committing edits
- One clear objective per workstream for focused execution

### 3. Self-Improvement Loop
- After ANY correction from the user: record the pattern in session notes
- Write a concrete rule that prevents the same mistake
- Ruthlessly iterate on these rules until mistake rate drops
- Review relevant prior notes at the start of each new task

### 4. Verification Before Done
- Never mark a task complete without proving it works
- Diff behavior between baseline and your changes when relevant
- Ask yourself: "Would a staff engineer approve this?"
- Run lint/tests/build as appropriate, check logs, and demonstrate correctness

### 5. Demand Elegance (Balanced)
- For non-trivial changes: pause and ask "is there a more elegant way?"
- If a fix feels hacky: re-implement the elegant solution
- Skip this for simple, obvious fixes; don't over-engineer
- Challenge your own work before presenting it

### 6. Autonomous Bug Fixing
- When given a bug report: fix it directly; don't ask for hand-holding
- Use logs, errors, and failing tests to drive root-cause resolution
- Minimize context switching required from the user
- Resolve failing CI/lint/test issues proactively when in scope

### Task Management
- **Plan First:** Keep an explicit, checkable plan in the active session
- **Verify Plan:** Confirm assumptions before implementation when risk is non-trivial
- **Track Progress:** Mark plan items complete as you go
- **Explain Changes:** Give concise high-level summaries at each major step
- **Document Results:** Provide final verification summary (what was run, what passed, residual risks)
- **Capture Lessons:** Persist reusable rules in AGENTS.md when they are broadly applicable

### Core Principles
- **Simplicity First:** Make every change as simple as possible. Impact minimal code.
- **No Laziness:** Find root causes. No temporary fixes. Senior developer standards.
- **Minimal Impact:** Changes should only touch what's necessary. Avoid introducing bugs.
