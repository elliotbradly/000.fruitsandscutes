import * as clone from "clone-deep";
import * as Act from "./shore.action";
import { ShoreModel } from "./shore.model";
import * as Buzz from "./shore.buzzer";
import State from "../00.core/state";

export function reducer(
  model: ShoreModel = new ShoreModel(),
  act: Act.Actions,
  state?: State
) {
  switch (act.type) {
    case Act.UPDATE_SHORE:
      return Buzz.updateShore(clone(model), act.bale, state);

    case Act.UPDATE_WITNESS:
      return Buzz.updateWitness(clone(model), act.bale, state);

    case Act.UPDATE_LINK:
      return Buzz.updateLink(clone(model), act.bale, state);

    case Act.RESIZE_SHORE:
      return Buzz.resizeShore(clone(model), act.bale, state);

    case Act.RESIZE_WITNESS:
      return Buzz.resizeWitness(clone(model), act.bale, state);

    case Act.RESIZE_LINK:
      return Buzz.resizeLink(clone(model), act.bale, state);

    case Act.INIT_SHORE:
      return Buzz.initShore(clone(model), act.bale, state);

    case Act.INIT_WITNESS:
      return Buzz.initWitness(clone(model), act.bale, state);

    case Act.INIT_LINK:
      return Buzz.initLink(clone(model), act.bale, state);

    default:
      return model;
  }
}
