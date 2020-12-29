import { Action } from "../00.core/interface/action.interface";
import DuneBit from "./fce/dune.bit";

// Dune actions
//Treachous host

export const INIT_TEXT = "[Text action] Init Text";
export class InitText implements Action {
  readonly type = INIT_TEXT;
  constructor(public bale: DuneBit) {}
}

export const OPEN_TEXT = "[Text action] Open Text";
export class OpenText implements Action {
  readonly type = OPEN_TEXT;
  constructor(public bale: DuneBit) {}
}

export const UPDATE_TEXT = "[Text action] Update Text";
export class UpdateText implements Action {
  readonly type = UPDATE_TEXT;
  constructor(public bale: DuneBit) {}
}

export const RESIZE_TEXT = "[Text action] Resize Text";
export class ResizeText implements Action {
  readonly type = RESIZE_TEXT;
  constructor(public bale: DuneBit) {}
}

export const REPLACE_TEXT = "[Text action] Replace Text";
export class ReplaceText implements Action {
  readonly type = REPLACE_TEXT;
  constructor(public bale: DuneBit) {}
}

export const CLOSE_TEXT = "[Text action] Close Text";
export class CloseText implements Action {
  readonly type = CLOSE_TEXT;
  constructor(public bale: DuneBit) {}
}

export const INIT_DUNE = "[Dune action] Init Dune";
export class InitDune implements Action {
  readonly type = INIT_DUNE;
  constructor(public bale: DuneBit) {}
}

export const UPDATE_DUNE = "[Dune action] Update Dune";
export class UpdateDune implements Action {
  readonly type = UPDATE_DUNE;
  constructor(public bale: DuneBit) {}
}

export type Actions =
  | InitDune
  | UpdateDune
  | InitText
  | OpenText
  | UpdateText
  | ResizeText
  | ReplaceText
  | CloseText;
