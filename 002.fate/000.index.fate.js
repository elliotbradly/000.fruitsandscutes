var trace = (msg) => console.log(msg);

global.E = require("../dist/002.fate/00.core/constant/EVENT");
global.OPEN = require("../dist/002.fate/00.core/0pen");

var run = () => {
  global.FATE = require("../dist/002.fate/00.work.fate");
  FATE.wake(OPEN.bee);
};

OPEN.event.on(E.COMPLETE, run);
OPEN.wake();
