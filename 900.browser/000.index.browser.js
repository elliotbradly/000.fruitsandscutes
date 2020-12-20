var trace = (msg) => console.log(msg);

global.E = require("../dist/900.browser/00.core/constant/EVENT");
global.OPEN = require("../dist/900.browser/00.core/0pen");

var run = () => {
  global.BROWSER = require("../dist/900.browser/00.work.browser");
  global.BROWSER.wake(OPEN.bee);
};

OPEN.event.on(E.COMPLETE, run);
OPEN.wake();
