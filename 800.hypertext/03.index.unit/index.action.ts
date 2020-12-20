import { Action } from "../00.core/interface/action.interface";
import  IndexBit  from "./fce/index.bit";

// Index actions

export const INIT_INDEX = "[Index action] Init Index";
export class InitIndex implements Action {
 readonly type = INIT_INDEX;
 constructor(public bale: IndexBit) {}
}

export const UPDATE_INDEX = "[Index action] Update Index";
export class UpdateIndex implements Action {
 readonly type = UPDATE_INDEX;
 constructor(public bale: IndexBit) {}
}

export type Actions = | InitIndex | UpdateIndex ;
