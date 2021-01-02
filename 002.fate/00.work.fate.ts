var EventEmitter = require("events").EventEmitter;

var sim = {
  wake: null,
  fate: null,
  bee: null,
  event: new EventEmitter(),
};

sim.wake = (bee: Beeing) => {
  sim.bee = bee;
  bee.hike(HkeFtr.INDEX, B.INIT);
};

import Beeing from "./00.core/beeing";
import * as B from "./00.core/constant/BASIC";
import * as PIVOT from "./val/pivot";

import "reflect-metadata";

import * as ActFtr from "./01.future.unit/future.action";
import * as HkeFtr from "./01.future.unit/future.hike";
import * as HrkFtr from "./01.future.unit/future.hark";

module.exports = sim;
