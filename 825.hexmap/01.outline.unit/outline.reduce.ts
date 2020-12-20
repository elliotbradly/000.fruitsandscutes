import * as clone from "clone-deep";
import * as Act from "./outline.action";
import { OutlineModel } from "./outline.model";
import * as Buzz from "./outline.buzzer";
import State from "../00.core/state";

export function reducer(
  model: OutlineModel = new OutlineModel(),
  act: Act.Actions,
  state?: State
) {
  switch (act.type) {
    case Act.UPDATE_OUTLINE:
      return Buzz.updateOutline(clone(model), act.bale, state);

    case Act.INIT_OUTLINE:
      return Buzz.initOutline(clone(model), act.bale, state);

    case Act.ADD_RECTANGLE:
      return Buzz.addRectange(clone(model), act.bale, state);

    case Act.MAKE_MAP:
      return Buzz.makeMap(clone(model), act.bale, state);

    default:
      return model;
  }
}
