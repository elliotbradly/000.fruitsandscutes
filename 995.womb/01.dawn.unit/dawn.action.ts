import FileBit from "../fce/file.bit";
import { Action } from "../00.core/interface/action.interface";
import DawnBit from "./fce/dawn.bit";

// Dawn actions

export const INIT_DAWN = "[Dawn action] Init Dawn";
export class InitDawn implements Action {
  readonly type = INIT_DAWN;
  constructor(public bale: DawnBit) {}
}

export const UPDATE_DAWN = "[Dawn action] Update Dawn";
export class UpdateDawn implements Action {
  readonly type = UPDATE_DAWN;
  constructor(public bale: DawnBit) {}
}

export const CREATE_LINK = "[Dawn action] Create Art Link";
export class CreateArtLink implements Action {
  readonly type = CREATE_LINK;
  constructor(public bale: DawnBit) {}
}

export const EXTRACT_FILE_DATA = "[Dawn action] Extract File Data";
export class ExtractFileData implements Action {
  readonly type = EXTRACT_FILE_DATA;
  constructor(public bale: FileBit) {}
}

export const REPLACE_DATA = "[Dawn action] Replace Data";
export class ReplaceData implements Action {
  readonly type = REPLACE_DATA;
  constructor(public bale: DawnBit) {}
}

//geojson

export const INIT_GEOJSON = "[Geojson action] Init Geojson";
export class InitGeojson implements Action {
  readonly type = INIT_GEOJSON;
  constructor(public bale: DawnBit) {}
}

export const OPEN_GEOJSON = "[Geojson action] Open Geojson";
export class OpenGeojson implements Action {
  readonly type = OPEN_GEOJSON;
  constructor(public bale: DawnBit) {}
}

export const UPDATE_GEOJSON = "[Geojson action] Update Geojson";
export class UpdateGeojson implements Action {
  readonly type = UPDATE_GEOJSON;
  constructor(public bale: DawnBit) {}
}

export const RESIZE_GEOJSON = "[Geojson action] Resize Geojson";
export class ResizeGeojson implements Action {
  readonly type = RESIZE_GEOJSON;
  constructor(public bale: DawnBit) {}
}

export const REPLACE_GEOJSON = "[Geojson action] Replace Geojson";
export class ReplaceGeojson implements Action {
  readonly type = REPLACE_GEOJSON;
  constructor(public bale: DawnBit) {}
}

export const CLOSE_GEOJSON = "[Geojson action] Close Geojson";
export class CloseGeojson implements Action {
  readonly type = CLOSE_GEOJSON;
  constructor(public bale: DawnBit) {}
}

export type Actions =
  | InitDawn
  | UpdateDawn
  | ExtractFileData
  | CreateArtLink
  | ReplaceData

  //geojson
  | InitGeojson
  | OpenGeojson
  | UpdateGeojson
  | ResizeGeojson
  | ReplaceGeojson
  | CloseGeojson;
