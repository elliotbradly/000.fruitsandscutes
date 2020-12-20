var trace = (msg) => console.log(msg);

global.E = require("../dist/825.hexmap/00.core/constant/EVENT");
global.OPEN = require("../dist/825.hexmap/00.core/0pen");

var run = () => {
  global.HEXMAP = require("../dist/825.hexmap/00.work.hexmap");
  global.HEXMAP.wake(OPEN.bee, CANVAS);
};

OPEN.event.on(E.COMPLETE, run);
OPEN.wake();
