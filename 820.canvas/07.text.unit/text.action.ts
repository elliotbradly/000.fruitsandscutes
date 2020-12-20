import { Action } from "../00.core/interface/action.interface";
import TextBit from "./fce/text.bit.interface";

export const CLOSE_TEXT = "[Text action] Close Text";
export class CloseText implements Action {
  readonly type = CLOSE_TEXT;
  constructor(public bale: TextBit) {}
}

export const UPDATE_TEXT = "[Text action] Update Text";
export class UpdateText implements Action {
  readonly type = UPDATE_TEXT;
  constructor(public bale: TextBit) {}
}

export const CREATE_TEXT = "[Text action] Create Text";
export class CreateText implements Action {
  readonly type = CREATE_TEXT;
  constructor(public bale: TextBit) {}
}

export type Actions = CloseText | UpdateText | CreateText;
