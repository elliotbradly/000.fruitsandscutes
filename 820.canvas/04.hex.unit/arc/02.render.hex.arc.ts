import Arc from "../../00.core/form/arc.form";
import State from "../../00.core/state";
import PathProcess from "../../00.core/title/prc/path.process";
import { Inject } from "typescript-ioc";

import * as Act from "../hex.action";
import HexBit from "../fce/hex.bit.interface";
import { HexModel } from "../hex.model";
import GridItemCenterBit from "../fce/grid-item-center.bit.interface";
import GridItemHiLiteRenderBit from "../fce/grid-item-hilite-render.bit.interface";

export default class RenderHexArc extends Arc {
  @Inject private path: PathProcess;

  constructor(private state: State) {
    super(state);
  }

  read = (dat: HexBit) => this.path.move(this.state, Act.OUTLINE_RENDER, dat);

  update = (dat: GridItemHiLiteRenderBit) => {
    var hMod: HexModel = this.state.value.hex;
    var center: GridItemCenterBit = hMod.containerCenter;
    dat.list = [
      {
        idx: center.idx,
        graph: dat.graph,
        x: center.x,
        y: center.y,
      },
    ];
    this.path.move(this.state, Act.HIGHLITE_RENDER, dat);
  };
}
