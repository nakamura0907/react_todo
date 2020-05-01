import { app, BrowserWindow } from "electron";

// import path from "path";
// const ROOT_PATH = "file://" + path.resolve("");
// const rootPath = `${ROOT_PATH}/public/index.html`;

app.on("ready", (e) => {
  const windSetting = { window: 800, height: 600 };
  const mainWindow = new BrowserWindow(windSetting);
  mainWindow.loadFile("public/index.html");
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
