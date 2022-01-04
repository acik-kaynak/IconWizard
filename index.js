const { app, BrowserWindow } = require("electron");
const path = require('path');
const remote = require('electron').remote;
const ipc = require("electron").ipcMain;

const iconPath = path.join(__dirname, "build", "icon.png");

function createWindow() {
  const win = new BrowserWindow({
    icon: iconPath,
    width: 800,
    height: 500,
    transparent: true, 
    frame: false,
    autoHideMenuBar: true,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      preload: path.join(__dirname, "preload.js")
    },
  });
  //win.webContents.openDevTools()
  win.loadFile("index.html");
  win.setMenuBarVisibility(false)

}
app.whenReady().then(createWindow);
