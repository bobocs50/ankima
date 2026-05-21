# Ankimax - Workflow & UI Specification

## Overview

Ankimax is a floating HUD overlay for capturing screen content and creating Anki flashcards with optional AI assistance.

---

## Default State (HUD Only)

```
┌─────────────────────────────────────────────────────────────────┐
│  "Ask anything about your screen"                         [↵]  │
├─────────────────────────────────────────────────────────────────┤
│  ⚙️      📖 Card   ✨ AI   │   📎 Attach          History ▾     │
└─────────────────────────────────────────────────────────────────┘
```

**Elements:**
- Search input for asking questions
- Submit button [↵]
- Settings button (left)
- Card button - opens card editor
- AI button - toggle AI assistance ON/OFF
- Attach button - attach screenshot/file
- History dropdown - view past cards

---

## AI Toggle Behavior

| AI State | Behavior |
|----------|----------|
| **AI OFF** | Manual card creation. You fill Front & Back yourself. |
| **AI ON** | After screenshot/attach, AI auto-fills Front & Back, then popout opens. |

---

## Card Creation Mode (AI OFF)

Click "Card" button → Opens empty card editor for manual entry.

```
┌─────────────────────────────────────────────────────────────────┐
│  "Ask anything about your screen"                         [↵]  │
├─────────────────────────────────────────────────────────────────┤
│  ⚙️      📖 Card   ✨ AI   │   📎 Attach          History ▾     │
├─────────────────────────────────────────────────────────────────┤
│                                                     [📋]  [✕]  │
│  ┌────────────────────────────┬────────────────────────────┐   │
│  │ Front (Question/Prompt)    │ Back (Answer/Definition)   │   │
│  │                            │                            │   │
│  │ |                          │ |                          │   │
│  │                            │                            │   │
│  │                            │                            │   │
│  │                            │                            │   │
│  │                            │                            │   │
│  └────────────────────────────┴────────────────────────────┘   │
│                              [⌄]                                │
├─────────────────────────────────────────────────────────────────┤
│  📚 [Select Deck]                               [ Save Card ]   │
└─────────────────────────────────────────────────────────────────┘
```

**User flow:**
1. Click Card button
2. Popout opens with empty Front/Back fields
3. Manually type question and answer
4. Select deck (button - TODO)
5. Click Save Card

---

## Card Creation Mode (AI ON)

With AI enabled, attaching a screenshot triggers auto-fill.

```
┌─────────────────────────────────────────────────────────────────┐
│  "Create a flashcard about this concept"                  [↵]  │
├─────────────────────────────────────────────────────────────────┤
│  ⚙️      📖 Card   ✨ AI   │   📎 Attach          History ▾     │
│                  [active]     [1 attached]                      │
├─────────────────────────────────────────────────────────────────┤
│                                                     [📋]  [✕]  │
│  ┌────────────────────────────┬────────────────────────────┐   │
│  │ Front (Question/Prompt)    │ Back (Answer/Definition)   │   │
│  │                            │                            │   │
│  │ What is the capital of     │ Paris is the capital of    │   │
│  │ France?                    │ France, located on the     │   │
│  │                            │ Seine river. Population:   │   │
│  │       ✨ AI generated      │ 2.1 million.               │   │
│  │                            │       ✨ AI generated      │   │
│  └────────────────────────────┴────────────────────────────┘   │
│                              [⌄]                                │
├─────────────────────────────────────────────────────────────────┤
│  📚 [Select Deck]                               [ Save Card ]   │
└─────────────────────────────────────────────────────────────────┘
```

**User flow:**
1. Turn AI ON
2. Attach screenshot (or use existing clipboard screenshot)
3. AI analyzes image → auto-fills Front & Back
4. Popout opens with pre-filled content
5. User can edit if needed
6. Select deck → Save Card

---

## Ask Mode (No Card, Just Questions)

Type a question in the search bar and submit WITHOUT clicking Card button.

**Screenshot behavior:**
- If screenshot exists in clipboard → uses that screenshot
- If NO screenshot in clipboard → captures FULL DESKTOP screenshot
- Screenshot + question sent to LLM for answer

