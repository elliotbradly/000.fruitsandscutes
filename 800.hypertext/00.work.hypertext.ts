/*
api goes here

*/

var EventEmitter = require("events").EventEmitter;

var sim = {
  wake: null,
  bee: null,
  event: new EventEmitter(),
};

sim.wake = (bee: Beeing) => {
  sim.bee = bee;

  return;
  //go a head and create main elements
  bee.hike(HikeBdy.INDEX, B.INIT);

  bee.hark(HrkScn.READY, (val) => {
    if (val == null) return;
    console.log("you got a root");
  });
};

import Beeing from "./00.core/beeing";
import * as B from "./00.core/constant/BASIC";

import * as HkeScn from "./01.screen.unit/screen.hike";
import * as HrkScn from "./01.screen.unit/screen.hark";
import * as ActScn from "./01.screen.unit/screen.action";

import * as HikeBdy from "./02.body.unit/body.hike";
import * as HarkBdy from "./02.body.unit/body.hark";
import * as ActBdy from "./02.body.unit/body.action";

import * as ActIdx from "./03.index.unit/index.action";
import * as HkeIdx from "./03.index.unit/index.hike";
import * as HrkIdx from "./03.index.unit/index.hark";

import * as HrkLve from "./hrk/live.hark";

module.exports = sim;
