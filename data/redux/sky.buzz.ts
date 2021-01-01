var contentIDX = "pge0";

export const InitText = (cpy: SkyModel, bal:SkyBit, ste: State) => {
 debugger
 return cpy;
 };
 
export const OpenText = (cpy: SkyModel, bal:SkyBit, ste: State) => {
 debugger
 return cpy;
 };
 
export const UpdateText = (cpy: SkyModel, bal:SkyBit, ste: State) => {
 debugger
 return cpy;
 };
 
export const ResizeText = (cpy: SkyModel, bal:SkyBit, ste: State) => {
 debugger
 return cpy;
 };
 
export const ReplaceText = (cpy: SkyModel, bal:SkyBit, ste: State) => {
 debugger
 return cpy;
 };
 
export const CloseText = (cpy: SkyModel, bal:SkyBit, ste: State) => {
 debugger
 return cpy;
 };
 

var query = (ste, pvt, hrk) => {
 var val = ste.value.title[pvt].query(hrk);
 if (val == null) return console.error("no val for " + pvt + " : " + hrk);
 return val;
};

var patch = (ste, type, bale) => ste.dispatch({ type, bale });

var pivot = (ste, pvt, hke, mth, dat?) => {
 ste.dispatch({
 type: ActTtl.PULL_PIVOT,
 bale: {
 pvt,
 hke,
 mth,
 dat,
 },
 });
};

import * as B from "../../00.core/constant/BASIC";
import * as PVT from "../../val/pivot";
import * as HTML from "../../val/html";

import * as Act from "../Sky.action";
import * as Hke from "../Sky.hike";

import { SkyModel } from "../Sky.model";
import SkyBit from "../fce/shore.bit";
import State from "../../00.core/state";

import * as ActTtl from "../../00.core/title/title.action";
import * as HkeTtl from "../../00.core/title/title.hike";



export const INIT_TEXT = "[Text action] Init Text";
export class InitText implements Action {
 readonly type = INIT_TEXT;
 constructor(public bale: SkyBit) {}
}

export const OPEN_TEXT = "[Text action] Open Text";
export class OpenText implements Action {
 readonly type = OPEN_TEXT;
 constructor(public bale: SkyBit) {}
}

export const UPDATE_TEXT = "[Text action] Update Text";
export class UpdateText implements Action {
 readonly type = UPDATE_TEXT;
 constructor(public bale: SkyBit) {}
}

export const RESIZE_TEXT = "[Text action] Resize Text";
export class ResizeText implements Action {
 readonly type = RESIZE_TEXT;
 constructor(public bale: SkyBit) {}
}

export const REPLACE_TEXT = "[Text action] Replace Text";
export class ReplaceText implements Action {
 readonly type = REPLACE_TEXT;
 constructor(public bale: SkyBit) {}
}

export const CLOSE_TEXT = "[Text action] Close Text";
export class CloseText implements Action {
 readonly type = CLOSE_TEXT;
 constructor(public bale: SkyBit) {}
},
,
 | InitText
 | OpenText
 | UpdateText
 | ResizeText
 | ReplaceText
 | CloseText,
,
,export { InitText  } from "./buz/text.buzz";
export { OpenText  } from "./buz/text.buzz";
export { UpdateText  } from "./buz/text.buzz";
export { ResizeText  } from "./buz/text.buzz";
export { ReplaceText  } from "./buz/text.buzz";
export { CloseText  } from "./buz/text.buzz";,
,
 case Act.INIT_TEXT:
 return Buzz.InitText(clone(model), act.bale, state);
 

 case Act.OPEN_TEXT:
 return Buzz.OpenText(clone(model), act.bale, state);
 

 case Act.UPDATE_TEXT:
 return Buzz.UpdateText(clone(model), act.bale, state);
 

 case Act.RESIZE_TEXT:
 return Buzz.ResizeText(clone(model), act.bale, state);
 

 case Act.REPLACE_TEXT:
 return Buzz.ReplaceText(clone(model), act.bale, state);
 

 case Act.CLOSE_TEXT:
 return Buzz.CloseText(clone(model), act.bale, state);
 