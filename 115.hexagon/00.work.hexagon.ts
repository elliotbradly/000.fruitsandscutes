import Beeing from "./00.core/beeing";
import * as B from "./00.core/constant/BASIC";
import "reflect-metadata";

import * as ActHex from "./01.hexmap.unit/hexmap.action";
import * as HkeHex from "./01.hexmap.unit/hexmap.hike";
import * as HrkHex from "./01.hexmap.unit/hexmap.hark";

var EventEmitter = require("events").EventEmitter;

var sim = {
  wake: null,
  fate: null,
  bee: null,
  event: new EventEmitter(),
};

sim.wake = (bee: Beeing) => {
  sim.bee = bee;
  bee.hike(HkeHex.INDEX, B.INIT);
};

module.exports = sim;
