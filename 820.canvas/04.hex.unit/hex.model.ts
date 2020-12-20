import Hex from "./fce/Hex.interface";
import HexBit from "./fce/hex.bit.interface";
import HoneycombCollection from "./fce/honeycomb-collection.interface";
import { HexCenterContainer } from "./hex.action";
import GridItemBit from "./fce/grid-item.bit.interface";
import GridItemCenterBit from "./fce/grid-item-center.bit.interface";
import MapSrcListBit from "./fce/map-src-list.bit.interface";

export class HexModel implements Hex {
  hexBitList: HexBit[] = [];
  hexBits: any = {};
  count: number = 0; //gives you the number of hex grids present
 
  centerIndex: number = 0;

  loadedCount: number = 0;
  loadedLast: string = "";

  mapSrc: MapSrcListBit = { list: [], data: {} };

  containerCenter: GridItemCenterBit = {
    idx: "",
    x: 0,
    y: 0,
    dex: 0
  };

  hc: HoneycombCollection = {
    hexFactoryList: [],
    hexFactories: {},

    gridFactoryList: [],
    gridFactories: {},

    gridList: [],
    grids: {},

    hexList: [],
    hexs: {}
  };
}
