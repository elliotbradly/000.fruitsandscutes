var FS = require("fs-extra");
var S = require("string");

var srcPush = "./000.main";
var srcComp = "./comp.js";
var srcFist = "./hand";
var srcTerminal = "./terminal.js";

var path = require("path");

var srcDir = path.resolve(__dirname, "..").split(path.sep).pop();
console.log("src " + srcDir);

var list = FS.readdirSync("../");

var outList = [];
list.forEach((a, b) => {
  //if (b == 0) return;

  if (FS.lstatSync("../" + a).isDirectory() == false) return;

  if (S(a).contains(".") == false) return;
  var items = a.split(".");
  if (items[0].length != 3) return;
  outList.push(a);
});

var path = require("path");
var now = path.basename(path.dirname(require.main.filename));
//var rePath = now.replace(/.+\//, "");
outList.forEach((a, b) => {
  if (a == srcDir) return;
  if (a == now) return;
  var fin = "../" + a + "/000.main";
  var compFin = "../" + a + "/comp.js";
  var fistFin = "../" + a + "/hand";

  FS.copySync(srcComp, compFin);
  FS.copySync(srcFist, fistFin);

  FS.emptyDir(fin, () => {
    console.log("empty " + fin);

    console.log("copying " + srcPush);

    FS.copy(srcPush, fin, () => {
      console.log("replaced " + compFin);
      console.log("replaced " + srcFist);
      console.log("replaced with 000.main " + fin);
    });
  });
});

console.log("now " + now);
