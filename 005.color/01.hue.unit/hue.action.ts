import { Action } from "../00.core/interface/action.interface";
import  HueBit  from "./fce/hue.bit";

// Hue actions

export const INIT_HUE = "[Hue action] Init Hue";
export class InitHue implements Action {
 readonly type = INIT_HUE;
 constructor(public bale: HueBit) {}
}

export const UPDATE_HUE = "[Hue action] Update Hue";
export class UpdateHue implements Action {
 readonly type = UPDATE_HUE;
 constructor(public bale: HueBit) {}
}

export type Actions = | InitHue | UpdateHue ;
