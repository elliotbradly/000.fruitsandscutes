import Arc from "../../00.core/form/arc.form";
import State from "../../00.core/state";
import PathProcess from "../../00.core/title/prc/path.process";
import { Inject } from "typescript-ioc";

import * as Act from "../sprite.action";
import SpriteBit from "../fce/sprite.bit.interface";

export default class IndexSpriteArc extends Arc {
  @Inject private path: PathProcess;

  constructor(private state: State) {
    super(state);
  }

  read = (dat) => {
    //console.log("do something good");
  };

  list = (dat) => {};

  create = (dat: SpriteBit) => this.path.move(this.state, Act.SPRITE_OPEN, dat);

  update = (dat: SpriteBit) => this.path.move(this.state, Act.UPDATE, dat);

  delete = (dat: SpriteBit) => this.path.move(this.state, Act.CLOSE, dat);
}
