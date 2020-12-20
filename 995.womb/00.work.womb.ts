import Beeing from "./00.core/beeing";
import * as B from "./00.core/constant/BASIC";
import * as PIVOT from "./val/pivot";

var EventEmitter = require("events").EventEmitter;

import * as ActTtl from "./00.core/title/title.action";
import * as HkeTtl from "./00.core/title/title.hike";
import * as HrkTtl from "./00.core/title/title.hark";

import * as ActShr from "./00.shore.unit/shore.action";
import * as HkeShr from "./00.shore.unit/shore.hike";
import * as HrkShr from "./00.shore.unit/shore.hark";

var sim = {
  wake: null,
  bee: null,
  event: new EventEmitter(),
};

sim.wake = (bee: Beeing, hyp: any, can: any, win: any, hex: any) => {
  sim.bee = bee;

  bee.dispatch({
    type: ActTtl.PUSH_PIVOT,
    bale: { idx: PIVOT.HYP, datIDX: hyp },
  });

  bee.dispatch({
    type: ActTtl.PUSH_PIVOT,
    bale: { idx: PIVOT.CVS, datIDX: can },
  });

  bee.dispatch({
    type: ActTtl.PUSH_PIVOT,
    bale: { idx: PIVOT.HEX, datIDX: hex },
  });

  bee.dispatch({
    type: ActTtl.PUSH_PIVOT,
    bale: { idx: PIVOT.WIN, datIDX: win },
  });

  setTimeout(() => {
    bee.hike(HkeShr.INDEX, B.INIT);
  }, 555);

  //bee.hike(HikeBdy.INDEX, B.INIT);

  //bee.dispatch({ type: ActScn.OPEN_LAYOUT, bale: { dat: gold } });

  //bee.hark(HrkScn.READY, (val) => {
  //  if (val == null) return;
  //  console.log("you got a root");
  //});
};

module.exports = sim;