import Arc from "../../00.core/form/arc.form";
import State from "../../00.core/state";
import PathProcess from "../../00.core/title/prc/path.process";
import { Inject } from "typescript-ioc";

import * as Act from "../focus.action";
import FocusBit from "../fce/focus.bit.interface";
import FocusUpdateBit from "../fce/focus-update.bit.interface";

export default class IndexFocusArc extends Arc {
  @Inject private path: PathProcess;

  constructor(private state: State) {
    super(state);
  }

  read = (dat) => {
    //console.log("do something good");
  };

  list = (dat) => {};

  create = (dat: FocusBit) => this.path.move(this.state, Act.OPEN_FOCUS, dat);

  update = (dat: FocusUpdateBit) =>
    this.path.move(this.state, Act.UPDATE_FOCUS, dat);

  delete = (dat) => {};
}
