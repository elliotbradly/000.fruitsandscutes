import Beeing from "./00.core/beeing";
import * as B from "./00.core/constant/BASIC";
import * as PIVOT from "./val/pivot";

var EventEmitter = require("events").EventEmitter;

import * as HkeLay from "./00.layout.unit/layout.hike";
import * as HrkLay from "./00.layout.unit/layout.hark";
import * as ActLay from "./00.layout.unit/layout.action";

import * as ActTtl from "./00.core/title/title.action";

var sim = {
  wake: null,
  bee: null,
  event: new EventEmitter(),
};

sim.wake = (bee: Beeing, gold: any, hyp, can) => {
  sim.bee = bee;
  //bee.dispatch({ type: ActLay.REPLACE_GOLDEN, bale: { dat: gold } });

  bee.dispatch({
    type: ActTtl.PUSH_PIVOT,
    bale: { idx: PIVOT.HYPERTEXT, datIDX: hyp },
  });

  bee.dispatch({
    type: ActTtl.PUSH_PIVOT,
    bale: { idx: PIVOT.CANVAS, datIDX: can },
  });

  bee.hike(HkeLay.INDEX, B.INIT);

  window.addEventListener("resize", () => {
    var width =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;

    var height =
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight;

    bee.dispatch({ type: ActLay.RESIZE_LAYOUT, bale: { width, height } });
  });
};

module.exports = sim;
