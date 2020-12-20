import { HexModel } from "../hex.model";
import Hex from "../fce/hex.interface";
import * as Honeycomb from "honeycomb-grid";
import HexBit from "../fce/hex.bit.interface";
import * as S from "string";
import GridItemBit from "../fce/grid-item.bit.interface";
import GridItemCenterBit from "../fce/grid-item-center.bit.interface";
import HexItem from "../fce/hex-item.interface";
import * as clone from "clone-deep";
import HexMapSrcListBit from "../fce/map-src-list.bit.interface";
import HexMapSrcItemBit from "../fce/map-src-item.bit.interface";
import * as orientation from "../fce/orientation.interface";
import * as directionFlat from "../fce/direction-flat.interface";
import * as directionPoint from "../fce/direction-pointy.interface";
import Bond from "../fce/bond.interface";

export const hexRange = (cpy: HexModel, ste: HexModel, bal: GridItemBit) => {
  var hexBit: HexBit = cpy.hexBitList[cpy.hexBits[bal.idx]];
  var factory = cpy.hc.gridFactoryList[cpy.hc.grids[hexBit.grid]];

  if (hexBit == null)
    return console.error("you got no grid bit " + hexBit.grid);

  const grid: Honeycomb.Grid = factory(hexBit.grid);

  //will need to switch up with type
  //ok here we go the hard part

  //const grid: Honeycomb.Grid = factory.rectangle({
  //  width: gridBit.width,
  //  height: gridBit.height
  //});

  var hexIDX = hexBit.grid + "-" + bal.x + "-" + bal.y;

  var hex: Honeycomb.Hex<any> = cpy.hc.hexList[cpy.hc.hexs[hexIDX]];
  if (hex == null) return console.log("no hex for " + hexIDX);

  // console.log("show me hex" + JSON.stringify(hex));

  var directions: any;

  if (hexBit.orient == orientation.FLAT) directions = directionFlat;
  if (hexBit.orient == orientation.POINT) directions = directionPoint;

  var dir = Object.values(directions);

  var bondList = [];

  dir.forEach((a: string, b: number) => {
    // console.log("what does the a " + a);

    // console.log("jackpot " + a + " :::" + grid.neighborsOf);

    var item;
    try {
      item = grid.neighborsOf(hex, b);
    } catch (e) {
      console.log("grid neighbors " + e);
    }

    if (item == null) return;

    if (item[0] == null) return;
    var bond: Bond = { d: a, x: item[0].x, y: item[0].y };
    bondList.push(bond);
    item.forEach((b, d) => {
      if (b == null) return;
      //console.log("going " + b + " ::: " + d);
    });
  });

  var bonds = {};
  bondList.forEach(a => {
    bonds[a.d] = a;
  });

  bal.bondList = bondList;
  bal.bonds = bonds;
};

export const updateCenterContainer = (
  cpy: HexModel,
  ste: HexModel,
  bal: GridItemCenterBit
) => {
  //difference between something sinful and less perfect

  var grid = cpy.hexBitList[cpy.hexBits[bal.idx]];
  var gridHC = cpy.hc.gridList[cpy.hc.grids[bal.idx]];

  if (gridHC == null) return console.warn("no grid for you " + bal.idx);

  var centerCopy: GridItemCenterBit = clone(cpy.containerCenter);
  centerCopy.idx = bal.idx;
  centerCopy.graph = bal.graph;
  centerCopy.dex += Number(bal.dex);

  if (centerCopy.dex > grid.grid.length - 1) centerCopy.dex = 0;
  if (centerCopy.dex < 0) centerCopy.dex = grid.grid.length - 1;

  var item: HexItem = grid.grid[centerCopy.dex];
  if (item == null)
    return console.log("no hex item " + JSON.stringify(centerCopy.dex));

  var hexIDX = bal.idx + "-" + item.x + "-" + item.y;

  var hex: Honeycomb.Hex<any> = cpy.hc.hexList[cpy.hc.hexs[hexIDX]];
  centerCopy.x = hex.x;
  centerCopy.y = hex.y;

  delete cpy.containerCenter;
  cpy.containerCenter = centerCopy;

  //cpy.containerCenter.x = item.x;
  //cpy.containerCenter.y = item.y;
  //cpy.containerCenter.idx = bal.idx;
  //cpy.containerCenter.graph = bal.graph;

  return cpy;
};

export const createMapGrid = (cpy: HexModel, ste: HexModel, bal: HexBit) => {
  if (bal.size == null) bal.size = 100;
  if (bal.orient == null) bal.orient = "pointy";
  bal.size = Number(bal.size);
  bal.size = 333;

  bal.idx = S(bal.idx).collapseWhitespace().s;

  if (bal.grid == null) return;

  if ((ste.hexBits[bal.idx] = null))
    throw new Error("grid " + bal.idx + "exists");

  bal.dex = ste.hexBitList.length;

  cpy.hexBitList.push(bal);
  cpy.hexBits[bal.idx] = bal.dex;
  cpy.count = cpy.hexBitList.length;

  ///!!!! here is where we creat the grid
  const Hex: Honeycomb.HexFactory = Honeycomb.extendHex({
    size: Number(bal.size), // default: 1
    orientation: bal.orient // default: 'pointy'
  });

  const Grid: Honeycomb.GridFactory<any> = Honeycomb.defineGrid(Hex);

  bal.grid.forEach((a, b) => {
    const hexPrototype: HexItem = { size: 10, hex: "value" };
    var Hex = Honeycomb.extendHex(hexPrototype);
    bal.grid[b] = Hex().cubeToCartesian({ q: a.q, r: a.r, s: a.s });
    bal.grid[b].hex = a.hex;
  });

  const grid: Honeycomb.Grid = Grid(bal.grid);
  ///end of where we create grid

  cpy.hc.hexFactories[bal.idx] = cpy.hc.hexFactoryList.length;
  cpy.hc.hexFactoryList.push(Hex);

  cpy.hc.gridFactories[bal.idx] = cpy.hc.gridFactoryList.length;
  cpy.hc.gridFactoryList.push(Grid);

  for (var key in grid) {
    var hex: Honeycomb.Hex<any> = grid.get({
      x: grid[key].x,
      y: grid[key].y
    });

    var idx = bal.idx + "-" + hex.x + "-" + hex.y;

    cpy.hc.hexs[idx] = cpy.hc.hexList.length;
    cpy.hc.hexList.push(hex);
  }

  cpy.hc.grids[bal.idx] = cpy.hc.gridList.length;
  cpy.hc.gridList.push(grid);

  cpy.loadedCount += 1;
  delete cpy.loadedLast;
  cpy.loadedLast = bal.src;

  return cpy;
};

export const writeHex = (cpy: HexModel, ste: HexModel, bal: Hex) => {
  return cpy;
};

export const writeMapSrcItem = (
  cpy: HexModel,
  ste: HexModel,
  bal: HexMapSrcItemBit
) => {
  if (bal.idx.length <= 0) return;
  console.log("write map src item " + JSON.stringify(bal));

  bal.idx = S(bal.idx).collapseWhitespace().s;

  if (cpy.mapSrc.data[bal.idx] != null)
    return console.warn(bal.idx + " hex map already exists");

  var dex = cpy.mapSrc.list.length;
  console.log("here is looking at you " + JSON.stringify(bal));

  cpy.mapSrc.data[bal.idx] = dex;
  cpy.mapSrc.list.push(bal);

  return cpy;
};
