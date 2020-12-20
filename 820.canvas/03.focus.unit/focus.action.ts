import { Action } from "../00.core/interface/action.interface";
import FocusBit from "./fce/focus.bit.interface";
import FocusUpdateBit from "./fce/focus-update.bit.interface";
import FocusRenderBit from "./fce/focus-render.bit.interface";

export const RENDER_FOCUS = "[wakeFocus action] Write Focus";
export class RenderFocus implements Action {
  readonly type = RENDER_FOCUS;
  constructor(public bale: FocusRenderBit) {}
}

export const WRITE_FOCUS = "[wakeFocus action] Write Focus";
export class WriteFocus implements Action {
  readonly type = WRITE_FOCUS;
  constructor(public bale: FocusBit) {}
}

export const UPDATE_FOCUS = "[wakeFocus action] Update Focus";
export class UpdateFocus implements Action {
  readonly type = UPDATE_FOCUS;
  constructor(public bale: FocusUpdateBit) {}
}

export const OPEN_FOCUS = "[wakeFocus action] Waking Focus";
export class OpenFocus implements Action {
  readonly type = OPEN_FOCUS;
  constructor(public bale: FocusBit) {}
}

export type Actions = RenderFocus | WriteFocus | UpdateFocus | OpenFocus;
