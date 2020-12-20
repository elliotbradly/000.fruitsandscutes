import Arc from "../../00.core/form/arc.form";
import State from "../../00.core/state";
import PathProcess from "../../00.core/title/prc/path.process";
import { Inject } from "typescript-ioc";

import * as Act from "../outline.action";
import OutlineBit from "../fce/outline.bit";

export default class IndexOutlineArc extends Arc {
  @Inject private path: PathProcess;

  constructor(private state: State) {
    super(state);
  }

  init = (dat: OutlineBit) => this.path.move(this.state, Act.INIT_OUTLINE, dat);
  update = (dat: OutlineBit) =>
    this.path.move(this.state, Act.UPDATE_OUTLINE, dat);

  add = (dat: OutlineBit) => this.path.move(this.state, Act.ADD_RECTANGLE, dat);

  make = (dat: OutlineBit) => this.path.move(this.state, Act.MAKE_MAP, dat);
}
