import Arc from "../../00.core/form/arc.form";
import State from "../../00.core/state";
import PathProcess from "../../00.core/title/prc/path.process";
import { Inject } from "typescript-ioc";

import * as Act from "../screen.action";
import ScreenBit from "../fce/screen.bit";
import PivotBit from "../fce/pivot.bit";
import ListenerBit from "../fce/listener.bit";

export default class HandleScreenArc extends Arc {
  @Inject private path: PathProcess;

  constructor(private state: State) {
    super(state);
  }

  create = (dat: ListenerBit) =>
    this.path.move(this.state, Act.CREATE_DRAGABLE, dat);

  make = (dat: ListenerBit) =>
    this.path.move(this.state, Act.MAKE_LISTENER, dat);

  delete = (dat: ListenerBit) =>
    this.path.move(this.state, Act.DELETE_ALL_LISTENERS, dat);
}
