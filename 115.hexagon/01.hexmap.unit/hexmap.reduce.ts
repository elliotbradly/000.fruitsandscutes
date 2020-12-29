import * as clone from "clone-deep";
import * as Act from "./hexmap.action";
import { HexmapModel } from "./hexmap.model";
import * as Buzz from "./hexmap.buzzer";
import State from "../00.core/state";

export function reducer(
  model: HexmapModel = new HexmapModel(),
  act: Act.Actions,
  state?: State
) {
  switch (act.type) {
    case Act.UPDATE_HEXMAP:
      return Buzz.updateHexmap(clone(model), act.bale, state);

    case Act.ADD_HEXMAP:
      return Buzz.addHexMap(clone(model), act.bale, state);

    case Act.INIT_HEXMAP:
      return Buzz.initHexmap(clone(model), act.bale, state);

    default:
      return model;
  }
}
