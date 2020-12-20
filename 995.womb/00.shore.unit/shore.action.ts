import { Action } from "../00.core/interface/action.interface";
import  ShoreBit  from "./fce/shore.bit";

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

export type Actions = | InitShore | UpdateShore ;
