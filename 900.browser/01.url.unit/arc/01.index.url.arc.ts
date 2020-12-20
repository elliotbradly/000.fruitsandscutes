import Arc from "../../00.core/form/arc.form";
import State from "../../00.core/state";
import PathProcess from "../../00.core/title/prc/path.process";
import { Inject } from "typescript-ioc";

import * as Act from "../url.action";
import UrlBit from "../fce/url.bit";

export default class IndexUrlArc extends Arc {
  @Inject private path: PathProcess;

  constructor(private state: State) {
    super(state);
  }

  init = (dat: UrlBit) => this.path.move(this.state, Act.INIT_URL, dat);
  update = (dat: UrlBit) => this.path.move(this.state, Act.UPDATE_URL, dat);
  push = (dat: UrlBit) => this.path.move(this.state, Act.PUSH_URL, dat);
}
