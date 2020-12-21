export const initShore = (cpy: ShoreModel, bal: ShoreBit, ste: State) => {
  pivot(ste, PVT.HYP, HkeScn.INDEX, B.UPDATE, {
    idx: "body",
    src: HTML.startUp,
  });

  pivot(ste, PVT.CVS, HkeSfc.INDEX, B.CREATE, { idx: "fce00", clr: "FF00FF" });

  return cpy;
};

export const updateShore = (cpy: ShoreModel, bal: ShoreBit, ste: State) => {
  return cpy;
};

export const resizeShore = (cpy: ShoreModel, bal: ShoreBit, ste: State) => {
  pivot(ste, PVT.CVS, HkeSfc.INDEX, B.RESIZE, {
    idx: "fce00",
    height: 111,
    width: bal.x,
  });

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

import * as HkeSfc from "../../hke/surface.hike";
import * as HrkSfc from "../../hrk/surface.hark";

import * as HkeScn from "../../hke/screen.hike";
import * as HrkScn from "../../hrk/screen.hark";

import { ShoreModel } from "../shore.model";
import ShoreBit from "../fce/shore.bit";
import State from "../../00.core/state";
import * as ActTtl from "../../00.core/title/title.action";
