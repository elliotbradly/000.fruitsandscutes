var contentIDX = "geojsonPage";

export const initGeojson = (cpy: DawnModel, bal: DawnBit, ste: State) => {
  debugger;
  return cpy;
};

export const openGeojson = (cpy: DawnModel, bal: DawnBit, ste: State) => {
  debugger;
  return cpy;
};

export const updateGeojson = (cpy: DawnModel, bal: DawnBit, ste: State) => {
  debugger;
  return cpy;
};

export const resizeGeojson = (cpy: DawnModel, bal: DawnBit, ste: State) => {
  debugger;
  return cpy;
};

export const replaceGeojson = (cpy: DawnModel, bal: DawnBit, ste: State) => {
  return cpy;
};

export const closeGeojson = (cpy: DawnModel, bal: DawnBit, ste: State) => {
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

import * as Act from "../Dawn.action";
import * as Hke from "../Dawn.hike";

import { DawnModel } from "../dawn.model";
import DawnBit from "../fce/dawn.bit";
import State from "../../00.core/state";

import * as ActTtl from "../../00.core/title/title.action";
import * as HkeTtl from "../../00.core/title/title.hike";
