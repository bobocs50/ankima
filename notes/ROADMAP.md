# Roadmap

## Purpose

This note turns the vision into an implementation sequence. Use the checkboxes to track progress.

---

## Phase 1: HUD Foundation

**Goal:** Make the overlay shell feel intentional and ready to host real workflows.

**Status:** In Progress

### Tasks

- [x] Set up Electron main, preload, and renderer boundaries
- [x] Create typed preload bridge (`window.api`)
- [x] Create HUD-style overlay window (frameless, transparent, always on top)
- [x] Implement two-row HUD layout (search bar + toolbar)
- [x] Add search input with submit button
- [x] Add toolbar buttons: Settings, Card, AI, Attach, History
- [x] Add vertical divider between button groups
- [x] Style glass effect (light top bar, dark bottom toolbar)
- [x] Make window draggable
- [ ] Add keyboard shortcuts for opening/dismissing HUD
- [ ] Wire up button click handlers to state changes
- [ ] Define renderer state model (activeMode, aiEnabled, etc.)
- [ ] Add visual feedback for AI toggle (on/off state)

### Exit Criteria

- [x] HUD opens reliably
- [x] Bar layout is stable
- [ ] Actions wired to real commands or clear placeholders
- [ ] Shell ready for capture-driven workflows

---

## Phase 2: Card Editor Panel

**Goal:** Build the popout card editor UI.

**Status:** Not Started

### Tasks

- [ ] Create card editor popout component
- [ ] Two-column layout: Front (Question/Prompt) | Back (Answer/Definition)
- [ ] Add copy button [📋]
- [ ] Add close button [✕]
- [ ] Add collapse button [⌄]
- [ ] Add footer with "Save Card" button
- [ ] Add deck selection button (placeholder)
- [ ] Toggle popout visibility when Card button clicked
- [ ] Handle collapse/expand transitions

### Exit Criteria

- [ ] Clicking Card opens the editor panel
- [ ] User can type in Front and Back fields
- [ ] Close/collapse buttons work
- [ ] Save Card button is wired (placeholder action)

---

## Phase 3: Screenshot & Clipboard

**Goal:** Let the user provide screenshot context for AI.

**Status:** Not Started

### Tasks

- [ ] Read screenshot from clipboard (if exists)
- [ ] Capture full desktop screenshot (fallback when no clipboard)
- [ ] Show attached screenshot thumbnail in card editor
- [ ] Add remove button on thumbnail
- [ ] Handle Attach button click
- [ ] Store current screenshot in renderer state
- [ ] Pass screenshot to AI when submitting

### Think Later

- [ ] Region selection tool (like screenshot crop)
- [ ] Hotkey to trigger capture

### Exit Criteria

- [ ] App detects clipboard screenshot
- [ ] App can capture full desktop as fallback
- [ ] Thumbnail displays in card editor
- [ ] Screenshot ready to send with AI requests

---

## Phase 4: AI Integration

**Goal:** Connect to LLM for question answering and card generation.

**Status:** Not Started

### Tasks

- [ ] Add AI toggle state (on/off)
- [ ] Visual indicator when AI is active
- [ ] Set up LLM API connection in main process
- [ ] Create IPC handler for AI requests
- [ ] Implement "Ask Mode": question + screenshot → answer
- [ ] Implement "Card Generation": screenshot → Front/Back draft
- [ ] Display AI responses in popout panel
- [ ] Show loading state while AI is processing
- [ ] Handle AI errors gracefully

### Exit Criteria

- [ ] AI toggle works visually and functionally
- [ ] Questions get answered with screenshot context
- [ ] Cards get auto-filled when AI is ON + screenshot attached
- [ ] Errors display helpful messages

---

## Phase 5: Anki Export

**Goal:** Push approved cards to Anki.

**Status:** Not Started

### Tasks

- [ ] Research AnkiConnect API
- [ ] Add connection check (is Anki running?)
- [ ] Fetch available decks from Anki
- [ ] Implement deck selection dropdown
- [ ] Export card with Front/Back fields
- [ ] Handle export success (close panel, show confirmation)
- [ ] Handle export failure (show error, keep panel open)

### Exit Criteria

- [ ] App verifies Anki is available
- [ ] User can select a deck
- [ ] Card exports successfully
- [ ] Clear feedback on success/failure

---

## Phase 6: History & Persistence

**Goal:** Track recent cards and persist state.

**Status:** Later

### Tasks

- [ ] Store recent cards locally
- [ ] Implement History dropdown UI
- [ ] Show today/yesterday grouping
- [ ] Click history item to view details
- [ ] Persist AI toggle preference
- [ ] Persist last selected deck

### Exit Criteria

- [ ] Recent cards appear in History dropdown
- [ ] Preferences survive app restart

---

## Phase 7: Hardening & Polish

**Goal:** Make the workflow robust for regular use.

**Status:** Later

### Tasks

- [ ] Add settings panel
- [ ] Error boundaries and retry behavior
- [ ] Loading states throughout
- [ ] Keyboard navigation
- [ ] Package and sign for distribution
- [ ] Write release documentation

### Exit Criteria

- [ ] Main workflow survives normal user mistakes
- [ ] App state is recoverable
- [ ] Release steps are documented and repeatable

---

## Quick Reference: Build Order

1. ~~HUD shell~~ (in progress)
2. Card editor panel
3. Screenshot & clipboard
4. AI integration
5. Anki export
6. History & persistence
7. Hardening & polish

---

## Notes

- Do not expand into broad chat before the capture-first workflow works
- Keep all privileged desktop capabilities behind preload and IPC
- Prefer one strong end-to-end flow over several half-finished tools
- Update this note when a phase is completed or the product scope changes
