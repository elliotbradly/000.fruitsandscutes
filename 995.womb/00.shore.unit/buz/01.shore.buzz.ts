var showBtn = "btn active bg-success";
var hideBtn = "btn bg-error";
var navLst = ["see", "add"];
var navIDX = "nav0";
var pageIDX = "pge0";

export const initShore = (cpy: ShoreModel, bal: ShoreBit, ste: State) => {
  //give the hypertext your womb pivot

  pivot(ste, PVT.HYP, HkeScn.INDEX, B.PUSH, {
    src: HTML.startUp,
    dat: { navIDX, pageIDX },
  });

  pivot(ste, PVT.HYP, HkeScn.INDEX, B.UPDATE, { idx: "body" });
  pivot(ste, PVT.CVS, HkeSfc.INDEX, B.CREATE, { idx: "fce00", clr: "FF00FF" });

  pivot(ste, PVT.HYP, HkeScn.INDEX, B.MAKE, {
    idx: navIDX,
    val: 0,
    dex: 0,
    src: HTML.navBar,
    btn: HTML.navBtn0,
    lst: navLst,
    mod: cpy,
    shw: showBtn,
    hde: hideBtn,
    pvt: cpy.pivot,
    act: Hke.INDEX,
    mth: B.UPDATE,
  });

  patch(ste, Act.UPDATE_SHORE, null);

  return cpy;
};

export const updateShore = (cpy: ShoreModel, bal: ShoreBit, ste: State) => {
  if (bal != null) cpy.navDex = Number(bal.val);

  pivot(ste, PVT.HYP, HkeScn.INDEX, B.MAKE, {
    idx: navIDX,
    dex: cpy.navDex,
    src: HTML.navBar,
    btn: HTML.navBtn0,
    lst: navLst,
    mod: cpy,
    shw: showBtn,
    hde: hideBtn,
    pvt: cpy.pivot,
    act: Hke.INDEX,
    mth: B.UPDATE,
  });

  switch (cpy.navDex) {
    case 0:
      patch(ste, Act.INIT_WITNESS, null);
      break;

    case 1:
      patch(ste, Act.INIT_LINK, null);
      break;
  }

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
