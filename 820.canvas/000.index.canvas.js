global.E = require("../dist/820.canvas/00.core/constant/EVENT");
global.OPEN = require("../dist/820.canvas/00.core/0pen");

var run = () => {
  global.CANVAS = require("../dist/820.canvas/00.work.canvas");
  CANVAS.wake(OPEN.bee);
};

OPEN.event.on(E.COMPLETE, run);
OPEN.wake();
