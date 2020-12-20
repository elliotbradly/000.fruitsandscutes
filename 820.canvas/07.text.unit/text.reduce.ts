import * as clone from "clone-deep";
import * as Act from "./text.action";
import { TextModel } from "./text.model";
import * as Buzz from "./text.buzzer";
import State from "../00.core/state";

export function reducer(
  model: TextModel = new TextModel(),
  act: Act.Actions,
  state?: State
) {
  switch (act.type) {
    case Act.UPDATE_TEXT:
      return Buzz.updateText(clone(model), act.bale, state);

    case Act.CREATE_TEXT:
      return Buzz.createText(clone(model), act.bale, state);

    case Act.CLOSE_TEXT:
      return Buzz.closeText(clone(model), act.bale, state);

    default:
      return state;
  }
}
