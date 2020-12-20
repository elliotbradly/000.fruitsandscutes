import Arc from "../../00.core/form/arc.form";
import State from "../../00.core/state";
import PathProcess from "../../00.core/title/prc/path.process";
import { Inject } from "typescript-ioc";

import * as Act from "../view.action";
import ViewBit from "../fce/view.bit";

export default class IndexViewArc extends Arc {
  @Inject private path: PathProcess;

  constructor(private state: State) {
    super(state);
  }

  init = (dat: ViewBit) => this.path.move(this.state, Act.VIEW_OPEN, dat);

  create = (dat: ViewBit) => this.path.move(this.state, Act.CREATE_RENDER, dat);

  close = (dat: ViewBit) =>
    this.path.move(this.state, Act.CLOSE_SCROLLBAR, dat);

  open = (dat: ViewBit) => this.path.move(this.state, Act.OPEN_SCROLLBAR, dat);

  add = (dat: ViewBit) => this.path.move(this.state, Act.SHOW_FACE, dat);

  update = (dat: ViewBit) =>
    this.path.move(this.state, Act.UPDATE_BACKGROUND, dat);

  //create = (dat: ViewBit) => this.path.move(this.state, Act.VIEW_OPEN, dat);
}
