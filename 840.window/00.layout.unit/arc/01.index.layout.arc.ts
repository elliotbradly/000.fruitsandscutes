import Arc from "../../00.core/form/arc.form";
import State from "../../00.core/state";
import PathProcess from "../../00.core/title/prc/path.process";
import { Inject } from "typescript-ioc";

import * as Act from "../layout.action";
import LayoutBit from "../fce/layout.bit";
import LayoutUnitBit from "../fce/layout-unit.bit";

export default class IndexLayoutArc extends Arc {
  @Inject private path: PathProcess;

  constructor(private state: State) {
    super(state);
  }

  init = (dat: LayoutUnitBit) => {
    if (dat == null) dat = {};
    this.path.move(this.state, Act.INIT_LAYOUT, dat);
  };

  update = (dat: LayoutBit) =>
    this.path.move(this.state, Act.UPDATE_LAYOUT, dat);

  make = (dat: LayoutBit) => {
    if (dat == null) dat = { idx: null, val: null };
    this.path.move(this.state, Act.MAKE_COMPONENT, dat);
  };

  create = (dat: LayoutBit) => {
    if (dat == null) dat = { idx: null, val: null };
    this.path.move(this.state, Act.CREATE_GROUP, dat);
  };

  add = (dat: LayoutBit) => {
    if (dat == null) dat = { idx: null, val: null };
    this.path.move(this.state, Act.ADD_ELEMENT, dat);
  };

  read = (dat: LayoutBit) => {
    if (dat == null) dat = { idx: null, val: null };
    this.path.move(this.state, Act.READ_CONTENT, dat);
  };

  open = (dat: LayoutBit) => {
    if (dat == null) dat = { idx: null, val: null };
    this.path.move(this.state, Act.OPEN_LAYOUT, dat);
  };
}
