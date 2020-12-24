//adds faces, hikes, and harks to a pivot

var FS = require("fs-extra");
var S = require("string");

var title = "993.lab";

var program = require("commander");
program.option("-t, --title <type>", "title of message");
program.parse(process.argv);

if (program.title) title = program.title;

var out = [];

var pvt = [];

var pivots = FS.readdirSync("./");
pivots.forEach((a) => {
  if (a == title) return;
  if (a == "000.main") return;
  if (a.split(".").length != 2) return;
  if (S(a.split(".")[0]).isNumeric() == false) return;
  if (S(a.split(".")[0]).length < 3) return;
  pvt.push(a);
});

var unt = [];

pvt.forEach((a) => {
  var units = FS.readdirSync("./" + a);
  units.forEach((b) => {
    if (FS.lstatSync("./" + a + "/" + b).isDirectory() == false) return;
    if (b.split(".").length != 3) return;
    if (S(b.split(".")[0]).isNumeric() == false) return;
    unt.push("./" + a + "/" + b);
  });
});

unt.forEach((a) => {
  console.log("roll " + a);
  var fce = FS.readdirSync(a + "/fce");
  fce.forEach((b) => {
    if (b.includes("-unit.")) return;
    var itm = { src: a + "/fce/" + b, fin: "./" + title + "/fce/" + b };
    out.push(itm);
  });

  var nomHke = a.split(".")[3] + ".hike.ts";

  var hke = {
    src: a + "/" + nomHke,
    fin: "./" + title + "/hke/" + nomHke,
  };

  if (FS.existsSync(hke.src)) out.push(hke);

  var nomHrk = a.split(".")[3] + ".hark.ts";

  var hrk = {
    src: a + "/" + nomHrk,
    fin: "./" + title + "/hrk/" + nomHrk,
  };

  if (FS.existsSync(hrk.src)) out.push(hrk);
});

out.forEach((a) => {
  FS.ensureFileSync(a.fin);
  FS.copySync(a.src, a.fin);
  console.log("copied " + JSON.stringify(a));
});
