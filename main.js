const { app, BrowserWindow, ipcMain } = require('electron')
const chat = require('./modules/chat');

function createWindow () {
  // Create the browser window.
  const browserWindow = new BrowserWindow({
    width: 840,
    height: 490,
    resizable: true,
    frame: true,
    fullscreenable: false,
    darkTheme: true,
    hasShadow: false,
    alwaysOnTop: false,
    webPreferences: {
      devTools: true,
      nodeIntegration: true
    }
  })

  // and load the index.html of the app.
  browserWindow.loadFile('index.html')

  // Open the DevTools.
  browserWindow.webContents.openDevTools()

  // test the loaded module
  chat('message');
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(createWindow)

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})

ipcMain.on('start-timer', _ => {
  console.log('caught it! ')
  ipcMain.emit('start-typing')
})

ipcMain.on('start-typing', _ => {
  console.log('...typing')
})

