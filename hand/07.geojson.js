var FS = require("fs-extra");
var clipboardy = require("clipboardy");
//remember to figure out how to disable apple keypad entry
var title = "tech-noir";
var srcDir = "./data/geojson/";

var program = require("commander");
program.option("-t, --title <type>", "title of message");
program.parse(process.argv);

if (program.title) title = program.title;

FS.ensureDirSync(srcDir);

var dex = FS.readdirSync(srcDir).length;
dex = String(dex).padStart(5, "0");
var file = srcDir + dex + "." + title + ".json";

var geo = clipboardy.readSync();
if (geo.includes("coordinates") == false) return console.log("not geojson");

if (geo.includes("type") == false) return console.log("not geojson");
var obj = JSON.parse(geo);
FS.writeJSON(file, obj, () => {
  console.log("write " + file);
});
