import { OutlineModel } from "../outline.model";
import OutlineBit from "../fce/outline.bit";
import State from "../../00.core/state";
import * as Honeycomb from "honeycomb-grid";

import * as B from "../../00.core/constant/BASIC";

import * as ActTtl from "../../00.core/title/title.action";
import * as PIVOT from "../../val/pivot";

import * as HkeGrp from "../../hke/graphic.hike";

export const initOutline = (cpy: OutlineModel, bal: OutlineBit, ste: State) => {
  return cpy;
};

//KLYDEWAYNE ROYAL
//willochhee yahct club
//rosocoe dean
//jb stoner
//evile keenivel

export const makeMap = (cpy: OutlineModel, bal: OutlineBit, ste: State) => {
  bal.dat.forEach((a, b) => {
    if (typeof a === "string") bal.dat[b] = JSON.parse(a);
  });

  var gDex: any = ste.value.title.canvas.value.graphic.graphics[bal.idx];
  var graphics: any = ste.value.title.canvas.value.graphic.graphicList[gDex];

  if (graphics == null) return console.warn("got not graphics ");

  graphics.lineStyle(2, 0xfeeb77, 1);

  if (bal.val == null) {
    bal.val = 33;
  }

  const Hex: Honeycomb.HexFactory = Honeycomb.extendHex({
    size: Number(bal.val), // default: 1
    orientation: "pointy",
  });

  var cube = bal.dat;

  const Grid: Honeycomb.GridFactory<any> = Honeycomb.defineGrid(Hex);

  const grid: any = Grid(cube);
  grid.forEach((hex) => {
    const point = hex.toPoint();

    // add the hex's position to each of its corner points
    const corners = hex.corners().map((corner) => corner.add(point));
    // separate the first from the other corners
    const [firstCorner, ...otherCorners] = corners;

    // move the "pen" to the first corner
    graphics.moveTo(firstCorner.x, firstCorner.y);
    // draw lines to the other corners
    otherCorners.forEach(({ x, y }) => graphics.lineTo(x, y));
    // finish at the first corner
    graphics.lineTo(firstCorner.x, firstCorner.y);

    //app.stage.addChild(graphics)
  });

  return cpy;
};

export const addRectange = (cpy: OutlineModel, bal: OutlineBit, ste: State) => {
  const Hex = Honeycomb.extendHex({ size: 15 });
  const Grid = Honeycomb.defineGrid(Hex);

  var gDex: any = ste.value.title.canvas.value.graphic.graphics[bal.idx];
  var graphics: any = ste.value.title.canvas.value.graphic.graphicList[gDex];

  if (graphics == null) return console.warn("got not graphics ");

  graphics.lineStyle(2, 0xfeeb77, 1);

  Grid.rectangle({ width: 100, height: 100 }).forEach((hex) => {
    const point = hex.toPoint();

    // add the hex's position to each of its corner points
    const corners = hex.corners().map((corner) => corner.add(point));
    // separate the first from the other corners
    const [firstCorner, ...otherCorners] = corners;

    // move the "pen" to the first corner
    graphics.moveTo(firstCorner.x, firstCorner.y);
    // draw lines to the other corners
    otherCorners.forEach(({ x, y }) => graphics.lineTo(x, y));
    // finish at the first corner
    graphics.lineTo(firstCorner.x, firstCorner.y);

    //app.stage.addChild(graphics)
  });

  return cpy;
};

export const updateOutline = (
  cpy: OutlineModel,
  bal: OutlineBit,
  ste: State
) => {
  return cpy;
};

export const renderHexOutline = (
  cpy: OutlineModel,
  bal: OutlineBit,
  ste: State
) => {
  if (bal.lst == null) bal.lst = [];

  var gDex: any = ste.value.title.canvas.value.graphic.graphics[bal.idx];
  var graphics: any = ste.value.title.canvas.value.graphic.graphicList[gDex];

  bal.lst.forEach((hex) => {
    const point = hex.toPoint();

    // add the hex's position to each of its corner points
    const corners = hex.corners().map((corner) => corner.add(point));
    // separate the first from the other corners
    const [firstCorner, ...otherCorners] = corners;

    // move the "pen" to the first corner
    graphics.moveTo(firstCorner.x, firstCorner.y);
    // draw lines to the other corners
    otherCorners.forEach(({ x, y }) => graphics.lineTo(x, y));
    // finish at the first corner
    graphics.lineTo(firstCorner.x, firstCorner.y);

    //app.stage.addChild(graphics)
  });

  return cpy;
};
