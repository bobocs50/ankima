# Vision

screenshot -> ai should detect if there are images which are relevant. crops them and puts them together with the text

## Purpose

Ankimax exists to help students turn lecture material into real understanding and then into strong Anki cards as fast as possible.

It is built for people who want to learn actively, not for people who want AI to generate summaries and flashcards that they accept blindly.

## Core Product

Ankimax is a compact floating HUD overlay at the top of the screen. That HUD is the main entry point into the product.

The user can:
1. **Ask questions** about their screen (with or without a custom screenshot)
2. **Create flashcards** manually or with AI assistance
3. **Attach screenshots** to provide context

Ankimax is not meant to start from generic chat. It starts from something the student is looking at right now: a lecture slide, a diagram, a definition, a problem, a note, or another piece of course material.

## Input Model

Every manual screenshot lands in the **Büroklammer** (attachment area) in the HUD. Nothing happens automatically — the screenshot just sits there as context until the user decides what to do with it.

From the Büroklammer the user picks one explicit action:

| Action | What happens |
|--------|-------------|
| **Ask** | Question + screenshot sent to LLM → answer shown in popout. No card is created. |
| **AI Card** | AI generates Front & Back from the screenshot → draft opens for review and editing |
| **Manual Card** | Blank card editor opens with the screenshot attached as reference |

If the user wants to ask a question but has no screenshot in the Büroklammer, the app auto-captures the full screen as context.

**The AI toggle does not auto-trigger anything on capture.** It only controls whether the Card button pre-fills fields (AI ON) or opens a blank editor (AI OFF).

## Two Core Features

### Feature 1: Capture to Flashcard

The workflow is:

- Take a custom screenshot → lands in Büroklammer
- Press **AI Card** or **Manual Card**
- If AI Card: AI pre-fills Front & Back → draft opens
- If Manual Card: blank editor opens with screenshot as reference
- User reviews and edits
- User approves and saves to Anki

The generated card is a draft, not a final answer. Ankimax should make card creation faster, but it should not remove judgment from the learner.

### Feature 2: Ask Questions

The workflow is:

- Type a question in the HUD
- If screenshot in Büroklammer → used as context
- If no screenshot → app auto-captures full screen
- Question + screenshot sent to LLM
- Answer displayed in popout panel

Asking never creates a card. It is a separate, explicit action.

This feature supports the flashcard workflow, but it also stands on its own. Sometimes the right next step is not to make a card immediately. Sometimes the student first needs to ask what something means, how it works, or why it matters.

## AI Toggle

The AI toggle only affects card creation, not capture behavior:

| AI State | Behavior |
|----------|----------|
| **AI OFF** | Manual card creation. User fills Front & Back themselves. |
| **AI ON** | Card button pre-fills Front & Back from the screenshot. |

## Learning Principles

Ankimax follows these principles:

- The user chooses what to capture
- The user chooses what to keep
- The user edits before saving
- AI supports understanding instead of replacing it
- Speed matters, but understanding matters more
- One card at a time (no batch generation that bypasses review)

This is a direct response to products and habits that encourage people to trust fragmented AI summaries or bulk-generated cards without truly learning the material first.

## What Success Looks Like

Ankimax succeeds when a student can move through one tight flow:

1. See something important in a lecture or study session
2. Capture it from the screen
3. Understand it or question it with AI if needed
4. Turn it into a strong flashcard draft
5. Edit it
6. Send it to Anki with very little friction

The goal is to make Anki faster to use without making learning shallower.

## Near-Term Focus

The first product slice stays narrow:

- Floating HUD overlay
- Custom screenshot or full-screen auto-capture as input context
- Büroklammer staging area — screenshot lands there, user decides next action
- Flashcard generation (AI or manual) with user editing
- Push to Anki via AnkiConnect
- Screenshot-based questioning and explanation

Anything broader should come later.

## Future Direction

Later, Ankimax can expand into more advanced flashcard patterns, custom generation styles, and richer study workflows.

But the first version should stay focused on one promise: the fastest path from captured lecture material to understanding and a user-approved Anki card.
