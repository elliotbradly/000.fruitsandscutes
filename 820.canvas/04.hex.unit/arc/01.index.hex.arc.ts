import Arc from "../../00.core/form/arc.form";
import State from "../../00.core/state";
import PathProcess from "../../00.core/title/prc/path.process";
import { Inject } from "typescript-ioc";

import * as Act from "../hex.action";
import HexBit from "../fce/hex.bit.interface";
import HexMapSrcListBit from "../fce/map-src-list.bit.interface";
import HexMapSrcItemBit from "../fce/map-src-item.bit.interface";

export default class IndexHexArc extends Arc {
  @Inject private path: PathProcess;

  constructor(private state: State) {
    super(state);
  }

  read = (dat: HexBit) => this.path.move(this.state, Act.HEX_LOAD, dat);

  list = (dat: HexMapSrcItemBit) =>
    this.path.move(this.state, Act.ADD_MAP_SRC, dat);

  create = (dat: HexBit) => this.path.move(this.state, Act.HEX_OPEN, dat);

  update = (dat) => {};

  delete = (dat) => {};
}
