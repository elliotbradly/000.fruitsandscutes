import { HexmapModel } from "../hexmap.model";
import HexmapBit from "../fce/hexmap.bit";
import * as Honeycomb from "honeycomb-grid";
import State from "../../00.core/state";
import HexItem from "../fce/hex-item.bit";
import * as S from "string";

export const initHexmap = (cpy: HexmapModel, bal: HexmapBit, ste: State) => {
  return cpy;
};

export const updateHexmap = (cpy: HexmapModel, bal: HexmapBit, ste: State) => {
  return cpy;
};

export const addHexMap = (cpy: HexmapModel, bal: HexmapBit, ste: State) => {
  if (bal.size == null) bal.size = 100;
  if (bal.orient == null) bal.orient = "pointy";
  bal.size = Number(bal.size);
  bal.size = 333;

  if (bal.idx == null) bal.idx = "---";

  bal.idx = S(bal.idx).collapseWhitespace().s;

  if (bal.grid == null) return console.error("sorry you have no grid");

  if ((cpy.hexBits[bal.idx] = null))
    throw new Error("grid " + bal.idx + "exists");

  bal.dex = cpy.hexBitList.length;

  cpy.hexBitList.push(bal);
  cpy.hexBits[bal.idx] = bal.dex;
  cpy.count = cpy.hexBitList.length;

  ///!!!! here is where we creat the grid
  const Hex: Honeycomb.HexFactory = Honeycomb.extendHex({
    size: Number(bal.size), // default: 1
    orientation: bal.orient, // default: 'pointy'
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

  debugger;

  for (var key in grid) {
    var hex: Honeycomb.Hex<any> = grid.get({
      x: grid[key].x,
      y: grid[key].y,
    });

    var idx = bal.idx + "-" + hex.x + "-" + hex.y;

    cpy.hc.hexs[idx] = cpy.hc.hexList.length;
    cpy.hc.hexList.push(hex);
  }

  cpy.hc.grids[bal.idx] = cpy.hc.gridList.length;
  cpy.hc.gridList.push(grid);

  //cpy.loadedCount += 1;
  //delete cpy.loadedLast;
  //cpy.loadedLast = bal.src;

  debugger;

  return cpy;
};
