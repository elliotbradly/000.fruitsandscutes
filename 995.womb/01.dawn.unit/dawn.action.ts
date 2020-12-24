import { Action } from "../00.core/interface/action.interface";
import  DawnBit  from "./fce/dawn.bit";

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

export type Actions = | InitDawn | UpdateDawn ;
