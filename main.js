process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = true;

const express = require('express')
const srv = express()
const port = 1100

srv.use(express.static('index'));

srv.get('/*', (req, res) => {
  res.send( FS.readFileSync('./index/000.index.html').toString() )
})

srv.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

const moment = require("moment");
var opn = moment().valueOf();

require("dotenv").config();
const S = require("string");

const FS = require("fs-extra");

//if (process.env.TERMINAL == "true") process.env.DISPLAY = "001.terminal";

const { app, BrowserWindow } = require("electron");
const path = require("path");

app.on("ready", ()=>{
  if (process.env.DEBUG == "true") {
  createWindow()
  }
});

app.allowRendererProcessReuse = true;

app.on("window-all-closed", function () {
  if (process.platform !== "darwin") app.quit();
});

//app.on("activate", function () {
//  if (BrowserWindow.getAllWindows().length === 0) createWindow();
//});

//core = require("./index/000.main");

const chokidar = require("chokidar");

var dirList = FS.readdirSync("./");

var recList = dirList.filter((i) => {
  var item = i.split(".");
  if (item.length == 2 && item[0].length == 3) {
    return i;
  }
});

recList.forEach((a, b) => (recList[b] = "./index/" + a + ".js"));

const watcher = chokidar.watch([recList], {
  ignored: /(^|[\/\\])\../, // ignore dotfiles
  persistent: true,
});

watcher.on("change", (path, stats) => {
  if (S(path).contains("000.main") && stats.size > 0) restartMain();
  else if (stats.size > 0) restartProject(path);
  else if (stats) console.log(`File ${path} changed size to ${stats.size}`);
});

const restartMain = () => {
  Object.keys(require.cache).forEach(function (key) {
    if (key != "electron") delete require.cache[key];
  });

  //core = require("./index/000.main");
};

const restartProject = (path) => {
  console.log("restart project " + path);
  if (process.env.DEBUG == "true") {
    mainWindow.webContents.loadURL("http://localhost:1100/");
  }

  
};

function createWindow() {
  mainWindow = new BrowserWindow({
    frame: true,
    width: 800,
    height: 400,
    webPreferences: {
      nodeIntegration: true,
      preload: path.join(__dirname, "preload.js"),
    },
  });

  mainWindow.setPosition(720, 0);

  if (process.env.DEBUG == "true") {
    //mainWindow.webContents.openDevTools();
    mainWindow.webContents.loadURL("http://localhost:1100/");
  }
  
  if (process.env.FULLSCREEN == "true") {
    mainWindow.setMenu(null);
    mainWindow.maximize();
  }

  setTimeout(() => mainWindow.webContents.focus(), 1111);



}
