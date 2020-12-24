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

export type Actions = InitDawn | UpdateDawn | ExtractFileData | CreateArtLink;
