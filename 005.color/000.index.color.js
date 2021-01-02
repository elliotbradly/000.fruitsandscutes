var trace = (msg) => console.log(msg);

global.E = require("../dist/005.color/00.core/constant/EVENT");
global.OPEN = require("../dist/005.color/00.core/0pen");

var run = () => {
  global.COLOR = require("../dist/005.color/00.work.color");
  COLOR.wake(OPEN.bee, FATE);
};

OPEN.event.on(E.COMPLETE, run);
OPEN.wake();
