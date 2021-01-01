import { Action } from "../00.core/interface/action.interface";
import ShoreBit from "./fce/shore.bit";

// Shore actions

export const INIT_SHORE = "[Shore action] Init Shore";
export class InitShore implements Action {
  readonly type = INIT_SHORE;
  constructor(public bale: ShoreBit) {}
}

export const READ_ARTE = "[Shore action] Read Arte";
export class ReadArte implements Action {
  readonly type = READ_ARTE;
  constructor(public bale: ShoreBit) {}
}

export const OPEN_SHORE = "[Shore action] Open Shore";
export class OpenShore implements Action {
  readonly type = OPEN_SHORE;
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

//witness section
export const INIT_WITNESS = "[Shore action] Init Witness";
export class InitWitness implements Action {
  readonly type = INIT_WITNESS;
  constructor(public bale: ShoreBit) {}
}

export const OPEN_WITNESS = "[Shore action] Open Witness";
export class OpenWitness implements Action {
  readonly type = OPEN_WITNESS;
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

//link section
export const INIT_LINK = "[Shore action] Init Link";
export class InitLink implements Action {
  readonly type = INIT_LINK;
  constructor(public bale: ShoreBit) {}
}

export const OPEN_LINK = "[Shore action] Open Link";
export class OpenLink implements Action {
  readonly type = OPEN_LINK;
  constructor(public bale: ShoreBit) {}
}

export const CLOSE_LINK = "[Shore action] Close Link";
export class CloseLink implements Action {
  readonly type = CLOSE_LINK;
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

export const ERROR_LINK = "[Shore action] Error Link";
export class ErrorLink implements Action {
  readonly type = ERROR_LINK;
  constructor(public bale: ShoreBit) {}
}

export const REPLACE_DATA = "[Shore action] Replace Data";
export class ReplaceData implements Action {
  readonly type = REPLACE_DATA;
  constructor(public bale: ShoreBit) {}
}

export const REPLACE_WITNESS_DATA = "[Shore action] Replace Witness Data";
export class ReplaceWitnessData implements Action {
  readonly type = REPLACE_WITNESS_DATA;
  constructor(public bale: ShoreBit) {}
}

export const LIST_WITNESS_CONTENT = "[Shore action] List Witness Content";
export class ListWitnessContent implements Action {
  readonly type = LIST_WITNESS_CONTENT;
  constructor(public bale: ShoreBit) {}
}

//artefacte

export const INIT_ARTEFACTE = "[Artefacte action] Init Artefacte";
export class InitArtefacte implements Action {
  readonly type = INIT_ARTEFACTE;
  constructor(public bale: ShoreBit) {}
}

export const OPEN_ARTEFACTE = "[Artefacte action] Open Artefacte";
export class OpenArtefacte implements Action {
  readonly type = OPEN_ARTEFACTE;
  constructor(public bale: ShoreBit) {}
}

export const UPDATE_ARTEFACTE = "[Artefacte action] Update Artefacte";
export class UpdateArtefacte implements Action {
  readonly type = UPDATE_ARTEFACTE;
  constructor(public bale: ShoreBit) {}
}

export const RESIZE_ARTEFACTE = "[Artefacte action] Resize Artefacte";
export class ResizeArtefacte implements Action {
  readonly type = RESIZE_ARTEFACTE;
  constructor(public bale: ShoreBit) {}
}

export const REPLACE_ARTEFACTE = "[Artefacte action] Replace Artefacte";
export class ReplaceArtefacte implements Action {
  readonly type = REPLACE_ARTEFACTE;
  constructor(public bale: ShoreBit) {}
}

export const CLOSE_ARTEFACTE = "[Artefacte action] Close Artefacte";
export class CloseArtefacte implements Action {
  readonly type = CLOSE_ARTEFACTE;
  constructor(public bale: ShoreBit) {}
}

export type Actions =
  | ReadArte
  | InitShore
  | OpenShore
  | UpdateShore
  | ResizeShore
  | InitWitness
  | OpenWitness
  | UpdateWitness
  | ResizeWitness
  | ReplaceWitnessData
  | InitLink
  | OpenLink
  | UpdateLink
  | ResizeLink
  | ReplaceData
  | ListWitnessContent
  | CloseLink
  | ErrorLink
  //artefacte
  | InitArtefacte
  | OpenArtefacte
  | UpdateArtefacte
  | ResizeArtefacte
  | ReplaceArtefacte
  | CloseArtefacte;
