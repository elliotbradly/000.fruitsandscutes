//this has got to make you made
//since you wrote it twice
//see fashion html
//would you not like this thirty minutes to an hour back

var FS = require("fs-extra");
var doT = require("dot");
var S = require("string");

var love =
  'export const {{=it.nom}}: string = require("../../../{{=it.tle}}/vew/{{=it.vew}}");';

var title = "996.crib";
var view = "cave-adventure";

var program = require("commander");
program.option("-t, --title <type>", "title of unit");
program.parse(process.argv);

if (program.title) {
  title = program.title.split(":")[0];
  view = program.title.split(":")[1];
}

if (FS.existsSync("./" + title) == false)
  return console.log("nope on " + title);

FS.ensureDirSync("./" + title + "/vew");

var lst = FS.readdirSync("./" + title + "/vew");
var dex = String(lst.length).padStart(3, "0");
var fileNom = dex + "." + view + ".html";
var file = "./" + title + "/vew/" + fileNom;

console.log("file " + file);

FS.ensureFileSync(file);

var contents = ["//" + title, "//" + view];

FS.writeFileSync(file, contents.join("\n"));

var nom = S(view).camelize().s;
var gel = { nom, tle: title, vew: fileNom };

var doTCompiled = doT.template(love);
var outline = doTCompiled(gel);

var htmlSRC = "./" + title + "/val/html.ts";
FS.ensureFileSync(htmlSRC);
var lst = FS.readFileSync(htmlSRC).toString().split("\n");
lst.push(outline);

FS.writeFileSync(htmlSRC, lst.join("\n"));

console.log("writing " + htmlSRC);
