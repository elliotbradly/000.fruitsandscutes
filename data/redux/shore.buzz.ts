var contentIDX = "pge0";

export const InitArtefacte = (cpy: ShoreModel, bal:ShoreBit, ste: State) => {
 debugger
 return cpy;
 };
 
export const OpenArtefacte = (cpy: ShoreModel, bal:ShoreBit, ste: State) => {
 debugger
 return cpy;
 };
 
export const UpdateArtefacte = (cpy: ShoreModel, bal:ShoreBit, ste: State) => {
 debugger
 return cpy;
 };
 
export const ResizeArtefacte = (cpy: ShoreModel, bal:ShoreBit, ste: State) => {
 debugger
 return cpy;
 };
 
export const ReplaceArtefacte = (cpy: ShoreModel, bal:ShoreBit, ste: State) => {
 debugger
 return cpy;
 };
 
export const CloseArtefacte = (cpy: ShoreModel, bal:ShoreBit, ste: State) => {
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

import * as Act from "../Shore.action";
import * as Hke from "../Shore.hike";

import { artefacteModel } from "../Shore.model";
import artefacteBit from "../fce/shore.bit";
import State from "../../00.core/state";

import * as ActTtl from "../../00.core/title/title.action";
import * as HkeTtl from "../../00.core/title/title.hike";



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
},
,
 | InitArtefacte
 | OpenArtefacte
 | UpdateArtefacte
 | ResizeArtefacte
 | ReplaceArtefacte
 | CloseArtefacte,
,
,export { InitArtefacte  } from "./buz/artefacte.buzz";
export { OpenArtefacte  } from "./buz/artefacte.buzz";
export { UpdateArtefacte  } from "./buz/artefacte.buzz";
export { ResizeArtefacte  } from "./buz/artefacte.buzz";
export { ReplaceArtefacte  } from "./buz/artefacte.buzz";
export { CloseArtefacte  } from "./buz/artefacte.buzz";,
,
 case Act.INIT_ARTEFACTE:
 return Buzz.InitArtefacte(clone(model), act.bale, state);
 

 case Act.OPEN_ARTEFACTE:
 return Buzz.OpenArtefacte(clone(model), act.bale, state);
 

 case Act.UPDATE_ARTEFACTE:
 return Buzz.UpdateArtefacte(clone(model), act.bale, state);
 

 case Act.RESIZE_ARTEFACTE:
 return Buzz.ResizeArtefacte(clone(model), act.bale, state);
 

 case Act.REPLACE_ARTEFACTE:
 return Buzz.ReplaceArtefacte(clone(model), act.bale, state);
 

 case Act.CLOSE_ARTEFACTE:
 return Buzz.CloseArtefacte(clone(model), act.bale, state);
 