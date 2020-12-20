import Beeing from "./00.core/beeing";
import * as B from "./00.core/constant/BASIC";
var EventEmitter = require("events").EventEmitter;

import * as ActV from "./01.view.unit/view.action";
import * as ActT from "./07.text.unit/text.action";

import * as HarkV from "./01.view.unit/view.hark";
import * as HikeV from "./01.view.unit/view.hike";

//import * as HarkS from "./02.screen.unit/screen.hark";
//import * as HikeS from "./02.screen.unit/screen.hike";

import * as HarkC from "./08.container.unit/container.hark";
import * as HikeC from "./08.container.unit/container.hike";

import * as HikeT from "./07.text.unit/text.hike";

import * as S from "string";
import CardBit from "./01.view.unit/fce/card.bit";
import CardItemBit from "./01.view.unit/fce/card.-item.bit";
import SceneBit from "./01.view.unit/fce/scene.bit";

var sim = {
  wake: null,
  fate: null,
  bee: null,
  event: new EventEmitter(),
  render: null,
  lore: null,
};

sim.wake = (bee: Beeing, lore: any) => {
  sim.bee = bee;
  sim.lore = lore;

  //bee.hike(HikeV.TIMELINE, B.READ);

  //setTimeout(() => bee.hike(HikeS.INDEX, B.INIT), 333);
  //setTimeout(() => bee.hike(HikeS.INDEX, B.OPEN), 3333);

  return;

  //bee.hike(HikeV.TIMELINE, B.ADD, { idx: "000", image: "000" });

  //bee.hike(HikeV.TIMELINE, B.ADD, {
  //  idx: "000",
  //  body: `
  //You are a character name <a onclick="javascript:glopClick();" > Maximon </a> , a vampric bunny who decides to end it by getting himself ran over by a truck on the eve of his 16th birthday, with only his best friends Nastya and Lestat as witnesses in what he thinks will probably be his last game before finally putting an end to this hell. But after three years playing the lycanthrope, you get caught up with some gang called "Hell's Horses"
  //But since it was a birthday since they where vampire bunny rabbits then it was really the sixteenth death day because
  //  `,
  //  });

  var idx;

  lore.bee.hark("forge.sceneNow", (val: SceneBit) => {
    if (val == null) return;
    console.log("scene now " + val);
    idx = val.idx;

    bee.hike(HikeV.TIMELINE, B.CREATE, { idx: val.idx });

    bee.hike(HikeV.TIMELINE, B.ADD, {
      idx: val.idx,
      title: val.tle,
      titlesub: val.sub,
    });

    if (val.vix != null) {
      bee.hike(HikeV.TIMELINE, B.ADD, {
        idx: val.idx,
        image: val.vix,
      });
    }

    //bee.state.dispatch({ type: ActT.UPDATE, bale: { idx: "000", txt: val } });
  });

  lore.bee.hark("forge.plotNow", (val: string) => {
    if (val == null) return;

    console.log("plot now " + JSON.stringify(val));

    //bee.hike(HikeV.TIMELINE, B.ADD, {
    // idx: idx,
    // body: "------",
    //});

    //var now: SceneBit = lore.bee.value.forge.sceneNow;
    //if (now == null) return console.warn("no scene bit");

    //bee.hike(HikeV.TIMELINE, B.ADD, {
    //  idx: now.idx,
    //  body: val,
    //});
  });

  lore.bee.hark("forge.segNow", (val: string) => {
    var now: SceneBit = lore.bee.value.forge.sceneNow;
    if (now == null) return console.warn("no scene bit");
    bee.hike(HikeV.TIMELINE, B.WRITE, {
      idx: now.idx,
      body: val,
    });

    debugger;
  });

  lore.bee.hark("forge.verse", (val: string) => {
    var now: SceneBit = lore.bee.value.forge.sceneNow;
    if (now == null) return console.warn("no scene bit");

    debugger;

    //bee.hike(HikeV.TIMELINE, B.ADD, {
    //  idx: now.idx,
    //  body: val,
    //});
  });

  return;

  if (sim.lore == null) return console.log("got no lore");
  if (lore != null) bee.state.dispatch({ type: ActV.ADD_LORE, bale: lore });

  //bee.hike(HikeV.INDEX, B.CLOSE);

  // bee.hike(HikeV.INDEX, B.UPDATE, { clr: "FF00FF" });
  //bee.hike(HikeV.INDEX, B.INIT);

  /*



 

  */

  //

  //sim.bee.sing(HikeS.INDEX, B.UPDATE, {
  //  idx: "surface",
  //  width: 800,
  //  height: h,
  //});

  // bee.sing(HikeV.INDEX, B.CREATE, {
  //   idx: "000",
  //  fce: "surface",
  // /  src: "content",
  // });
};

sim.render = () => {};

module.exports = sim;
