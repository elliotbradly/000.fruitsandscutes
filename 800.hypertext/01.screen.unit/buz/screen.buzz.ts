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
  if (content == null) return;
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

  return cpy;
};

export const makeNav = (cpy: ScreenModel, bal: NavBit, ste: State) => {
  ste.dispatch({ type: Act.UPDATE_HTML, bale: { idx: bal.idx, src: "" } });

  //i think we need to bring the template in here
  if (bal.src == null) console.error("no nav source");

  bal.shw = navUnactive;
  bal.hde = navActive;

  var output = [];

  if (bal.btn == null) return console.warn("no btn for nav bar");

  bal.lst.forEach((a, b) => {
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
    document.getElementById(btnIDX).addEventListener("mouseup", () => {
      debugger;

      if (bal.mod == null) return console.warn("no model on nav");
      if (bal.mod["navDex"] != null) bal.mod["navDex"] = b;
      ste.dispatch({ type: bal.act });
    });
  });

  return cpy;
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

import * as doT from "dot";

var navActiveLarge: string = "btn  active btn-lg bg-success bubbly-button ";
var navUnactiveLarge: string = "btn  btn-lg bg-error";

var navActive: string = "btn  active bg-success";
var navUnactive: string = "btn bg-error";

var navActiveSmall: string = "btn active btn-sm";
var navUnactiveSmall: string = "btn btn-sm";
