var trace = (msg) => console.log(msg);

global.E = require("../dist/800.hypertext/00.core/constant/EVENT");
global.OPEN = require("../dist/800.hypertext/00.core/0pen");

var run = () => {
  global.HYPERTEXT = require("../dist/800.hypertext/00.work.hypertext");
  global.HYPERTEXT.wake(OPEN.bee);
};

OPEN.event.on(E.COMPLETE, run);
OPEN.wake();
