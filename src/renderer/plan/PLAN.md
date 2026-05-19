# Ankimax HUD Overlay - Cluely Clone Plan

Transform Ankimax from a regular window to a Cluely-style HUD overlay bar.

---

## Implementation Checklist

- [ ] **Phase 1**: Electron Window Configuration
- [ ] **Phase 2**: App Container Transparency
- [ ] **Phase 3**: Redesign HomePage Component (Cluely UI)
- [ ] **Phase 4**: Add Window Dragging
- [ ] **Phase 5**: Optional Window Controls via IPC

---

## Phase 1: Electron Window Configuration

**File: `src/main/main.ts`**

Change BrowserWindow from standard window to HUD overlay:

```typescript
// BEFORE
const window = new BrowserWindow({
  width: 1280,
  height: 840,
  minWidth: 960,
  minHeight: 640,
  backgroundColor: '#0f1115',
  ...
});

// AFTER
const window = new BrowserWindow({
  width: 680,
  height: 110,
  frame: false,           // Remove title bar
  transparent: true,      // Enable transparency
  alwaysOnTop: true,      // Stay above other windows
  hasShadow: false,       // No window shadow
  resizable: false,       // Fixed size HUD
  skipTaskbar: false,     // Keep in dock
  vibrancy: 'under-window', // macOS blur effect
  visualEffectState: 'active',
  webPreferences: { ... }
});

// Position at top center of screen
const { screen } = require('electron');
const display = screen.getPrimaryDisplay();
const x = Math.round((display.bounds.width - 680) / 2);
const y = 40; // Gap from top
window.setPosition(x, y);
```

---

## Phase 2: Update App Container

**File: `src/renderer/App.tsx`**

Make the app root transparent:

```tsx
// Ensure the app container is transparent
// The main element should have no background
```

**File: `src/renderer/global.css`**

Verify body is transparent (already set):
```css
body { background: transparent; }
```

---

## Phase 3: Redesign HomePage Component

**File: `src/renderer/pages/home/index.tsx`**

### 3.1 New Layout Structure (Two Rows)

```
┌──────────────────────────────────────────────────────────────┐
│  Ask anything about your screen                         [⏎] │  <- Row 1: Input
├──────────────────────────────────────────────────────────────┤
│  [⊘]              [🖼] [👁] [⊞] [📊]              History ↓  │  <- Row 2: Actions
└──────────────────────────────────────────────────────────────┘
```

### 3.2 New Icons Needed (Lucide React)

Replace current icons with Cluely-matching ones:

| Position | Cluely Icon | Lucide Equivalent |
|----------|-------------|-------------------|
| Row 1 Right | Enter/Submit | `CornerDownLeft` or `ArrowRight` |
| Row 2 Left | Ban/Disable | `Ban` or `Circle` with slash |
| Row 2 Center | Screenshot | `Image` |
| Row 2 Center | Eye/Vision | `Eye` |
| Row 2 Center | Grid | `LayoutGrid` or `Grid2x2` |
| Row 2 Center | Waveform | `AudioLines` |
| Row 2 Right | History dropdown | `History` + `ChevronDown` |

### 3.3 Color Scheme Change

**FROM** (brown/tan):
- Bar: `rgba(112,98,79,0.92)` gradient
- Buttons: `#ece9e4` with `#49423b` text
- Input: `rgba(88,78,64,0.34)`

**TO** (purple/violet frosted glass):
- Bar: `rgba(80, 60, 120, 0.6)` or similar purple with blur
- Buttons: Semi-transparent with white/light icons
- Input: `rgba(255, 255, 255, 0.1)` with white text
- Border: `rgba(255, 255, 255, 0.15)`

### 3.4 Full Component Rewrite

