import { Action } from "../00.core/interface/action.interface";
import ScreenBit from "./fce/screen.bit";
import PivotBit from "./fce/pivot.bit";
import NavBit from "./fce/nav.bit";

export const DELETE_HTML = "[Screen action] Delete HTML";
export class DeleteHTML implements Action {
  readonly type = DELETE_HTML;
  constructor(public bale: NavBit) {}
}

export const MAKE_NAV = "[Screen action] Make Nav";
export class MakeNav implements Action {
  readonly type = MAKE_NAV;
  constructor(public bale: NavBit) {}
}

export const PUSH_COMP = "[Screen action] Create HTML";
export class PushCompile implements Action {
  readonly type = PUSH_COMP;
  constructor(public bale: ScreenBit) {}
}

export const UPDATE_HTML = "[Screen action] Update HTML";
export class UpdateHtml implements Action {
  readonly type = UPDATE_HTML;
  constructor(public bale: ScreenBit) {}
}

export const AWAKE_PIVOT = "[Screen action] Add PIVOT";
export class AwakePivot implements Action {
  readonly type = AWAKE_PIVOT;
  constructor(public bale: PivotBit) {}
}

export type Actions =
  | DeleteHTML
  | MakeNav
  | PushCompile
  | UpdateHtml
  | AwakePivot;
