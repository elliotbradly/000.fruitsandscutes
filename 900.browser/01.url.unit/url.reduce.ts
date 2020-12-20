import * as clone from "clone-deep";
import * as Act from "./url.action";
import { UrlModel } from "./url.model";
import * as Buzz from "./url.buzzer";
import State from "../00.core/state";

export function reducer(
  model: UrlModel = new UrlModel(),
  act: Act.Actions,
  state?: State
) {
  switch (act.type) {
    case Act.PUSH_URL:
      return Buzz.pushUrl(clone(model), act.bale, state);

    case Act.UPDATE_URL:
      return Buzz.updateUrl(clone(model), act.bale, state);

    case Act.INIT_URL:
      return Buzz.initUrl(clone(model), act.bale, state);

    default:
      return model;
  }
}
