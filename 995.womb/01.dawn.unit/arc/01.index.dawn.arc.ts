import Arc from "../../00.core/form/arc.form";
import State from "../../00.core/state";
import PathProcess from "../../00.core/title/prc/path.process";
import { Inject } from "typescript-ioc";

import * as Act from "../dawn.action";
import DawnBit from "../fce/dawn.bit";

export default class IndexDawnArc extends Arc {
  @Inject private path: PathProcess;

  constructor(private state: State) {
    super(state);
  }

  init = (dat: DawnBit) => this.path.move(this.state, Act.INIT_DAWN, dat);
  update = (dat: DawnBit) => this.path.move(this.state, Act.UPDATE_DAWN, dat);
  create = (dat: DawnBit) => this.path.move(this.state, Act.CREATE_LINK, dat);
  replace = (dat: DawnBit) => this.path.move(this.state, Act.REPLACE_DATA, dat);
}
