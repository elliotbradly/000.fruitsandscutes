import { Action } from "../../00.core/interface/action.interface";
import State from "../../00.core/state";
import * as Act from "../hex.action";
import { HexModel } from "../hex.model";
import HexBit from "../fce/hex.bit.interface";
import { GraphicModel } from "../../06.graphic.unit/graphic.model";
import { ContainerModel } from "../../08.container.unit/container.model";
import GraphicBit from "../../06.graphic.unit/fce/graphic.bit.interface";
import { SurfaceModel } from "../../09.surface.unit/surface.model";
import SurfaceBit from "../../09.surface.unit/fce/surface.bit.interface";
import * as Honeycomb from "honeycomb-grid";
import { gsap } from "gsap";
import GridItemCenterBit from "../fce/grid-item-center.bit.interface";

export const CenterHexContainer = (act: Action, state: State) => {
  if (act.type != Act.CENTER_HEX_CONTAINER) return;

  var hMod: HexModel = state.value.hex;
  var cMod: ContainerModel = state.value.container;
  var gMod: GraphicModel = state.value.graphic;
  var sMod: SurfaceModel = state.value.surface;

  var bale: GridItemCenterBit = hMod.containerCenter;

  var hexBit: HexBit = hMod.hexBitList[hMod.hexBits[bale.idx]];
  if (hexBit == null) return console.log("you have no hex for " + hexBit);
  var graphicBit: GraphicBit =
    gMod.graphicBitList[gMod.graphicBits[bale.graph]];
  if (graphicBit == null)
    throw new Error("graphic not present for " + hexBit.graph);

  var containerBit = cMod.containerBitList[cMod.containerBits[graphicBit.can]];
  var container = cMod.containerList[cMod.containers[graphicBit.can]];

  if (container == null)
    throw new Error("container not present for " + graphicBit.can);

  var sBit: SurfaceBit =
    sMod.surfaceBitList[sMod.surfaceBits[containerBit.src]];
  var surface = sMod.surfaceList[sMod.surfaces[sBit.idx]];

  if (surface == null) throw new Error("container not present for " + surface);

  var viewWidth = surface.view.width;
  var viewHeight = surface.view.height;
  var containerHeight = container.height;

  var hexIDX = bale.idx + "-" + bale.x + "-" + bale.y;
  console.log("show me " + hexIDX);

  var hex: Honeycomb.Hex<any> = hMod.hc.hexList[hMod.hc.hexs[hexIDX]];

  if (hex == null) return console.log("you got no hex for " + hexIDX);

  const point = hex.toPoint();

  var hexX = point.x;
  var hexY = point.y;
  console.log("now " + hexX + " ::: " + hexY);

  var viewMidX = viewWidth * 0.4 - hexY;

  var sizeW = hexBit.w;
  var sizeH = hexBit.h;

  var yPercent = bale.y / (Math.abs(hexBit.top) + Math.abs(hexBit.btm));
  console.log("show percent " + yPercent);

  hexX = viewWidth * 0.5 - hexX - window.innerWidth * 0.5 + 111;
  hexY = bale.y * -300;

  gsap.to(container.position, { duration: 0.33, x: hexX, y: hexY });
};
