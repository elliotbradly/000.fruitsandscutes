import { GraphicModel } from "../graphic.model";
import Graphic from "../fce/graphic.interface";
import GraphicBit from "../fce/graphic.bit.interface";
import State from "820.canvas/00.core/state";
import { ContainerModel } from "../../08.container.unit/container.model";
import * as PIXI from "pixi.js";

import * as ActCan from "../../08.container.unit/container.action";

export const createGraphic = (
  cpy: GraphicModel,
  bal: GraphicBit,
  ste: State
) => {
  var bale: GraphicBit = bal;
  if (bale == null) return console.log("no text bale present");
  if (cpy.graphicBits[bale.idx] != null)
    return console.log("cannot wake graphic already exists " + bale.idx);

  var cMod: ContainerModel = ste.value.container;

  var graphic = new PIXI.Graphics();
  bale.dex = cpy.graphicList.length;

  cpy.graphicBitList.push(bale);
  cpy.graphicList.push(graphic);
  cpy.graphicBits[bale.idx] = bale.dex;
  cpy.graphics[bale.idx] = bale.dex;

  if (bal.can == null) {
    bale.can = bale.idx;
    ste.dispatch({ type: ActCan.CREATE_CONTAINER, bale });
  }

  var container = cMod.containerList[cMod.containers[bale.can]];
  if (container == null) return console.log("no container " + bale.can);

  container.addChild(graphic);
};

export const updateGraphic = (
  cpy: GraphicModel,
  ste: GraphicModel,
  bal: GraphicBit
) => {
  var graphic = cpy.graphicList[cpy.graphics[bal.idx]];
  if (graphic == null)
    return console.log("sorry but you have no graphic for " + bal.idx);

  if (bal.clr == null) bal.clr = 0xde3249;

  var width = 33;
  var height = 33;

  if (bal.w != null) width = bal.w;
  if (bal.h != null) height = bal.h;

  graphic.clear();
  graphic.beginFill(Number(bal.clr));
  graphic.drawRect(0, 0, width, height);
  graphic.endFill();

  if (bal.x != null) graphic.x = bal.x;
  if (bal.y != null) graphic.y = bal.y;

  return cpy;
};

export const writeGraphic = (
  cpy: GraphicModel,
  ste: GraphicModel,
  bal: Graphic
) => {
  return cpy;
};
