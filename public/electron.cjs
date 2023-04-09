const { app, BrowserWindow } = require('electron');
const path = require('path');
app.disableHardwareAcceleration()
const createWindow = () => {
    const win = new BrowserWindow({
        height: 800,
        width: 1024,
        minWidth: 1024,
        minHeight: 800,
        icon: path.join(__dirname, "icons", "bitcoin.ico"),
        autoHideMenuBar: true
    })
    win.loadURL("http://localhost:5173")
}
app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})