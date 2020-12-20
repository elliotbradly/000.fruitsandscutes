var FS = require("fs-extra");

var dirList = FS.readdirSync("./");
var recList = dirList.filter((i) => {
  var item = i.split(".");
  if (item.length == 2 && item[0].length == 3) {
    return i;
  }
});

var src = "./" + recList.shift() + "/00.core";

recList.forEach((a) => {
  var end = "./" + a + "/00.core";
  FS.emptyDir(end, () => {
    console.log("empty " + a);
    FS.copy(src, end, () => {
      console.log("copy complete " + end);
      FS.remove("./dist");
    });
  });
});
