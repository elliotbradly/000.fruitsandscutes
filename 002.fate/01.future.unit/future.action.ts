import { Action } from "../00.core/interface/action.interface";
import  FutureBit  from "./fce/future.bit";

// Future actions

export const INIT_FUTURE = "[Future action] Init Future";
export class InitFuture implements Action {
 readonly type = INIT_FUTURE;
 constructor(public bale: FutureBit) {}
}

export const UPDATE_FUTURE = "[Future action] Update Future";
export class UpdateFuture implements Action {
 readonly type = UPDATE_FUTURE;
 constructor(public bale: FutureBit) {}
}

export type Actions = | InitFuture | UpdateFuture ;
