var pageIDX = "pge0";
var arteDropIDX = "arteDrop";
var linkAbled = "btn btn-block btn-lg";
var linkDisabled = "btn btn-block btn-lg disabled";
var linkDisplay = "linkBtnDisplay";
var nameInput = "input-example-1";
var linkBtnIDX = "linkBtn";
var radioBtnIdx = "rdi";
var contentIDX = "witnessContent";

export const initLink = (cpy: ShoreModel, bal: ShoreBit, ste: State) => {
  return cpy;
};

export const openLink = (cpy: ShoreModel, bal: ShoreBit, ste: State) => {
  var list = ste.value.dawn.arteList;
  var line = [];

  //creates radio buttons
  list.forEach((a, b) => {
    pivot(ste, PVT.HYP, HkeScn.INDEX, B.PUSH, {
      src: HTML.contentRadio,
      dat: { radioLabel: a, radioIDX: radioBtnIdx + b },
    });

    var item = query(ste, PVT.HYP, HrkScn.COMPILE);
    line.push(item);
  });

  //adds radio buttons
  pivot(ste, PVT.HYP, HkeScn.INDEX, B.PUSH, {
    src: HTML.linkPage,
    idx: pageIDX,
    dat: { radioList: line.join("\n"), linkClass: linkDisabled },
  });

  //create drop area
  pivot(ste, PVT.HYP, HkeScn.HANDLE, B.CREATE, { idx: arteDropIDX });
  patch(ste, Act.UPDATE_LINK, { val: 0 });
};

export const updateLink = (cpy: ShoreModel, bal: ShoreBit, ste: State) => {
  switch (bal.val) {
    case 0:
      //disables link btn
      pivot(ste, PVT.HYP, HkeScn.INDEX, B.PUSH, {
        idx: linkDisplay,
        src: HTML.linkButton,
        dat: { btnIDX: linkBtnIDX, linkClass: linkDisabled },
      });

      var dex = ste.value.dawn.fileDex;
      document.getElementById(nameInput)["value"] = "";

      document.getElementById(radioBtnIdx + dex)["checked"] = false;

      break;

    case 1:
      pivot(ste, PVT.HYP, HkeScn.INDEX, B.PUSH, {
        idx: linkDisplay,
        src: HTML.linkButton,
        dat: { btnIDX: linkBtnIDX, linkClass: linkAbled },
      });

      var name = ste.value.dawn.fileName;
      var dex = ste.value.dawn.fileDex;

      document.getElementById(nameInput)["value"] = name;

      document.getElementById(radioBtnIdx + dex)["checked"] = true;
      document.getElementById(radioBtnIdx + dex).focus();

      //now activate the link button
      pivot(ste, PVT.HYP, HkeScn.HANDLE, B.MAKE, {
        idx: linkBtnIDX,
        lst: [
          { pvt: PVT.WMB, hke: Hke.LINK, mth: B.REPLACE },
          { pvt: PVT.WMB, hke: HkeDwn.INDEX, mth: B.CREATE },
        ],
      });

      break;
  }

  return cpy;
};

export const closeLink = (cpy: ShoreModel, bal: ShoreBit, ste: State) => {};

export const resizeLink = (cpy: ShoreModel, bal: ShoreBit, ste: State) => {
  return cpy;
};

export const replaceData = (cpy: ShoreModel, bal: ShoreBit, ste: State) => {
  var name = document.getElementById(nameInput)["value"];

  var list = ste.value.dawn.arteList;
  var line = [];

  var dex = 0;

  //creates radio buttons
  list.forEach((a, b) => {
    var id = radioBtnIdx + b;
    if (document.getElementById(id)["checked"] == true) dex = b;
  });

  patch(ste, ActDwn.REPLACE_DATA, { src: name, val: dex });

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

import * as ActDwn from "../../01.dawn.unit/dawn.action";
import * as HkeDwn from "../../01.dawn.unit/dawn.hike";
import * as HrkDwn from "../../01.dawn.unit/dawn.hark";

import * as HkeSfc from "../../hke/surface.hike";
import * as HrkSfc from "../../hrk/surface.hark";

import * as HkeScn from "../../hke/screen.hike";
import * as HrkScn from "../../hrk/screen.hark";

import { ShoreModel } from "../shore.model";
import ShoreBit from "../fce/shore.bit";
import State from "../../00.core/state";

import * as ActTtl from "../../00.core/title/title.action";
import * as HkeTtl from "../../00.core/title/title.hike";
