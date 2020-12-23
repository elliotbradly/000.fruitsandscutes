import { Action } from "../00.core/interface/action.interface";
import ShoreBit from "./fce/shore.bit";

// Shore actions

export const INIT_SHORE = "[Shore action] Init Shore";
export class InitShore implements Action {
  readonly type = INIT_SHORE;
  constructor(public bale: ShoreBit) {}
}

export const UPDATE_SHORE = "[Shore action] Update Shore";
export class UpdateShore implements Action {
  readonly type = UPDATE_SHORE;
  constructor(public bale: ShoreBit) {}
}

export const RESIZE_SHORE = "[Shore action] Resize Shore";
export class ResizeShore implements Action {
  readonly type = RESIZE_SHORE;
  constructor(public bale: ShoreBit) {}
}

export const INIT_WITNESS = "[Shore action] Init Witness";
export class InitWitness implements Action {
  readonly type = INIT_WITNESS;
  constructor(public bale: ShoreBit) {}
}

export const UPDATE_WITNESS = "[Shore action] Update Witness";
export class UpdateWitness implements Action {
  readonly type = UPDATE_WITNESS;
  constructor(public bale: ShoreBit) {}
}

export const RESIZE_WITNESS = "[Shore action] Resize Witness";
export class ResizeWitness implements Action {
  readonly type = RESIZE_WITNESS;
  constructor(public bale: ShoreBit) {}
}

export const INIT_LINK = "[Shore action] Init Link";
export class InitLink implements Action {
  readonly type = INIT_LINK;
  constructor(public bale: ShoreBit) {}
}

export const UPDATE_LINK = "[Shore action] Update Link";
export class UpdateLink implements Action {
  readonly type = UPDATE_LINK;
  constructor(public bale: ShoreBit) {}
}

export const RESIZE_LINK = "[Shore action] Resize Link";
export class ResizeLink implements Action {
  readonly type = RESIZE_LINK;
  constructor(public bale: ShoreBit) {}
}

export type Actions =
  | InitShore
  | UpdateShore
  | ResizeShore
  | InitWitness
  | UpdateWitness
  | ResizeWitness
  | InitLink
  | UpdateLink
  | ResizeLink;
