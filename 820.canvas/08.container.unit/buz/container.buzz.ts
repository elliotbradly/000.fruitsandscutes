import { ContainerModel } from "../container.model";
import Container from "../fce/container.interface";
import ContainerBit from "../fce/container.bit.interface";
import State from "../../00.core/state";
import { SurfaceModel } from "../../09.surface.unit/surface.model";
import * as Act from "../container.action";
import * as PIXI from "pixi.js";

export const createContainer = (
  cpy: ContainerModel,
  bal: ContainerBit,
  ste: State
) => {
  var cMod: ContainerModel = ste.value.container;
  var sMod: SurfaceModel = ste.value.surface;
  var bale: ContainerBit = bal;

  if (bale == null) return console.error("no bale for canvas container");

  bale.dex = cMod.containerList.length;

  cMod.containerBitList.push(bale);
  cMod.containerBits[bale.idx] = bale.dex;

  var container = new PIXI.Container();
  cMod.containers[bale.idx] = cMod.containerList.length;
  cMod.containerList.push(container);

  var face = sMod.surfaceList[sMod.surfaces[bale.src]];
  if (face == null) face = sMod.surfaceList[0];
  if (face == null) return console.error("you have no face for " + bale.idx);

  face.stage.addChild(container);

  return;

  ste.dispatch({
    type: Act.UPDATE_CONTAINER,
    bale: bale,
  });
};

export const deleteContainer = (
  cpy: ContainerModel,
  bal: ContainerBit,
  ste: State
) => {
  var bale: ContainerBit = bal;
  var cMod: ContainerModel = ste.value.container;

  bale = cMod.containerBits[bale.idx];
  if (bale == null) return console.log("txt does not exist " + bale.idx);

  var dex: number = bale.dex;
  console.log("removing contains " + dex);
};

export const updateContainer = (cpy: ContainerModel, bal: ContainerBit) => {
  var item: PIXI.Container = cpy.containerList[cpy.containers[bal.idx]];

  if (item == null) return console.log("no container item for " + bal.idx);

  if (bal.x != null) item.x = bal.x;
  if (bal.y != null) item.y = bal.y;
  return cpy;
};

export const writeContainer = (cpy: ContainerModel, bal: ContainerBit) => {
  return cpy;
};
