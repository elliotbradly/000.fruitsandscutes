import Arc from "../../00.core/form/arc.form";
import State from "../../00.core/state";
import PathProcess from "../../00.core/title/prc/path.process";
import { Inject } from "typescript-ioc";

import * as Act from "../hex.action";
import HexBit from "../fce/hex.bit.interface";
import GridItemBit from "../fce/grid-item.bit.interface";
import GridItemRenderBit from "../fce/grid-item-render.bit.interface";

export default class RenderHexArc extends Arc {
  @Inject private path: PathProcess;

  constructor(private state: State) {
    super(state);
  }

  read = (dat: GridItemBit) => {
    this.path.move(this.state, Act.CENTER_HEX_CONTAINER, dat);
  };

  update = (dat: GridItemRenderBit) => {
    this.path.move(this.state, Act.UPDATE_CENTER_CONTAINER, dat);
  };
}
