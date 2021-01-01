var contentIDX = "pge0";
var surfaceIDX = "fceHex000";
var height = 800;

export const initArtefacte = (cpy: ShoreModel, bal: ShoreBit, ste: State) => {
  debugger;
  return cpy;
};

export const openArtefacte = (cpy: ShoreModel, bal: ShoreBit, ste: State) => {
  patch(ste, Act.UPDATE_ARTEFACTE, bal);

  return cpy;
};

export const updateArtefacte = (cpy: ShoreModel, bal: ShoreBit, ste: State) => {
  if (bal.val == null) bal.val = 0;

  switch (bal.val) {
    case 1:
      pivot(ste, PVT.HYP, HkeScn.INDEX, B.PUSH, {
        src: HTML.hexProcess,
        idx: contentIDX,
      });

      pivot(ste, PVT.CVS, HkeSfc.INDEX, B.CREATE, {
        idx: surfaceIDX,
        clr: "FFFF00",
        fit: true,
        height: height,
      });

      break;

    case 1:
      break;
  }

  return cpy;
};

export const resizeArtefacte = (cpy: ShoreModel, bal: ShoreBit, ste: State) => {
  pivot(ste, PVT.CVS, HkeSfc.INDEX, B.RESIZE, {
    idx: surfaceIDX,
    fit: true,
    height: height,
  });

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

import * as HkeScn from "../../hke/screen.hike";
import * as HrkScn from "../../hrk/screen.hark";

import * as ActTtl from "../../00.core/title/title.action";
import * as HkeTtl from "../../00.core/title/title.hike";

import * as HkeSfc from "../../hke/surface.hike";
import * as HrkSfc from "../../hrk/surface.hark";
