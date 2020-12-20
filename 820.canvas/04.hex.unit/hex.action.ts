import { Action } from "../00.core/interface/action.interface";
import HexBit from "./fce/hex.bit.interface";
import GridItemBit from "./fce/grid-item.bit.interface";
import GridItemRenderBit from "./fce/grid-item-render.bit.interface";
import HexMapSrcItemBit from "./fce/map-src-item.bit.interface";

export const HEX_RANGE_OPN = "[Hex action] Hex Range Open";
export class HexRangeOpen implements Action {
  readonly type = HEX_RANGE_OPN;
  constructor(public bale: GridItemBit) {}
}

export const ADD_MAP_SRC = "[Hex action] List Hex Map Src Data";
export class AddMapSrc implements Action {
  readonly type = ADD_MAP_SRC;
  constructor(public bale: HexMapSrcItemBit) {}
}

export const HIGHLITE_RENDER = "[Hex action] Hex Highlite Render";
export class HighLiteRender implements Action {
  readonly type = HIGHLITE_RENDER;
  constructor(public bale: GridItemRenderBit[]) {}
}

export const UPDATE_CENTER_CONTAINER = "[Hex action] Hex Update Graphic";
export class UpdateCenterContainer implements Action {
  readonly type = UPDATE_CENTER_CONTAINER;
  constructor(public bale: GridItemBit) {}
}

export const CENTER_HEX_CONTAINER = "[Hex action] Hex Center Graphic";
export class HexCenterContainer implements Action {
  readonly type = CENTER_HEX_CONTAINER;
}

export const OUTLINE_RENDER = "[Hex action] Outline Hex";
export class OutlineRender implements Action {
  readonly type = OUTLINE_RENDER;
  constructor(public bale: HexBit) {}
}

export const HEX_LOAD = "[Hex action] Load Hex";
export class HexLoad implements Action {
  readonly type = HEX_LOAD;
  constructor(public bale: HexBit) {}
}

export const HEX_CREATE = "[Hex action] Create Hex";
export class HexCreate implements Action {
  readonly type = HEX_CREATE;
  constructor(public bale: HexBit) {}
}

export const HEX_OPEN = "[Hex action] Waking Hex";
export class HexOpen implements Action {
  readonly type = HEX_OPEN;
  constructor(public bale: HexBit) {}
}

export type Actions =
  | HexRangeOpen
  | AddMapSrc
  | HighLiteRender
  | UpdateCenterContainer
  | HexCenterContainer
  | OutlineRender
  | HexLoad
  | HexCreate
  | HexOpen;
