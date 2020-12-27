/*
api goes here

*/

var EventEmitter = require("events").EventEmitter;

var sim = {
  wake: null,
  push: null,
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

sim.push = (idx: string, datIDX: any) => {
  sim.bee.dispatch({
    type: ActTtl.PUSH_PIVOT,
    bale: { idx, datIDX },
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

import * as ActTtl from "./00.core/title/title.action";
import * as HkeTtl from "./00.core/title/title.hike";
import * as HrkTtl from "./00.core/title/title.hark";

import * as HrkLve from "./hrk/live.hark";

module.exports = sim;
