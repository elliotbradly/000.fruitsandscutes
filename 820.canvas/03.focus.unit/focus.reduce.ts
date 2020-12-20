import * as clone from "clone-deep";
import * as Act from "./focus.action";
import { FocusModel } from "./focus.model";
import * as Buzz from "./focus.buzzer";

export function reducer(
  state: FocusModel = new FocusModel(),
  act: Act.Actions
) {
  switch (act.type) {
    case Act.OPEN_FOCUS:
      return Buzz.openFocus(clone(state), state, act.bale);

    case Act.WRITE_FOCUS:
      return Buzz.writeFocus(clone(state), state, act.bale);

    default:
      return state;
  }
}
