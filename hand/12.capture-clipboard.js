//copies anything that hit the clipboard

var FS = require("fs-extra");
var clipboardy = require("clipboardy");
//remember to figure out how to disable apple keypad entry
var title = "002";
var srcDir = "./data/reference/lexicon";

var program = require("commander");
program.option("-t, --title <type>", "title of message");
program.parse(process.argv);

if (program.title) title = program.title;

FS.ensureDirSync(srcDir);
var endTitle = srcDir + '/' + title + '.txt';
FS.ensureFileSync(endTitle)

var now = '';
setInterval( ()=>{
  if ( clipboardy.readSync() == now ) return
  now = clipboardy.readSync();
  console.log("add: " + now);

  var file = FS.readFileSync( endTitle ).toString().split('\n');
  file.push(now);
  file.push(' ')

  FS.writeFileSync( endTitle, file.join('\n') )
}, 333);



