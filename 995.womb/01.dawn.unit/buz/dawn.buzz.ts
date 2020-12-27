var sourceEnd = "./index/dat/arte.txt";

export const initDawn = (cpy: DawnModel, bal: DawnBit, ste: State) => {
  //attach yourself to the file

  hark(ste, PVT.HYP, HrkScn.DRAGFILE, (val) => {
    if (val != null) patch(ste, Act.EXTRACT_FILE_DATA, val);
  });

  for (var key in ARTE) {
    cpy.arteList.push(ARTE[key].nom);
    var dir = String(ARTE[key].idx).padStart(2, "0") + "." + ARTE[key].nom;
    FS.ensureDirSync(cpy.arteSrc + dir);
  }

  return cpy;
};

export const createArteLink = (cpy: DawnModel, bal: DawnBit, ste: State) => {
  //where do we put it
  var lst = FS.readdirSync(cpy.arteSrc);
  var dir = lst[cpy.fileDex];
  lst = FS.readdirSync(cpy.arteSrc + dir);
  var dex = String(lst.length).padStart(3, "0");
  var fin =
    cpy.arteSrc + dir + "/" + dex + "." + cpy.fileName + "." + cpy.fileEnd;

  FS.copySync(cpy.file.path, fin);

  // now let update the context text file

  var output = [];

  for (var key in ARTE) {
    var dir = String(ARTE[key].idx).padStart(2, "0") + "." + ARTE[key].nom;
    var lst = FS.readdirSync(cpy.arteSrc + dir);
    lst.forEach((a) => {
      var line = dir + " : " + a;
      output.push(line);
    });
  }

  FS.ensureFileSync(sourceEnd);
  FS.writeFileSync(sourceEnd, output.join("\n"));
  console.log("writing " + sourceEnd);

  patch(ste, ActShr.UPDATE_LINK, { val: 0 });

  return cpy;
};

export const extractFileData = (cpy: DawnModel, bal: FileBit, ste: State) => {
  var name = bal.name;

  var list = name.split(".");
  var nom = list[list.length - 1];
  cpy.fileEnd = nom;
  var bit;

  var good = false;
  for (var key in FILE_TYPE) {
    var type = FILE_TYPE[key];
    if (nom == type.idx) {
      good = true;
      bit = type;
    }
  }

  if (good == false) return console.log("not what we need");

  list.pop();
  cpy.fileName = S(list.join(".")).slugify().s;
  cpy.fileDex = bit.typ.idx;
  cpy.file = bal;

  patch(ste, ActShr.UPDATE_LINK, { val: 1 });

  return cpy;
};

export const updateDawn = (cpy: DawnModel, bal: DawnBit, ste: State) => {
  return cpy;
};

export const replaceData = (cpy: DawnModel, bal: DawnBit, ste: State) => {
  cpy.fileName = S(bal.src).slugify().s;
  cpy.fileDex = bal.val;
  return cpy;
};

var dragFile = (val: FileBit) => {
  if (val == null) return;
  console.log("thing " + JSON.stringify(val));
};

var query = (ste, pvt, hrk) => {
  var val = ste.value.title[pvt].query(hrk);
  if (val == null) return console.error("no val for " + pvt + " : " + hrk);
  return val;
};

var hark = (ste, pvt, hrk, rsp) => ste.value.title[pvt].hark(hrk, rsp);

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
import * as ARTE from "../../val/arte-type";

import * as Act from "../dawn.action";

import * as FILE_TYPE from "../../val/file-type";

import * as ActShr from "../../02.shore.unit/shore.action";

import * as HkeScn from "../../hke/screen.hike";
import * as HrkScn from "../../hrk/screen.hark";

import { DawnModel } from "../dawn.model";
import DawnBit from "../fce/dawn.bit";
import State from "../../00.core/state";
import * as ActTtl from "../../00.core/title/title.action";
import * as FS from "fs-extra";
import * as S from "string";
import FileBit from "../../fce/file.bit";
