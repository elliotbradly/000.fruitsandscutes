import { SurfaceModel } from "../surface.model";
import Surface from "../fce/surface.interface";
import SurfaceBit from "../fce/surface.bit.interface";
import * as PIXI from "pixi.js";
import SurfaceResizeBit from "../fce/surface-resize.bit.interface";
import State from "../../00.core/state";
import * as Act from "../surface.action";

export const pullResizeAll = (
  cpy: SurfaceModel,
  bal: SurfaceResizeBit,
  ste: State
) => {
  return;
  cpy.surfaceBitList.forEach((a: SurfaceBit) => {
    var surface: any = cpy.surfaceList[cpy.surfaces[a.idx]];
    debugger;
  });
};

export const resizeSurface = (
  cpy: SurfaceModel,
  bal: SurfaceResizeBit,
  ste: State
) => {
  //console.log("resize the surface");
  if (bal == null) bal = { idx: "surface" };

  var item: SurfaceBit = cpy.surfaceBitList[cpy.surfaceBits[bal.idx]];

  if (item == null) return console.log("cannot resize surface for " + bal.idx);

  if (bal.width == null && item.fit != true) {
    var w =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;

    bal.width = w;
  }

  if (bal.height == null && item.fit != true) {
    var h =
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight;

    bal.height = h;
  }

  if (Boolean(item.fit) == true) {
    var surf = cpy.surfaceList[cpy.surfaces[bal.idx]];
    var cnv = surf.renderer.options.view;
    var parent = cnv.parentElement;
    item.width = parent.clientWidth;
    item.height = parent.clientHeight;

    if (bal.height != null) item.height = bal.height;
    //surf.renderer.view.style.width = item.width + "px";
    //surf.renderer.view.style.height = item.height + "px";
  } else {
    item.width = bal.width;
    item.height = bal.height;
  }

  //console.log("item " + JSON.stringify(item));

  //cpy.pixi.containerList.forEach((a, b) => {
  // if (b != 0) return;

  // var container: PIXI.Container = a;
  // container.x = bal.width * 0.5 - container.width * 0.5;
  //});

  var app: PIXI.Application = cpy.surfaceList[cpy.surfaces[item.idx]];
  app.renderer.resize(item.width, item.height);
};

export const createSurface = (
  cpy: SurfaceModel,
  bale: SurfaceBit,
  ste: State
) => {
  if (bale == null) bale = { idx: "surface" };
  //i really wonder if this should have been a src instead of idx

  console.log("do you have surface bale " + JSON.stringify(bale));

  if (bale.width == null) {
    var w =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;

    bale.width = w;
  }

  if (bale.height == null) {
    var h =
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight;

    bale.height = h;
  }

  let surface: HTMLElement = document.getElementById(bale.idx);

  if (surface == null) {
    surface = document.createElement("canvas");
    surface.id = bale.idx;
    var body = document.getElementById("body");
    body.appendChild(surface);
  }

  // console.log("creating surface " + surface);
  //if (bale.clr != null) bale.clr =

  if (surface == null) throw new Error("surface not present for pixi");

  var options = {
    width: bale.width,
    height: bale.height,
    view: surface as HTMLCanvasElement,
    transparent: false,
    backgroundColor: parseInt(bale.clr, 16),
  };

  if (bale.clr == null) bale.clr = "0x000000";
  var app = new PIXI.Application(options);

  bale.dex = cpy.surfaceList.length;

  bale.parent = surface.parentElement;

  cpy.surfaceBits[bale.idx] = bale.dex;
  cpy.surfaceBitList.push(bale);

  //console.log("creation bale " + JSON.stringify(bale));

  cpy.surfaces[bale.idx] = cpy.surfaceList.length;
  cpy.surfaceList.push(app);

  cpy.canvases[bale.idx] = cpy.canvasList.length;
  cpy.canvasList.push(surface);

  //console.log("surface create " + cpy.surfaces);

  //resizer

  if (Boolean(bale.fit) == true) {
    ste.dispatch({ type: Act.RESIZE_SURFACE, bale });
  }

  return cpy;
};

export const writeSurface = (
  cpy: SurfaceModel,
  ste: SurfaceModel,
  bal: Surface
) => {
  return cpy;
};
