var EventEmitter = require("events").EventEmitter;

var sim = {
  wake: null,
  fate: null,
  bee: null,
  event: new EventEmitter(),
};

sim.wake = (bee: Beeing, fat) => {
  sim.bee = bee;

  bee.dispatch({
    type: ActTtl.PUSH_PIVOT,
    bale: { idx: PIVOT.FTE, datIDX: fat },
  });

  bee.hike(HkeHue.INDEX, B.INIT);
};

import Beeing from "./00.core/beeing";
import * as B from "./00.core/constant/BASIC";

import * as PIVOT from "./val/pivot";
import "reflect-metadata";

import * as ActHue from "./01.hue.unit/hue.action";
import * as HkeHue from "./01.hue.unit/hue.hike";
import * as HrkHue from "./01.hue.unit/hue.hark";

import * as ActTtl from "./00.core/title/title.action";
import * as HkeTtl from "./00.core/title/title.hike";
import * as HrkTtl from "./00.core/title/title.hark";

module.exports = sim;
