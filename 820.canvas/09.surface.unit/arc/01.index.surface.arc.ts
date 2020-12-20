import Arc from "../../00.core/form/arc.form";
import State from "../../00.core/state";
import PathProcess from "../../00.core/title/prc/path.process";
import { Inject } from "typescript-ioc";

import * as Act from "../surface.action";
import SurfaceBit from "../fce/surface.bit.interface";
import SurfaceResizeBit from "../fce/surface-resize.bit.interface";

export default class IndexSurfaceArc extends Arc {
  @Inject private path: PathProcess;

  constructor(private state: State) {
    super(state);
  }

  create = (dat: SurfaceBit) =>
    this.path.move(this.state, Act.SURFACE_CREATE, dat);

  resize = (dat: SurfaceResizeBit) =>
    this.path.move(this.state, Act.RESIZE_SURFACE, dat);

  pull = (dat: SurfaceResizeBit) =>
    this.path.move(this.state, Act.PULL_RESIZE_ALL, dat);
}
