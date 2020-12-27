export const REMOVE_DRAGABLE = "[Open action] Remove Dragable Listeners";
export class RemoveDragable implements Action {
  readonly type = REMOVE_DRAGABLE;
  constructor(public bale: ListenerBit) {}
}

export const DELETE_ALL_LISTENERS = "[Open action] Delete All Listeners";
export class DeleteAllListeners implements Action {
  readonly type = DELETE_ALL_LISTENERS;
  constructor(public bale: ListenerBit) {}
}

export const MAKE_LISTENER = "[Open action] Make Listener";
export class MakeListener implements Action {
  readonly type = MAKE_LISTENER;
  constructor(public bale: ListenerBit) {}
}

export const CREATE_DRAGABLE = "[Open action] Create Dragable";
export class CreateDragable implements Action {
  readonly type = CREATE_DRAGABLE;
  constructor(public bale: ListenerBit) {}
}

export const WRITE_DRAG_FILE = "[Open action] Write Drag File";
export class WriteDragFile implements Action {
  readonly type = WRITE_DRAG_FILE;
  constructor(public bale: FileBit) {}
}

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

export const LOAD_TEXT = "[Screen action] Load Text";
export class LoadText implements Action {
  readonly type = LOAD_TEXT;
  constructor(public bale: ScreenBit) {}
}

import { Action } from "../00.core/interface/action.interface";
import ScreenBit from "./fce/screen.bit";
import PivotBit from "./fce/pivot.bit";
import NavBit from "./fce/nav.bit";
import ListenerBit from "./fce/listener.bit";
import FileBit from "./fce/file.bit";

export type Actions =
  | DeleteHTML
  | MakeNav
  | PushCompile
  | UpdateHtml
  | AwakePivot
  | RemoveDragable
  | DeleteAllListeners
  | MakeListener
  | CreateDragable
  | WriteDragFile
  | LoadText;
