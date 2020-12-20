//combines all the text in a folder 
//creates phrases from the matieral 

var FS = require("fs-extra");
var clipboardy = require("clipboardy");
var S = require('string');
//remember to figure out how to disable apple keypad entry
var title = "combined";
var srcDir = "./data/reference/combine/";
var finDir = './data/redux';

var program = require("commander");
program.option("-t, --title <type>", "title of message");
program.parse(process.argv);

if (program.title) title = program.title;
title = finDir + '/'+ title + '.txt';

FS.ensureDirSync(srcDir)
FS.ensureDirSync(finDir)

var format = (str ) =>{
  
var out = str;
return out

}

var output = [];
var list = FS.readdirSync(srcDir);
console.log('sss' + list + ' : ' + srcDir)


list.forEach( (a)=>{
  var chk = a.split('.');
  var fix = chk.slice(-1).pop();
  console.log('fox: ' + fix)
  if ( fix == null )return
  if ( fix != 'txt')return;
  var want = srcDir + a ;
  console.log('want:: ' + want)
  var lst = FS.readFileSync( want ).toString().split('\n')
  lst.forEach( (a)=>{
    output.push( format(a))
  })
})

FS.writeFileSync( title, output.join('\n'))
console.log("wrote :: " + title);
