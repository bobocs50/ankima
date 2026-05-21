# Study Notes (personal — not for Claude)

This file is for me to jot down things I'm learning while building this project. Not instructions or context for Claude.

---

## #1 — Window Management: main.ts vs ipc.ts

- `main.ts` owns the real window logic: creating the window, storing its reference, deciding when to open, close, or restore it
- `ipc.ts` only registers commands — it can call those window functions but should never hold the window reference itself
- `main.ts` = state owner, `ipc.ts` = bridge for actions triggered from shortcuts, menu items, or the renderer

**Example:**

```ts
// main.ts — owns the window
let win: BrowserWindow | null = null;

export function createWindow() {
  win = new BrowserWindow({ ... });
}

export function toggleWindow() {
  if (win?.isVisible()) win.hide();
  else win?.show();
}

// ipc.ts — just wires up the command
import { toggleWindow } from './main';

ipcMain.handle('toggle-window', () => toggleWindow());
```

---

