var pageIDX = "pge0";
var showBtn = "btn btn-sm active bg-success";
var hideBtn = "btn btn-sm bg-error";
var navIDX = "witnessNav";
var navLst = [];
var contentIDX = "witnessContent";
var witnessBtn = "wit";

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

export const readArte = (cpy: ShoreModel, bal: ShoreBit, ste: State) => {
  var val = Number(bal.val);

  var item = cpy.witnessList[val];

  //now open

  debugger;
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

  patch(ste, Act.UPDATE_WITNESS, { val: 0 });

  return cpy;
};

export const updateWitness = (cpy: ShoreModel, bal: ShoreBit, ste: State) => {
  cpy.witnessDex = bal.val;

  patch(ste, Act.LIST_WITNESS_CONTENT, null);

  pivot(ste, PVT.HYP, HkeScn.INDEX, B.MAKE, {
    idx: navIDX,
    nom: "witnessNavBtn",
    val: cpy.witnessDex,
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

  var there = [];
  cpy.witnessList.forEach((a, b) => {
    var btnIDX = witnessBtn + b;
    var label = a.val;
    var classIDX = "btn btn-block";
    var clr = "FF00FF";

    pivot(ste, PVT.HYP, HkeScn.INDEX, B.PUSH, {
      src: HTML.clrBtn00,
      dat: { btnIDX, label, classIDX, clr },
    });

    var ele = query(ste, PVT.HYP, HrkScn.COMPILE);
    there.push(ele);
  });

  pivot(ste, PVT.HYP, HkeScn.INDEX, B.UPDATE, {
    idx: contentIDX,
    src: there.join("\n"),
  });

  cpy.witnessList.forEach((a, b) => {
    var btnIDX = witnessBtn + b;

    pivot(ste, PVT.HYP, HkeScn.HANDLE, B.MAKE, {
      idx: btnIDX,
      lst: [{ pvt: PVT.WMB, hke: Hke.WITNESS, mth: B.READ, dat: { val: b } }],
    });
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
  var lst = [];
  for (var key in cpy.arteData) {
    var itm = cpy.arteData[key];
    itm.forEach((a) => {
      lst.push({ idx: key, val: a });
    });
  }

  var actionDex = cpy.witnessDex - 1;
  if (actionDex != -1) {
    lst = lst.filter((val) => {
      var itm = val.idx;
      var dex = Number(itm.split(".")[0]);
      if (dex == actionDex) return true;
    });
  }

  cpy.witnessList = lst;

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
