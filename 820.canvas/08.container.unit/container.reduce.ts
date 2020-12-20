import * as clone from "clone-deep";
import * as Act from "./container.action";
import { ContainerModel } from "./container.model";
import * as Buzz from "./container.buzzer";
import State from "../00.core/state";

export function reducer(
  model: ContainerModel = new ContainerModel(),
  act: Act.Actions,
  state?: State
) {
  switch (act.type) {
    case Act.UPDATE_CONTAINER:
      return Buzz.updateContainer(clone(model), act.bale);

    case Act.CREATE_CONTAINER:
      return Buzz.createContainer(clone(model), act.bale, state);

    case Act.DELETE_CONTAINER:
      return Buzz.deleteContainer(clone(model), act.bale, state);

    default:
      return state;
  }
}
