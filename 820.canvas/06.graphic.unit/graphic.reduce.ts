import State from "../00.core/state";
import * as clone from "clone-deep";
import * as Act from "./graphic.action";
import { GraphicModel } from "./graphic.model";
import * as Ram from "./graphic.ramify";

export function reducer(
  model: GraphicModel = new GraphicModel(),
  act: Act.Actions,
  state?: State
) {
  switch (act.type) {
    case Act.CREATE_GRAPHIC:
      return Ram.createGraphic(clone(model), act.bale, state);

    case Act.UPDATE:
    //return Ram.updateGraphic(clone(state), state, act.bale);

    default:
      return state;
  }
}
