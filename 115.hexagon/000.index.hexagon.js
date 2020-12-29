var trace = (msg) => console.log(msg);

global.E = require("../dist/115.hexagon/00.core/constant/EVENT");
global.OPEN = require("../dist/115.hexagon/00.core/0pen");

var run = () => {
  global.HEXAGON = require("../dist/115.hexagon/00.work.hexagon");
  HEXAGON.wake(OPEN.bee);
};

OPEN.event.on(E.COMPLETE, run);
OPEN.wake();
