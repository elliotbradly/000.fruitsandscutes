import HoneycombCollection from "./fce/honeycomb-collection.bit";
import Hexmap from "./fce/Hexmap.interface";
import HexmapBit from "./fce/hexmap.interface";

export class HexmapModel implements Hexmap {
  hexBitList: HexmapBit[] = [];
  hexBits: any = {};
  count: number = 0;

  hc: HoneycombCollection = {
    hexFactoryList: [],
    hexFactories: {},

    gridFactoryList: [],
    gridFactories: {},

    gridList: [],
    grids: {},

    hexList: [],
    hexs: {},
  };
}
