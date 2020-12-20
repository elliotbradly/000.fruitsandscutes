import { ViewModel } from "../view.model";
import View from "../fce/view.interface";
import State from "../../00.core/state";
import ViewBit from "../fce/view.bit";
import { SurfaceModel } from "../../09.surface.unit/surface.model";
import * as GSAP from "gsap";
import * as ActT from "../../07.text.unit/text.action";
import * as ActC from "../../08.container.unit/container.action";
import * as ActS from "../../09.surface.unit/surface.action";
import * as ActV from "../../01.view.unit/view.action";

import TextBit from "../../07.text.unit/fce/text.bit.interface";
import ContainerBit from "../../08.container.unit/fce/container.bit.interface";
import SurfaceBit from "../../09.surface.unit/fce/surface.bit.interface";

var verseListen;

export const showFace = (cpy: ViewModel, bal: View, ste: State) => {
  var sMod: SurfaceModel = ste.value.surface;
  if (sMod.surfaceBitList.length == 0) {
    ste.dispatch({ type: ActS.SURFACE_CREATE });

    window.addEventListener("resize", (e) =>
      ste.dispatch({ type: ActS.RESIZE_SURFACE })
    );

    setTimeout(() => ste.dispatch({ type: ActV.HIDE_FACE }), 3333);
    setTimeout(() => ste.dispatch({ type: ActV.SHOW_FACE }), 13333);

    ste.dispatch({ type: ActV.CLOSE_SCROLLBAR });

    return cpy;
  }

  var bit: SurfaceBit = sMod.surfaceBitList[0];
  if (bit == null) return;

  var canvas = sMod.canvasList[0];
  if (canvas == null) return;

  var parent = bit.parent;
  if (parent == null) return;

  parent.appendChild(canvas);

  ste.dispatch({ type: ActV.CLOSE_SCROLLBAR });

  return cpy;
};

export const hideFace = (cpy: ViewModel, bal: View, ste: State) => {
  var sMod: SurfaceModel = ste.value.surface;
  if (sMod.surfaceBitList.length == 0) return;

  var bit: SurfaceBit = sMod.surfaceBitList[0];
  if (bit == null) return;

  var canvas = sMod.canvasList[0];
  if (canvas == null) return;

  var parent = bit.parent;
  if (parent == null) return;

  parent.removeChild(canvas);

  ste.dispatch({ type: ActV.OPEN_SCROLLBAR });

  //var bit:SurfaceBit =

  //cpy.canvases[bale.idx] = cpy.canvasList.length;
  //cpy.canvasList.push(surface);

  return cpy;
};

export const writeView = (cpy: ViewModel, bal: View, ste: State) => {
  var canBit: ContainerBit = { src: "surface", idx: "000" };

  document.getElementById("body").addEventListener("mouseup", () => {
    console.log("action");

    //sim.lore.bee.hike("forge/index", B.UPDATE, { clr: "00FFFF" });
  });

  //nned a new kind of bit
  if (cpy.lore != null && verseListen == null) {
    verseListen = cpy.lore.bee.hark("forge.verse", (val) => {
      console.log("hot tub time machine once again" + val);
    });
  }

  var want = cpy.lore;

  var txtBit: TextBit = {
    idx: "000",
    can: "000",
    src: cpy.title,
  };

  //ste.dispatch({ type: ActC.CREATE_CONTAINER, bale: canBit });

  ste.dispatch({ type: ActC.CREATE_CONTAINER, bale: canBit });
  ste.dispatch({ type: ActT.CREATE_TEXT, bale: txtBit });

  return cpy;
};

export const updateBackground = (cpy: ViewModel, bal: ViewBit) => {
  if (bal.clr == null) return console.error("no color " + bal.clr);

  var element = document.getElementById("body");

  window.requestAnimationFrame(() => {
    GSAP.gsap.to(element, {
      duration: 2,
      css: { backgroundColor: "#" + bal.clr },
    });
  });

  return cpy;
};

export const closeScollBar = (cpy: ViewModel) => {
  var sheet: any = window.document.styleSheets[0];
  sheet.insertRule("body {overflow: hidden;}", sheet.cssRules.length);
  return cpy;
};

export const openScollBar = (cpy: ViewModel) => {
  var sheet: any = window.document.styleSheets[0];
  sheet.insertRule("body {overflow: visible;}", sheet.cssRules.length);
  return cpy;
};

export const addLore = (cpy: ViewModel, bal: any, ste: State) => {
  cpy.lore = bal;
  console.log("adding lore " + cpy.lore);

  return cpy;
};

export const createRender = (cpy: ViewModel, bal: ViewBit, ste: State) => {
  if (bal.fce == null) bal.fce = "surface";
  if (bal.idx == null) bal.idx = "000";
  if (bal.src == null) bal.idx = "content";

  console.log("create render ");

  var sMod: SurfaceModel = ste.value.surface;
  var surface: any = sMod.canvasList[sMod.canvases[bal.fce]];

  var image = new Image();
  image.id = bal.idx;
  image.src = surface.toDataURL();
  //image.classList.add("img-responsive");

  var source = document.getElementById(bal.src);

  source.appendChild(image);

  return cpy;
};
