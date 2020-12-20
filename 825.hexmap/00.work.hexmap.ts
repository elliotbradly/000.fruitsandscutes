import Beeing from "./00.core/beeing";
import * as B from "./00.core/constant/BASIC";
import * as PIVOT from "./val/pivot";

var EventEmitter = require("events").EventEmitter;

import * as ActTtl from "./00.core/title/title.action";

import * as HkeOut from "./01.outline.unit/outline.hike";

var sim = {
  wake: null,
  bee: null,
  event: new EventEmitter(),
};

sim.wake = (bee: Beeing, can) => {
  sim.bee = bee;

  bee.dispatch({
    type: ActTtl.PUSH_PIVOT,
    bale: { idx: PIVOT.CANVAS, datIDX: can },
  });

  bee.hike(HkeOut.INDEX, B.INIT);
};

module.exports = sim;
