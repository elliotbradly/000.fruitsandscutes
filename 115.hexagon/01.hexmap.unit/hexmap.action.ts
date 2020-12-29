import { Action } from "../00.core/interface/action.interface";
import HexmapBit from "./fce/hexmap.bit";

// Hexmap actions
export const INIT_HEXMAP = "[Hexmap action] Init Hexmap";
export class InitHexmap implements Action {
  readonly type = INIT_HEXMAP;
  constructor(public bale: HexmapBit) {}
}

export const UPDATE_HEXMAP = "[Hexmap action] Update Hexmap";
export class UpdateHexmap implements Action {
  readonly type = UPDATE_HEXMAP;
  constructor(public bale: HexmapBit) {}
}

export const ADD_HEXMAP = "[Hexmap action] Add Hexmap";
export class AddHexmap implements Action {
  readonly type = ADD_HEXMAP;
  constructor(public bale: HexmapBit) {}
}

export type Actions = InitHexmap | UpdateHexmap | AddHexmap;
