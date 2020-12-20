import * as clone from "clone-deep";
import * as Act from "./sprite.action";
import { SpriteModel } from "./sprite.model";
import * as Buzz from "./sprite.buzzer";

export function reducer(
  state: SpriteModel = new SpriteModel(),
  act: Act.Actions
) {
  switch (act.type) {
    case Act.UPDATE:
      return Buzz.updateSprite(clone(state), state, act.bale);

    case Act.SPRITE_OPEN:
      return Buzz.writeSprite(clone(state), state, act.bale);

    default:
      return state;
  }
}
