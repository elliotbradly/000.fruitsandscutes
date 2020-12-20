var trace = (msg) => console.log(msg);

global.E = require("../dist/840.window/00.core/constant/EVENT");
global.OPEN = require("../dist/840.window/00.core/0pen");

var run = () => {

  global.WINDOW = require("../dist/840.window/00.work.window");
  global.WINDOW.wake(OPEN.bee, null, HYPERTEXT, CANVAS);
};

OPEN.event.on(E.COMPLETE, run);
OPEN.wake();
