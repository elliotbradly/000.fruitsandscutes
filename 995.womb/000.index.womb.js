var trace = (msg) => console.log(msg);

global.E = require("../dist/995.womb/00.core/constant/EVENT");
global.SIM = require("../dist/995.womb/00.core/0pen");

var run = () => {
  global.WOMB = require("../dist/995.womb/00.work.womb");
  global.WOMB.wake(SIM.bee, HYPERTEXT, CANVAS, WINDOW, HEXMAP);
};

SIM.event.on(E.COMPLETE, run);
SIM.wake();
