import Arc from "../../00.core/form/arc.form";
import State from "../../00.core/state";
import PathProcess from "../../00.core/title/prc/path.process";
import { Inject } from "typescript-ioc";

import * as Act from "../text.action";
import TextBit from "../fce/text.bit.interface";

export default class IndexTextArc extends Arc {
  @Inject private path: PathProcess;

  constructor(private state: State) {
    super(state);
  }

  read = (dat) => {
    //console.log("do something good");
  };

  list = (dat) => {};

  create = (dat: TextBit) => this.path.move(this.state, Act.CREATE_TEXT, dat);
  update = (dat: TextBit) => this.path.move(this.state, Act.UPDATE_TEXT, dat);
  close = (dat: TextBit) => this.path.move(this.state, Act.CLOSE_TEXT, dat);
}
