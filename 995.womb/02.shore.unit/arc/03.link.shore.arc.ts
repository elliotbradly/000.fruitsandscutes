import Arc from "../../00.core/form/arc.form";
import State from "../../00.core/state";
import PathProcess from "../../00.core/title/prc/path.process";
import { Inject } from "typescript-ioc";

import * as Act from "../shore.action";
import ShoreBit from "../fce/shore.bit";

export default class LinkShoreArc extends Arc {
  @Inject private path: PathProcess;

  constructor(private state: State) {
    super(state);
  }

  init = (dat: ShoreBit) => this.path.move(this.state, Act.INIT_LINK, dat);
  update = (dat: ShoreBit) => this.path.move(this.state, Act.UPDATE_LINK, dat);
  resize = (dat: ShoreBit) => this.path.move(this.state, Act.RESIZE_LINK, dat);
}
