var FS = require("fs-extra");

var clipboardy = require("clipboardy");
const youtubedl = require('youtube-dl')
var underscore = require("underscore.string");
var readline = require("readline");

var sav = "../../";

var url = clipboardy.readSync();
console.log("url " + url);

if (url.includes("youtube") == false) return console.log("nope not youtube");

var endLoc = sav + "/vid/";
FS.ensureDirSync(endLoc);

var here = "here";

var count = FS.readdirSync(endLoc).length;
var countPad = String(count).padStart(3, "0");


const video = youtubedl(url)

video.on('info', function(info) {

  console.log('info:: ' + JSON.stringify(info));

  console.log('Download started')
  console.log('filename: ' + info._filename)
  console.log('size: ' + info.size)

  var title = underscore.slugify(info._filename);
  title = title.substr(0, title.length - 16)

  var fileName = endLoc + countPad + "." + title + ".mp4";
  console.log('file ' + fileName)
  
  video.pipe(FS.createWriteStream(fileName))

})
 

