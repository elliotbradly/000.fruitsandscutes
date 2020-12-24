var pageIDX = "pge0";
var arteDropIDX = "arteDrop";

export const initLink = (cpy: ShoreModel, bal: ShoreBit, ste: State) => {
  var list = ["writing", "unreal level", "image", "character model"];
  var line = [];

  list.forEach((a) => {
    pivot(ste, PVT.HYP, HkeScn.INDEX, B.PUSH, {
      src: HTML.contentRadio,
      dat: { radioLabel: a },
    });

    var item = query(ste, PVT.HYP, HrkScn.COMPILE);
    line.push(item);
  });

  pivot(ste, PVT.HYP, HkeScn.INDEX, B.PUSH, {
    src: HTML.linkPage,
    dat: { radioList: line.join("\n") },
  });

  pivot(ste, PVT.HYP, HkeScn.INDEX, B.UPDATE, { idx: pageIDX });

  pivot(ste, PVT.HYP, HkeScn.HANDLE, B.CREATE, { idx: arteDropIDX });

  return cpy;
};

export const updateLink = (cpy: ShoreModel, bal: ShoreBit, ste: State) => {
  return cpy;
};

export const resizeLink = (cpy: ShoreModel, bal: ShoreBit, ste: State) => {
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

import * as Act from "../shore.action";
import * as Hke from "../shore.hike";

import * as HkeSfc from "../../hke/surface.hike";
import * as HrkSfc from "../../hrk/surface.hark";

import * as HkeScn from "../../hke/screen.hike";
import * as HrkScn from "../../hrk/screen.hark";

import { ShoreModel } from "../shore.model";
import ShoreBit from "../fce/shore.bit";
import State from "../../00.core/state";

import * as ActTtl from "../../00.core/title/title.action";
import * as HkeTtl from "../../00.core/title/title.hike";
