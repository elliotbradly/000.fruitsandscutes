import Arc from "../../00.core/form/arc.form";
import State from "../../00.core/state";
import PathProcess from "../../00.core/title/prc/path.process";
import { Inject } from "typescript-ioc";

import * as Act from "../view.action";
import ViewBit from "../fce/view.bit";
import CardBit from "../fce/card.bit";
import CardItemBit from "../fce/card.-item.bit";

export default class TimelineViewArc extends Arc {
  @Inject private path: PathProcess;

  constructor(private state: State) {
    super(state);
  }

  write = (dat: ViewBit) =>
    this.path.move(this.state, Act.WRITE_CARD_ITEM, dat);

  read = (dat: ViewBit) => this.path.move(this.state, Act.READ_TIMELINE, dat);

  update = (dat: ViewBit) =>
    this.path.move(this.state, Act.UPDATE_TIMELINE, dat);

  add = (dat: CardItemBit) =>
    this.path.move(this.state, Act.ADD_CARD_ITEM, dat);

  create = (dat: CardBit) => this.path.move(this.state, Act.CREATE_CARD, dat);

  //create = (dat: ViewBit) => this.path.move(this.state, Act.VIEW_OPEN, dat);
}
