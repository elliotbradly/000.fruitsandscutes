import { Action } from "../00.core/interface/action.interface";
import GraphicBit from "./fce/graphic.bit.interface";

export const CLOSE = "[Graphic action] Close Graphic";
export class CloseGraphic implements Action {
  readonly type = CLOSE;
  constructor(public bale: GraphicBit) {}
}

export const UPDATE = "[Graphic action] Update Graphic";
export class UpdateGraphic implements Action {
  readonly type = UPDATE;
  constructor(public bale: GraphicBit) {}
}

export const CREATE_GRAPHIC = "[Graphic action] Create Graphic";
export class CreateGraphic implements Action {
  readonly type = CREATE_GRAPHIC;
  constructor(public bale: GraphicBit) {}
}

export type Actions = CloseGraphic | UpdateGraphic | CreateGraphic;