```
┌─────────────────────────────────────────────────────────────────┐
│  "What does this error mean?"                             [↵]  │
├─────────────────────────────────────────────────────────────────┤
│  ⚙️      📖 Card   ✨ AI   │   📎 Attach          History ▾     │
├─────────────────────────────────────────────────────────────────┤
│                                                          [✕]   │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │                                                          │  │
│  │  This error "ECONNREFUSED" means the connection was      │  │
│  │  refused by the server. Common causes:                   │  │
│  │                                                          │  │
│  │  • Server is not running                                 │  │
│  │  • Wrong port number                                     │  │
│  │  • Firewall blocking the connection                      │  │
│  │                                                          │  │
│  └──────────────────────────────────────────────────────────┘  │
│                              [⌄]                                │
└─────────────────────────────────────────────────────────────────┘
```

**User flow:**
1. Type question in search bar
2. Press Enter / click submit
3. App checks clipboard for screenshot
   - Has screenshot → use it
   - No screenshot → capture full desktop
4. Question + screenshot sent to LLM
5. Answer displayed in popout panel

---

## Attach Mode

```
┌─────────────────────────────────────────────────────────────────┐
│  "Create a card from this"                                [↵]  │
├─────────────────────────────────────────────────────────────────┤
│  ⚙️      📖 Card   ✨ AI   │   📎 Attach          History ▾     │
│                               [1 attached]                      │
├─────────────────────────────────────────────────────────────────┤
│  ┌────────────┐                                 [📋]  [✕]      │
│  │ 📷 thumb   │ ✕                                              │
│  └────────────┘                                                 │
│  ┌────────────────────────────┬────────────────────────────┐   │
│  │ Front (Question/Prompt)    │ Back (Answer/Definition)   │   │
│  │                            │                            │   │
│  │ |                          │ |                          │   │
│  │                            │                            │   │
│  └────────────────────────────┴────────────────────────────┘   │
│                              [⌄]                                │
├─────────────────────────────────────────────────────────────────┤
│  📚 [Select Deck]                               [ Save Card ]   │
└─────────────────────────────────────────────────────────────────┘
```

---

## History Dropdown

```
┌─────────────────────────────────────────────────────────────────┐
│  "Ask anything about your screen"                         [↵]  │
├─────────────────────────────────────────────────────────────────┤
│  ⚙️      📖 Card   ✨ AI   │   📎 Attach          History ▾     │
│                                                ┌──────────────┐ │
│                                                │ Today        │ │
│                                                │ • What is    │ │
│                                                │   React?     │ │
│                                                │ • CSS        │ │
│                                                │   Flexbox    │ │
│                                                │ Yesterday    │ │
│                                                │ • Git        │ │
│                                                │   commands   │ │
│                                                └──────────────┘ │
└─────────────────────────────────────────────────────────────────┘
```

---

## Workflow Summary Table

| Action | AI OFF | AI ON |
|--------|--------|-------|
| **Click Card** | Opens empty card editor | Opens empty card editor |
| **Click Card + Attach** | Opens editor, shows thumbnail | Opens editor, AI auto-fills Front/Back |
| **Submit question (no Card)** | N/A - needs AI for questions | Takes screenshot (clipboard or full desktop) + sends to LLM → shows answer |
| **Save Card** | Saves to selected Anki deck | Saves to selected Anki deck |

---

## Panel Controls

| Element | Action |
|---------|--------|
| **[📋] Copy** | Copy card content to clipboard |
| **[✕] Close** | Close the popout panel |
| **[⌄] Collapse** | Minimize panel back to HUD only |
| **[Select Deck]** | Choose which Anki deck to save to (TODO) |
| **[Save Card]** | Save card to Anki and close panel |

---

## Constraints

- **One card at a time** - no batch creation
- **Single screenshot** - one attachment per card

---

## TODO / Think Later

- [ ] **Screen capture method** - How to trigger? Hotkey? Region select?
- [ ] **Deck selection UI** - Dropdown? Modal? Where to place button?
- [ ] **Settings panel** - What settings are needed?
- [ ] **Anki connection** - AnkiConnect API integration
