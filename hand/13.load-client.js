var FS = require("fs-extra");
var clipboardy = require("clipboardy");
var S = require('string');
//remember to figure out how to disable apple keypad entry
var title = "993-700";
var srcDir = "./data/capture/";
var client = "../000.bee-show/";
var server = "../001.gator-sim/";

var program = require("commander");
program.option("-t, --title <type>", "title of message");
program.parse(process.argv);

if (program.title) title = program.title;

var srcClient = title.split('-')[0];
var srcServer = title.split('-')[1];

if ( srcClient == null ) return console.log('no client');
if ( srcServer == null ) return console.log('no server');

var clientList = FS.readdirSync( client);
clientList.forEach( (a)=>{
  var hold =  a.split('.')
  if (hold.length != 2 ) return
  if ( S(hold[0]).isNumeric() == false ) return
  if ( hold[0] != srcClient ) return
  srcClient = a
  console.log('client ' + srcClient);
})

var serverList = FS.readdirSync( server);
serverList.forEach( (a)=>{
  var hold =  a.split('.')
  if (hold.length != 2 ) return
  if ( S(hold[0]).isNumeric() == false ) return
  if ( hold[0] != srcServer ) return
  srcServer = a
  console.log('server ' + srcServer);
})

var opnLoc = client + srcClient + '/';
var endLoc = server + srcServer + '/shw/'
FS.ensureDirSync( endLoc )
FS.copySync( opnLoc + 'fce', endLoc + 'fce'  )
FS.copySync( opnLoc + 'hke', endLoc + 'hke'  )
FS.copySync( opnLoc + 'hrk', endLoc + 'hrk'  )
FS.copySync( opnLoc + 'val', endLoc + 'val'  )



