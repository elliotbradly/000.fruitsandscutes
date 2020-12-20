const { readdirSync } = require("fs-extra");
var FS = require("fs-extra");
var S = require("string");
const open = require("open");

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

var output = [];
var types = {};

outList.forEach((a) => {
  var dir = "../" + a;
  var lst = readdirSync(dir);
  lst.forEach((b) => {
    if (FS.lstatSync(dir + "/" + b).isDirectory() == false) return;
    var kick = b.split(".");
    if (kick.length != 2) return;
    if (kick[0].length != 3) return;
    if (S(kick[0]).isNumeric() == false) return;
    if (types[b] != null) return types[b].push(a);
    types[b] = [a];
  });
});

var line = [];

for (var key in types) {
  var itm = key + " : " + types[key].join(", ");
  line.push(itm);
}

line.sort((a, b) => {
  return a < b ? -1 : a > b ? 1 : 0;
});

FS.ensureDirSync("./data/log/");

FS.writeFile("./data/log/pivot.txt", line.join("\n"));
console.log("wrote ./data/log/pivot.txt");
open("./data/log/pivot.txt");
