import { ipcMain } from 'electron';

ipcMain.handle('app:get-version', () => {
  return '0.1.0';
});

// Console Log "Hello World"
ipcMain.handle('app:test', () => {
  console.log('Hello World');
});