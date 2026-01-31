const { app, BrowserWindow, ipcMain } = require("electron");

let mainWindow;

function createLoginWindow() {
  mainWindow = new BrowserWindow({
    width: 400,
    height: 300,
    webPreferences: {
      preload: __dirname + "/preload.js"
    }
  });

  mainWindow.loadFile("windows/login.html");
}

ipcMain.on("login-success", (event, userName) => {
  const operationsWindow = new BrowserWindow({
    width: 500,
    height: 400,
    webPreferences: {
      preload: __dirname + "/preload.js"
    }
  });

  operationsWindow.loadFile("windows/operaciones.html");
  operationsWindow.webContents.on("did-finish-load", () => {
    operationsWindow.webContents.send("user-data", userName);
  });

  mainWindow.close();
});

app.whenReady().then(createLoginWindow);
