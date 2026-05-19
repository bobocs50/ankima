import { app, BrowserWindow, screen } from 'electron';
import path from 'node:path';
import './ipc';

const isDev = !app.isPackaged;

function createWindow() {
  const window = new BrowserWindow({
    width: 680,
    height: 125,
    frame: false,
    transparent: true,
    alwaysOnTop: true,
    hasShadow: false,
    resizable: false,
    skipTaskbar: false,
    backgroundColor: '#00000000',
    webPreferences: {
      preload: path.join(__dirname, '../preload/preload.js'),
      contextIsolation: true,
      nodeIntegration: false
    }
  });

  // Position at top center of screen
  const display = screen.getPrimaryDisplay();
  const x = Math.round((display.bounds.width - 680) / 2);
  const y = 40;
  window.setPosition(x, y);

  if (isDev) {
    void window.loadURL('http://localhost:5173');
    window.webContents.openDevTools({ mode: 'detach' });
    return;
  }

  void window.loadFile(path.join(__dirname, '../../dist/index.html'));
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
