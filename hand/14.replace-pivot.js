//goes through and updates all pivot ids in a project
//needs a source pivot to win
var FS = require("fs-extra");
var clipboardy = require("clipboardy");
var S = require('string');
//remember to figure out how to disable apple keypad entry
var title = "733.portal";
var srcPivot = "/val/pivot.ts";

var program = require("commander");
program.option("-t, --title <type>", "title of message");
program.parse(process.argv);

if (program.title) title = program.title;

var srcItm = './' + title + srcPivot;


var list = FS.readdirSync("../");

var dirList = FS.readdirSync("./");
var recList = dirList.filter((i) => {
  var item = i.split(".");
  if (item.length == 2 && item[0].length == 3) {
    return i;
  }
});

recList = recList.filter( (i)=>{
  if ( i != title ) {
    if ( i != '000.main' ) return i
  }
})

recList.forEach( (a,b)=>{
  recList[b] =  './' + a + srcPivot;
  FS.ensureFileSync( recList[b])
  FS.copySync( srcItm, recList[b])
  console.log('cpy: ' + srcItm + ' :: ' + recList[b] )
})

console.log("show me rec" + recList);