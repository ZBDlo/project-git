const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
  loginSuccess: (userName) => ipcRenderer.send("login-success", userName),
  onUserData: (callback) => ipcRenderer.on("user-data", callback)
});
