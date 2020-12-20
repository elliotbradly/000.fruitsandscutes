import * as clone from "clone-deep";
import * as Act from "./body.action";
import { BodyModel } from "./body.model";
import * as Buzz from "./body.buzzer";
import State from "../00.core/state";

export function reducer(
  model: BodyModel = new BodyModel(),
  act: Act.Actions,
  state?: State
) {
  switch (act.type) {
    case Act.INIT_BODY:
      return Buzz.initBody(clone(model), act.bale, state);

    case Act.UPDATE_BODY:
      return Buzz.updateBody(clone(model), act.bale, state);

    default:
      return model;
  }
}
