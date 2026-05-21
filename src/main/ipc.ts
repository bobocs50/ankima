import { ipcMain, BrowserWindow } from 'electron';

ipcMain.handle('app:get-version', () => {
  return '0.1.0';
});

ipcMain.handle('app:test', () => {
  console.log('Hello World');
});

ipcMain.handle('message:post-message', (_event, message: string) => {
  console.log('Message received:', message);
});

ipcMain.handle('window:expand', () => {
  const win = BrowserWindow.getAllWindows()[0];
  win?.setSize(680, 500);
});

ipcMain.handle('window:collapse', () => {
  const win = BrowserWindow.getAllWindows()[0];
  win?.setSize(680, 125);
});