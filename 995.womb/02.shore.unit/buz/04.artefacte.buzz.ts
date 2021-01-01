var contentIDX = "artefactePage";

export const initArtefacte = (cpy: ShoreModel, bal: ShoreBit, ste: State) => {
  debugger;
  return cpy;
};

export const openArtefacte = (cpy: ShoreModel, bal: ShoreBit, ste: State) => {
  debugger;
  return cpy;
};

export const updateArtefacte = (cpy: ShoreModel, bal: ShoreBit, ste: State) => {
  debugger;
  return cpy;
};

export const resizeArtefacte = (cpy: ShoreModel, bal: ShoreBit, ste: State) => {
  debugger;
  return cpy;
};

export const replaceArtefacte = (
  cpy: ShoreModel,
  bal: ShoreBit,
  ste: State
) => {
  debugger;
  return cpy;
};

export const closeArtefacte = (cpy: ShoreModel, bal: ShoreBit, ste: State) => {
  debugger;
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

import { ShoreModel } from "../shore.model";
import ShoreBit from "../fce/shore.bit";
import State from "../../00.core/state";

import * as ActTtl from "../../00.core/title/title.action";
import * as HkeTtl from "../../00.core/title/title.hike";

///code below here

//artefacte
