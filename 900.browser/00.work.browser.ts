import Beeing from "./00.core/beeing";
import * as B from "./00.core/constant/BASIC";
import * as PIVOT from "./val/pivot";
import * as HkeUrl from "./01.url.unit/url.hike";

import * as ActTtl from "./00.core/title/title.action";
import * as HkeTtl from "./00.core/title/title.hike";
import * as HrkTtl from "./00.core/title/title.hark";

var EventEmitter = require("events").EventEmitter;

var sim = {
  wake: null,
  bee: null,
  event: new EventEmitter(),
};

sim.wake = (bee: Beeing, aer) => {
  sim.bee = bee;

  //bee.dispatch({
  //  type: ActTtl.PUSH_PIVOT,
  //  bale: { idx: PIVOT.AER, datIDX: aer },
  //});

  setTimeout(() => {
    bee.hike(HkeUrl.INDEX, B.INIT);
  }, 333);
};

module.exports = sim;
