export const loadText = (cpy: ScreenModel, bal: ScreenBit, ste: State) => {
  fetch(bal.src).then((rsp) => {
    rsp.text().then((txt) => {
      //cut up into pieces and then write
      patch(ste, ActTtl.EXTRACT_DATA, {
        src: txt,
        dat: bal.dat,
      });
    });
  });

  return cpy;
};

export const deleteHTML = (cpy: ScreenModel, bal: ScreenBit, ste: State) => {
  var old_element = document.getElementById(bal.idx);
  if (old_element == null) return cpy;
  var new_element = old_element.cloneNode(true);
  old_element.parentNode.replaceChild(new_element, old_element);
  return cpy;
};

//import * as ActV from "../../01.view.unit/view.action";
export const updateHTML = (cpy: ScreenModel, bal: ScreenBit, ste: State) => {
  var current = bal.src;

  if (current == null) current = cpy.compile;
  if (bal.val == null) bal.val = 0;
  var content = document.getElementById(bal.idx);
  if (content == null) return console.warn("no content for " + bal.idx);
  if (bal.val == 0) content.innerHTML = current;
  if (bal.val == 1) content.innerHTML += current;

  return cpy;
};

export const pushCompile = (cpy: ScreenModel, bal: ScreenBit, ste: State) => {
  var gel = bal.dat;
  if (bal.src == null) return console.warn("no source for compile push");

  var lst = bal.src.split("\n");

  var out = [];

  lst.forEach((a) => {
    if (a[0] == "/") return;
    var doTCompiled = doT.template(a);
    out.push(doTCompiled(gel));
  });

  cpy.compile = out.join("\n");

  bal.src = cpy.compile;

  if (bal.idx != null) patch(ste, Act.UPDATE_HTML, bal);

  return cpy;
};

export const makeNav = (cpy: ScreenModel, bal: NavBit, ste: State) => {
  ste.dispatch({ type: Act.UPDATE_HTML, bale: { idx: bal.idx, src: "" } });

  //i think we need to bring the template in here
  if (bal.src == null) console.error("no nav source");

  var output = [];

  if (bal.btn == null) return console.warn("no btn for nav bar");

  if (bal.lst == null) return console.error("no nav list");

  bal.lst.forEach((a, b) => {
    console.log("popping list " + a);

    var idx = bal.nom + String(a).padStart(3, "0");
    var classIDX;
    if (b == bal.dex) classIDX = bal.shw;
    else classIDX = bal.hde;

    ste.dispatch({
      type: Act.PUSH_COMP,
      bale: {
        src: bal.btn,
        dat: { btnIDX: idx, label: a, classIDX: classIDX },
      },
    });

    output.push(cpy.compile);
  });

  var fin = output.join("\n");

  ste.dispatch({
    type: Act.UPDATE_HTML,
    bale: { idx: bal.idx, src: fin },
  });

  bal.lst.forEach((a, b) => {
    var btnIDX = bal.nom + String(a).padStart(3, "0");
    var element = document.getElementById(btnIDX);

    if (element == null) return console.warn("no nav elment for " + btnIDX);

    element.addEventListener("mouseup", () => {
      if (bal.dat == null) bal.dat = {};
      if (bal.dat.val == null) bal.dat.val = 0;
      bal.dat.val = b;
      if (bal.mod == null) return console.warn("no model on nav");
      if (bal.mod["navDex"] != null) bal.mod["navDex"] = b;
      if (bal.pvt != null) {
        pivot(ste, bal.pvt, bal.act, bal.mth, bal.dat);
      } else if (bal.act != null) {
        ste.dispatch({ type: bal.act });
      }
    });
  });

  return cpy;
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

export const awakePivot = (cpy: ScreenModel, bal: PivotBit, ste: State) => {
  cpy.lore = bal.lore;
  cpy.show = bal.show;

  console.log("added lore: " + cpy.lore);
  console.log("added show: " + cpy.show);

  return cpy;
};

import { ScreenModel } from "../screen.model";
import Screen from "../fce/screen.interface";
import State from "../../00.core/state";
import ScreenBit from "../fce/screen.bit";
import PivotBit from "../fce/pivot.bit";
import NavBit from "../fce/nav.bit";
import * as Act from "../screen.action";

import * as ActTtl from "../../00.core/title/title.action";
import * as HkeTtl from "../../00.core/title/title.hike";

import * as doT from "dot";
