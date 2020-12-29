//creates template of display 

var act = [ 'init', 'open', 'update', 'resize', 'replace', 'close']

var template = `
export const {{=it.idx}}_{{=it.name}} = "[{{=it.nom}} action] {{=it.src}} {{=it.nom}}";
export class {{=it.src}}{{=it.nom}} implements Action {
  readonly type = {{=it.idx}}_{{=it.name}};
  constructor(public bale: {{=it.dat}}Bit) {}
}`

var tmp0 =`export const {{=it.src}}{{=it.nom}} = (cpy: {{=it.dat}}Model, bal:{{=it.dat}}Bit, ste: State) => {
  debugger
  return cpy;
 };
 `

 var tmp1 = `export { {{=it.src}}{{=it.nom}}  } from "./buz/{{=it.title}}.buzz";`

 var tmp2 = `
 case Act.{{=it.idx}}_{{=it.name}}:
  return Buzz.{{=it.src}}{{=it.nom}}(clone(model), act.bale, state);
  `



var doT = require("dot");
var FS = require("fs-extra");
var S = require('string');
var clipboardy = require("clipboardy");
//remember to figure out how to disable apple keypad entry
var title = "995.template-page";

var program = require("commander");
program.option("-t, --title <type>", "title of message");
program.parse(process.argv);

if (program.title) title = program.title;

console.log("title: " + title)

var parm = title.split('.');
if ( parm.length != 2 ) return console.log("no length on param")

var idx = parm[0].toUpperCase();
var src = S(parm[0]).titleCase().s;
 
var dat = src;
var da = dat.toLowerCase()
var data = S(src).titleCase().s;
var title = parm[1].toLowerCase() 

var name = parm[1].toUpperCase();
var nom = S(parm[1]).titleCase().s 

var output = [];
var mthLst = [];
var buzLst = [];
var ducLst = [];

var fin = ['', ]


act.forEach( (a)=>{

idx = a.toUpperCase();
src = S(a).titleCase().s 

var gel = {idx, src, name, nom, dat, data, title}

fin.push( src + nom)

var some = template.split('\n')
some.forEach((a)=>{
  var doTCompiled = doT.template(a);
  var outLine = doTCompiled(gel);
  output.push( outLine)  
})

var some = tmp0.split('\n')
some.forEach((a)=>{
  var doTCompiled = doT.template(a);
  var outLine = doTCompiled(gel);
  mthLst.push( outLine)  
})

var some = tmp1.split('\n')
some.forEach((a)=>{
  var doTCompiled = doT.template(a);
  var outLine = doTCompiled(gel);
  buzLst.push( outLine)  
})

var some = tmp2.split('\n')
some.forEach((a)=>{
  var doTCompiled = doT.template(a);
  var outLine = doTCompiled(gel);
  ducLst.push( outLine)  
})

})

var ringy = output.join('\n');
var mappleDacks = fin.join('\n | ')
var newtbox = mthLst.join('\n');
var crapmostank = buzLst.join('\n')

var tingTow = ducLst.join('\n'); 
//a pocket full of poke balls

var way = [ringy, '\n', mappleDacks, '\n',  newtbox, '\n', crapmostank, '\n', tingTow ]

clipboardy.writeSync( way.join('\n') )