```tsx
import {
  CornerDownLeft,
  Ban,
  Image,
  Eye,
  LayoutGrid,
  AudioLines,
  ChevronDown
} from 'lucide-react';

export default function HomePage() {
  return (
    <main className="h-screen w-screen p-2">
      {/* Draggable glass container */}
      <div className="draggable-area flex flex-col rounded-2xl
                      bg-purple-900/40 backdrop-blur-2xl
                      border border-white/15 overflow-hidden">

        {/* Row 1: Search Input */}
        <div className="flex items-center px-4 py-3 gap-3">
          <input
            type="text"
            placeholder="Ask anything about your screen"
            className="flex-1 bg-transparent text-white/90
                       placeholder:text-white/50 text-sm focus:outline-none"
          />
          <button className="bg-purple-500 rounded-lg p-2 text-white">
            <CornerDownLeft className="size-4" />
          </button>
        </div>

        {/* Row 2: Action Icons */}
        <div className="flex items-center justify-between px-4 py-2
                        border-t border-white/10">
          {/* Left: Disable */}
          <button className="text-white/60 hover:text-white/90">
            <Ban className="size-5" />
          </button>

          {/* Center: Tools */}
          <div className="flex items-center gap-4">
            <button><Image className="size-5 text-white/70" /></button>
            <button><Eye className="size-5 text-white/70" /></button>
            <button><LayoutGrid className="size-5 text-white/70" /></button>
            <button><AudioLines className="size-5 text-white/70" /></button>
          </div>

          {/* Right: History */}
          <button className="flex items-center gap-1 text-white/70
                             bg-white/10 rounded-full px-3 py-1 text-sm">
            History
            <ChevronDown className="size-4" />
          </button>
        </div>
      </div>
    </main>
  );
}
```

---

## Phase 4: Add Window Dragging

Since `frame: false` removes the title bar, users need a way to drag the window.

**File: `src/renderer/global.css`**

Already has `.draggable-area` class - ensure it's applied to the main container.

```css
.draggable-area {
  -webkit-app-region: drag;
}

.draggable-area button,
.draggable-area input {
  -webkit-app-region: no-drag;
}
```

---

## Phase 5: Optional Window Controls via IPC

If you need to minimize/close the HUD:

**File: `src/main/ipc.ts`**
```typescript
ipcMain.handle('window:minimize', () => {
  BrowserWindow.getFocusedWindow()?.minimize();
});

ipcMain.handle('window:hide', () => {
  BrowserWindow.getFocusedWindow()?.hide();
});
```

**File: `src/preload/preload.ts`**
```typescript
windowMinimize: () => ipcRenderer.invoke('window:minimize'),
windowHide: () => ipcRenderer.invoke('window:hide'),
```

**File: `src/shared/electron.d.ts`**
```typescript
windowMinimize: () => Promise<void>;
windowHide: () => Promise<void>;
```

---

## Execution Order

1. [ ] **Step 1**: Update `src/main/main.ts` - Window configuration
2. [ ] **Step 2**: Verify `src/renderer/global.css` - Body transparency
3. [ ] **Step 3**: Rewrite `src/renderer/pages/home/index.tsx` - New Cluely UI
4. [ ] **Step 4**: Test drag functionality with `.draggable-area`
5. [ ] **Step 5**: (Optional) Add IPC window controls
6. [ ] **Step 6**: Run `npm run dev` and verify

---

## Visual Reference (Cluely)

```
┌────────────────────────────────────────────────────────────┐
│ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ │
│ Ask anything about your screen                        [⏎] │
│ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ │
│ [⊘]           [🖼] [👁] [⊞] [📊]              [History ↓] │
│ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ │
└────────────────────────────────────────────────────────────┘

Key features:
- Frosted purple glass background
- ~100-110px total height
- ~680px width
- Rounded corners (16-20px radius)
- Subtle white border
- Semi-transparent (see desktop through)
```

---

## Files to Modify

| File | Change |
|------|--------|
| `src/main/main.ts` | Window config (frame, transparent, size, position) |
| `src/renderer/pages/home/index.tsx` | Complete UI rewrite |
| `src/renderer/global.css` | Maybe tweak draggable styles |
| `src/main/ipc.ts` | (Optional) Window control handlers |
| `src/preload/preload.ts` | (Optional) Expose window controls |
| `src/shared/electron.d.ts` | (Optional) Type definitions |

---

## Verification

1. Run `npm run dev`
2. Window appears without title bar at top center of screen
3. Desktop is visible through the transparent areas
4. Can drag window by the glass area (not buttons/input)
5. Window stays on top of other apps
6. All icons render correctly
7. Input field is focusable and typeable
