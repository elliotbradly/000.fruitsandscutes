import * as clone from "clone-deep";
import * as Act from "./screen.action";
import { ScreenModel } from "./screen.model";
import * as Buzz from "./screen.buzzer";
import State from "../00.core/state";

export function reducer(
  model: ScreenModel = new ScreenModel(),
  act: Act.Actions,
  state?: State
) {
  switch (act.type) {
    case Act.PUSH_COMP:
      return Buzz.pushCompile(clone(model), act.bale, state);

    case Act.DELETE_HTML:
      return Buzz.deleteHTML(clone(model), act.bale, state);

    case Act.MAKE_NAV:
      return Buzz.makeNav(clone(model), act.bale, state);

    case Act.UPDATE_HTML:
      return Buzz.updateHTML(clone(model), act.bale, state);

    case Act.AWAKE_PIVOT:
      return Buzz.awakePivot(clone(model), act.bale, state);

    default:
      return model;
  }
}
