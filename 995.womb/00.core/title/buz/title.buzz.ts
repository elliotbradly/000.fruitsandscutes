export const updatePath = (cpy: TitleModel, bale: Link) => {
  cpy.path = bale;
  return cpy;
};

export const extractData = (cpy: TitleModel, bale: PivotBit, ste: State) => {
  var lst = bale.src.split("\n");

  var check = {};
  lst.forEach((a) => {
    if (a.includes("//") == true) return;

    var sub = a.split(":")[0];
    var dom = a.split(":")[1];

    if (sub == null)
      return console.warn("no sub for " + JSON.stringify(bale.dat));
    if (dom == null)
      return console.warn("no dom for " + JSON.stringify(bale.dat));

    var domList = dom.split(",");

    var dotLst = sub.split(".");
    var out = [];
    dotLst.forEach((c) => {
      out.push(S(c).slugify().s);
    });

    if (out.length >= 2) sub = out.join(".");
    else sub = S(sub).slugify().s;

    if (check[sub] == null) check[sub] = [];

    domList.forEach((a) => {
      check[sub].push(a);
    });
  });

  if (bale.dat != null)
    pivot(ste, bale.dat.pvt, bale.dat.hke, bale.dat.mth, { dat: check });

  return cpy;
};

export const pushPivot = (cpy: TitleModel, bal: Pivot, ste: State) => {
  if (bal.idx == null) return console.error("no pivot idx for " + bal.idx);
  if (bal.idx == "path") return console.error("path already here for idx");
  if (bal.datIDX.bee == null)
    return console.error("no idx bee idx for " + bal.idx);
  cpy[bal.idx] = bal.datIDX.bee;
  console.log("pivot " + bal.idx + " addded");

  if (bal.src == "path") return console.error("path already here for src");
  if (bal.src == null) return;
  if (bal.datSRC.bee == null)
    return console.error("no src bee idx for " + bal.idx);

  bal.datIDX.bee.value.title[bal.src] = bal.datSRC.bee;
  console.log("pivot " + bal.src + " addded");

  return cpy;
};

export const pullPivot = (cpy: TitleModel, bal: PivotBit, ste: State) => {
  if (cpy[bal.pvt] == null) return console.error(bal.pvt + "no exist");
  cpy[bal.pvt].hike(bal.hke, bal.mth, bal.dat);
  return cpy;
};

var patch = (ste, type, bale) => ste.dispatch({ type, bale });

var pivot = (ste, pvt, hke, mth, dat?) => {
  ste.dispatch({
    type: Act.PULL_PIVOT,
    bale: {
      pvt,
      hke,
      mth,
      dat,
    },
  });
};

import * as Act from "../title.action";

import { TitleModel } from "../title.model";
import Link from "../../interface/link.interface";
import Pivot from "../../interface/pivot.interface";
import State from "../../state";
import PivotBit from "../../interface/pivot-bit.interface";

import * as S from "string";
