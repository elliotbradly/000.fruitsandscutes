var FS = require("fs-extra");

FS.copy("./index/", "../pub/000.bee-show/public/", () => console.log("noah"));
