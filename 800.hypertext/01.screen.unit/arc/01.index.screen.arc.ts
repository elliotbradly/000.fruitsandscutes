import Arc from "../../00.core/form/arc.form";
import State from "../../00.core/state";
import PathProcess from "../../00.core/title/prc/path.process";
import { Inject } from "typescript-ioc";

import * as Act from "../screen.action";
import ScreenBit from "../fce/screen.bit";
import PivotBit from "../fce/pivot.bit";

export default class IndexScreenArc extends Arc {
  @Inject private path: PathProcess;

  constructor(private state: State) {
    super(state);
  }

  awake = (dat: PivotBit) => this.path.move(this.state, Act.AWAKE_PIVOT, dat);

  update = (dat: PivotBit) => this.path.move(this.state, Act.UPDATE_HTML, dat);
  push = (dat: PivotBit) => this.path.move(this.state, Act.PUSH_COMP, dat);
  make = (dat: PivotBit) => this.path.move(this.state, Act.MAKE_NAV, dat);

  delete = (dat: PivotBit) => this.path.move(this.state, Act.DELETE_HTML, dat);
}
