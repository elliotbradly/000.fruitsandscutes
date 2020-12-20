import { Action } from "../../00.core/interface/action.interface";
import State from "../../00.core/state";
import * as Act from "../hex.action";
import { HexModel } from "../hex.model";
import HexBit from "../fce/hex.bit.interface";
import { GraphicModel } from "../../06.graphic.unit/graphic.model";
import * as S from "string";
import * as Color from "color";
import convert = require("color-convert");
import chroma = require("chroma-js");
import * as Honeycomb from "honeycomb-grid";
import GridItemRenderBit from "../fce/grid-item-render.bit.interface";
import GridItemHiLiteRenderBit from "../fce/grid-item-hilite-render.bit.interface";

export const RenderHighlite = (act: Action, state: State) => {
  if (act.type != Act.HIGHLITE_RENDER) return;

  var list: GridItemHiLiteRenderBit[] = act.bale.list;
  var hMod: HexModel = state.value.hex;
  var gMod: GraphicModel = state.value.graphic;

  console.log("shoule be rendering a high lite ");

  list.forEach((bale: GridItemRenderBit) => {
    // debugger;
    var yMod = 0.61;

    var grid = hMod.hexBitList[hMod.hexBits[bale.idx]];
    var graph = gMod.graphicList[gMod.graphics[bale.graph]];
    var gridHC = hMod.hc.gridList[hMod.hc.grids[bale.idx]];
    if (gridHC == null) return console.log("no grid for you " + act.bale.idx);
    if (graph == null) return console.warn("g " + bale.graph + ":" + bale.idx);
    var gridBit: HexBit = hMod.hexBitList[hMod.hexBits[bale.idx]];

    var hexIDX = bale.idx + "-" + bale.x + "-" + bale.y;

    var hex: Honeycomb.Hex<any> = hMod.hc.hexList[hMod.hc.hexs[hexIDX]];
    const point = hex.toPoint();

    graph.clear();
    graph.lineStyle(10, 0xff00ff);
    const corners = hex.corners().map(corner => corner.add(point));
    const [firstCorner, ...otherCorners] = corners;

    graph.moveTo(firstCorner.x, firstCorner.y * yMod);
    otherCorners.forEach(({ x, y }) => {
      graph.lineTo(x, y * yMod);
    });

    graph.lineTo(firstCorner.x, firstCorner.y * yMod);
    //var graph = gMod.graphicList[gMod.graphics[bale.graph]];
    //const hexCoordinates = gridHC.pointToHex(bale.x, bale.x);
    //var hex = gridHC.get(hexCoordinates);
    // get the actual hex from the grid
    //console.log("show me " + hex);
  });
};

export const RenderOutline = (act: Action, state: State) => {
  if (act.type != Act.OUTLINE_RENDER) return;

  var yMod = 0.61;

  var hMod: HexModel = state.value.hex;
  var gMod: GraphicModel = state.value.graphic;

  var bale: HexBit = act.bale;

  bale.idx = S(bale.idx).collapseWhitespace().s;

  if (gMod == null) return console.log("gmod empty");
  var gridHC = hMod.hc.gridList[hMod.hc.grids[bale.idx]];

  if (gridHC == null) return console.log("no grid for you " + act.bale.idx);

  var grid = hMod.hexBitList[hMod.hexBits[bale.idx]];
  var graph = gMod.graphicList[gMod.graphics[bale.graph]];

  if (graph == null)
    return console.log("no graphic on " + bale.graph + " ::: " + bale.idx);

  graph.clear();

  gridHC.forEach(hex => {
    const point = hex.toPoint();

    var gale = grid.map[hex.hex];
    if (grid == null) return console.log("no grid");
    if (grid.map == null) return console.log("no grid map");

    for (var key in grid.map) {
      var item = grid.map[key];
      if (item.hex != hex.hex) continue;
      gale = item;
    }

    var clr = Color.rgb(convert.hex.rgb(gale.color.value));
    clr.desaturate(0.8);

    function colorToSigned24Bit(s) {
      return (parseInt(s.substr(1), 16) << 8) / 256;
    }

    graph.lineStyle(3, 0xde3249);

    var fin = chroma(gale.color.value)
      .darken()
      .hex();

    var fin = gale.color.value;

    graph.beginFill(colorToSigned24Bit(fin), 1);

    const corners = hex.corners().map(corner => corner.add(point));
    const [firstCorner, ...otherCorners] = corners;

    graph.moveTo(firstCorner.x, firstCorner.y * yMod);
    otherCorners.forEach(({ x, y }) => {
      graph.lineTo(x, y * yMod);
    });

    graph.lineTo(firstCorner.x, firstCorner.y * yMod);
  });
};
