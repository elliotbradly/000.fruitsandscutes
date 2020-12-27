var pageIDX = "pge0";
var showBtn = "btn btn-sm active bg-success";
var hideBtn = "btn btn-sm bg-error";
var navIDX = "witnessNav";
var navLst = [];
var contentIDX = "witnessContent";

var dataSrc = "./dat/arte.txt";

export const initWitness = (cpy: ShoreModel, bal: ShoreBit, ste: State) => {
  // patch(ste, Act.OPEN_WITNESS, null);

  ste.value.dawn.arteList.forEach((a, b) => {
    var idx = String(b).padStart(3, "0") + "." + a;
    navLst.push(idx);
  });

  navLst.unshift("all");

  ste.value.dawn.arteList;
  return cpy;
};

export const openWitness = (cpy: ShoreModel, bal: ShoreBit, ste: State) => {
  pivot(ste, PVT.HYP, HkeScn.INDEX, B.LOAD, {
    src: dataSrc,
    dat: { pvt: PVT.WMB, hke: Hke.WITNESS, mth: B.REPLACE },
  });

  pivot(ste, PVT.HYP, HkeScn.INDEX, B.PUSH, {
    idx: pageIDX,
    src: HTML.witnessPage,
    dat: { navIDX, contentIDX },
  });

  pivot(ste, PVT.HYP, HkeScn.INDEX, B.MAKE, {
    idx: navIDX,
    nom: "witnessNavBtn",
    val: 0,
    dex: 0,
    src: HTML.navBar,
    btn: HTML.navBtn0,
    lst: navLst,
    mod: cpy,
    shw: showBtn,
    hde: hideBtn,
    pvt: cpy.pivot,
    act: Hke.WITNESS,
    mth: B.UPDATE,
  });

  // pivot(ste, PVT.HYP, HkeScn.INDEX, B.UPDATE, { idx: pageIDX });

  return cpy;
};

export const updateWitness = (cpy: ShoreModel, bal: ShoreBit, ste: State) => {
  pivot(ste, PVT.HYP, HkeScn.INDEX, B.MAKE, {
    idx: navIDX,
    nom: "witnessNavBtn",
    val: 0,
    dex: bal.val,
    src: HTML.navBar,
    btn: HTML.navBtn0,
    lst: navLst,
    mod: cpy,
    shw: showBtn,
    hde: hideBtn,
    pvt: cpy.pivot,
    act: Hke.WITNESS,
    mth: B.UPDATE,
  });

  return cpy;
};

export const replaceWitnessData = (
  cpy: ShoreModel,
  bal: ShoreBit,
  ste: State
) => {
  cpy.arteData = bal.dat;

  patch(ste, Act.LIST_WITNESS_CONTENT, null);
  return cpy;
};

export const listWitnessContent = (
  cpy: ShoreModel,
  bal: ShoreBit,
  ste: State
) => {
  debugger;
  return cpy;
};

export const resizeWitness = (cpy: ShoreModel, bal: ShoreBit, ste: State) => {
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
