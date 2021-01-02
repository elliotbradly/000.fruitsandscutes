var EventEmitter = require("events").EventEmitter;

var sim = {
  wake: null,
  fate: null,
  bee: null,
  event: new EventEmitter(),
};

sim.wake = (bee: Beeing, clr: any) => {
  sim.bee = bee;
  bee.hike(HkeHex.INDEX, B.INIT);

  bee.dispatch({
    type: ActTtl.PUSH_PIVOT,
    bale: { idx: PIVOT.CLR, datIDX: clr },
  });
};

import Beeing from "./00.core/beeing";
import * as B from "./00.core/constant/BASIC";
import * as PIVOT from "./val/pivot";

import "reflect-metadata";

import * as ActHex from "./01.hexmap.unit/hexmap.action";
import * as HkeHex from "./01.hexmap.unit/hexmap.hike";
import * as HrkHex from "./01.hexmap.unit/hexmap.hark";

import * as ActTtl from "./00.core/title/title.action";
import * as HkeTtl from "./00.core/title/title.hike";
import * as HrkTtl from "./00.core/title/title.hark";

module.exports = sim;
