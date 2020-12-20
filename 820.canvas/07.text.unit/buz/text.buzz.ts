export const createText = (cpy: TextModel, bal: TextBit, ste: State) => {
  var bale: TextBit = bal;
  if (bale == null) return console.log("no text bale present");

  if (cpy.textBits == null) return console.warn("no text bits");

  if (cpy.textBits[bale.idx] != null)
    return console.log("cannot wake txt already exists " + bale.idx);

  var cMod: ContainerModel = ste.value.container;

  var text = new PIXI.Text(bale.src);
  bale.dex = cpy.textList.length;

  console.log("wake text " + bale.idx + " ::: " + bale.dex);

  cpy.textBitList.push(bale);
  cpy.textList.push(text);
  cpy.textBits[bale.idx] = bale.dex;
  cpy.texts[bale.idx] = bale.dex;

  var container = cMod.containerList[cMod.containers[bale.can]];
  if (container == null) return console.log("no container " + bale.can);

  container.addChild(text);

  ste.dispatch({
    type: Act.UPDATE_TEXT,
    bale: bale,
  });

  return cpy;
};

export const closeText = (cpy: TextModel, bal: TextBit, ste: State) => {
  var cMod: ContainerModel = ste.value.container;
  var bale: TextBit = bal;
  var idx = bale.idx;

  var index = cpy.textBits[bale.idx];
  bale = cpy.textBitList[index];

  if (bale == null)
    return console.log("can not close text for " + idx + " :: " + index);

  var text = cpy.textList[bale.dex];
  var dex = bale.dex;

  cpy.textBitList.splice(dex, 1);
  cpy.textList.splice(dex, 1);
  delete cpy.textBits[idx];
  delete cpy.texts[idx];

  var container = cMod.containerList[cMod.containers[bale.can]];
  if (container == null) return console.log("no container " + bale.can);

  container.removeChild(text);

  if (text != null) {
    if (text.destroy != null) text.destroy();
  }

  for (var i = dex; i < cpy.textBitList.length; i++) {
    var item = cpy.textBitList[i];
    cpy.textBits[item.idx] = i;
    item.dex = i;
  }

  text = null;
};

export const updateText = (cpy: TextModel, bal: TextBit, ste: State) => {
  var txt: PIXI.Text = cpy.textList[cpy.texts[bal.idx]];
  if (txt == null) return console.log("sorry no text for " + bal.idx);

  const style = new PIXI.TextStyle({
    dropShadow: true,
    dropShadowBlur: 5,
    dropShadowColor: "blue",
    dropShadowDistance: 4,
    fill: ["#8080c0", "yellow", "#c58ef0"],
    fillGradientType: 1,
    fillGradientStops: [0.3, 1],
    fontFamily: "DragonBones",
    fontSize: 75,
    fontWeight: "bold",
    stroke: "#ff8000",
    strokeThickness: 2,
  });

  txt.text = bal.src;
  //txt.style = style;

  if (bal.x != null) txt.x = bal.x;
  if (bal.y != null) txt.y = bal.y;

  return cpy;
};

var patch = (ste, type, bale?) => {
  ste.dispatch({ type, bale });
};

var query = (ste, pvt, hrk) => {
  var val = ste.value.title[pvt].query(hrk);
  if (val == null) return console.error("no val for " + pvt + " : " + hrk);
  return val;
};

var pivot = (ste, pvt, hke, mth, dat?) => {
  ste.dispatch({
    type: ActTtl.PULL_PIVOT,
    bale: {
      pvt,
      hke,
      mth,
      dat,
    },
  });
};

import * as ActTtl from "../../00.core/title/title.action";

import { TextModel } from "../text.model";
import Text from "../fce/text.interface";
import TextBit from "../fce/text.bit.interface";
import * as PIXI from "pixi.js";
import State from "../../00.core/state";
import { ContainerModel } from "../../08.container.unit/container.model";
import * as Act from "../text.action";
