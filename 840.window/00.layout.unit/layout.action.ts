import { Action } from "../00.core/interface/action.interface";
import LayoutBit from "./fce/layout.bit";
import ResizeBit from "./fce/resize.bit";

export const RESIZE_LAYOUT = "[Screen action] Resize Layout";
export class ResizeLayout implements Action {
  readonly type = RESIZE_LAYOUT;
  constructor(public bale: ResizeBit) {}
}

export const READ_CONTENT = "[Screen action] Read Content";
export class ReadContent implements Action {
  readonly type = READ_CONTENT;
  constructor(public bale: LayoutBit) {}
}

export const ADD_ELEMENT = "[Screen action] Add Element";
export class AddElement implements Action {
  readonly type = ADD_ELEMENT;
  constructor(public bale: LayoutBit) {}
}

export const CREATE_GROUP = "[Screen action] Create Group";
export class CreateGroup implements Action {
  readonly type = CREATE_GROUP;
  constructor(public bale: LayoutBit) {}
}

export const MAKE_COMPONENT = "[Screen action] Make Component";
export class MakeComponent implements Action {
  readonly type = MAKE_COMPONENT;
  constructor(public bale: LayoutBit) {}
}

export const OPEN_LAYOUT = "[Screen action] Open Layout";
export class OpenLayout implements Action {
  readonly type = OPEN_LAYOUT;
  constructor(public bale: LayoutBit) {}
}

export const REPLACE_GOLDEN = "[Screen action] Replace Golden";
export class ReplaceGolden implements Action {
  readonly type = REPLACE_GOLDEN;
  constructor(public bale: LayoutBit) {}
}

export const EXTRACT_ROOT = "[Screen action] Extract Root";
export class ExtractRoot implements Action {
  readonly type = EXTRACT_ROOT;
  constructor(public bale: LayoutBit) {}
}

export const INIT_LAYOUT = "[Layout action] Init Layout";
export class InitLayout implements Action {
  readonly type = INIT_LAYOUT;
  constructor(public bale: LayoutBit) {}
}

export const UPDATE_LAYOUT = "[Layout action] Update Layout";
export class UpdateLayout implements Action {
  readonly type = UPDATE_LAYOUT;
  constructor(public bale: LayoutBit) {}
}

export type Actions =
  | ReadContent
  | AddElement
  | CreateGroup
  | ExtractRoot
  | InitLayout
  | UpdateLayout
  | ReplaceGolden
  | OpenLayout
  | MakeComponent
  | ResizeLayout;
