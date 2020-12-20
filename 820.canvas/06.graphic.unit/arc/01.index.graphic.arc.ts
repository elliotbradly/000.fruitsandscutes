import Arc from "../../00.core/form/arc.form";
import State from "../../00.core/state";
import PathProcess from "../../00.core/title/prc/path.process";
import { Inject } from "typescript-ioc";

import * as Act from "../graphic.action";
import GraphicBit from "../fce/graphic.bit.interface";

export default class IndexGraphicArc extends Arc {
  @Inject private path: PathProcess;

  constructor(private state: State) {
    super(state);
  }

  read = (dat) => {
    //console.log("do something good");
  };

  list = (dat) => {};

  create = (dat: GraphicBit) =>
    this.path.move(this.state, Act.CREATE_GRAPHIC, dat);

  update = (dat: GraphicBit) => this.path.move(this.state, Act.UPDATE, dat);

  delete = (dat: GraphicBit) => this.path.move(this.state, Act.CLOSE, dat);
}
