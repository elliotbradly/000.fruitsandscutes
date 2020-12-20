import Arc from "../../00.core/form/arc.form";
import State from "../../00.core/state";
import PathProcess from "../../00.core/title/prc/path.process";
import { Inject } from "typescript-ioc";

import * as Act from "../body.action";
import BodyBit from "../fce/body.bit";

export default class IndexBodyArc extends Arc {
  @Inject private path: PathProcess;

  constructor(private state: State) {
    super(state);
  }

  init = (dat: BodyBit) => this.path.move(this.state, Act.INIT_BODY, dat);
  update = (dat: BodyBit) => this.path.move(this.state, Act.UPDATE_BODY, dat);
}
