import Arc from "../../00.core/form/arc.form";
import State from "../../00.core/state";
import PathProcess from "../../00.core/title/prc/path.process";
import { Inject } from "typescript-ioc";

import * as Act from "../container.action";
import ContainerBit from "../fce/container.bit.interface";

export default class IndexContainerArc extends Arc {
  @Inject private path: PathProcess;

  constructor(private state: State) {
    super(state);
  }

  create = (dat: ContainerBit) =>
    this.path.move(this.state, Act.CREATE_CONTAINER, dat);

  update = (dat: ContainerBit) =>
    this.path.move(this.state, Act.UPDATE_CONTAINER, dat);

  delete = (dat: ContainerBit) =>
    this.path.move(this.state, Act.DELETE_CONTAINER, dat);
}
