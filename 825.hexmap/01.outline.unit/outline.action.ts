import { Action } from "../00.core/interface/action.interface";
import OutlineBit from "./fce/outline.bit";

// Outline actions
export const INIT_OUTLINE = "[Outline action] Init Outline";
export class InitOutline implements Action {
  readonly type = INIT_OUTLINE;
  constructor(public bale: OutlineBit) {}
}

export const UPDATE_OUTLINE = "[Outline action] Update Outline";
export class UpdateOutline implements Action {
  readonly type = UPDATE_OUTLINE;
  constructor(public bale: OutlineBit) {}
}

export const ADD_RECTANGLE = "[Outline action] Add Rectangle";
export class AddRectangle implements Action {
  readonly type = ADD_RECTANGLE;
  constructor(public bale: OutlineBit) {}
}

export const MAKE_MAP = "[Outline action] Make Map";
export class MakeMap implements Action {
  readonly type = MAKE_MAP;
  constructor(public bale: OutlineBit) {}
}

export type Actions = InitOutline | UpdateOutline | AddRectangle | MakeMap;
