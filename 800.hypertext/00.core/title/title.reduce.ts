import * as clone from "clone-deep";
import * as Act from "./title.action";
import { TitleModel } from "./title.model";
import * as Buzz from "./title.buzzer";
import State from "../state";

export function reducer(
  model: TitleModel = new TitleModel(),
  act: Act.Actions,
  state?: State
) {
  switch (act.type) {
    case Act.UPDATE_PATH:
      return Buzz.updatePath(clone(model), act.bale);

    case Act.PULL_PIVOT:
      return Buzz.pullPivot(clone(model), act.bale, state);

    case Act.PUSH_PIVOT:
      return Buzz.pushPivot(clone(model), act.bale, state);

    default:
      return model;
  }
}
