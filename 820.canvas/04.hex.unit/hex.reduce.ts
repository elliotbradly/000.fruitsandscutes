import * as clone from "clone-deep";
import * as Act from "./hex.action";
import { HexModel } from "./hex.model";
import * as Buzz from "./hex.buzzer";

export function reducer(state: HexModel = new HexModel(), act: Act.Actions) {
  switch (act.type) {
    case Act.HEX_OPEN:
      return Buzz.createMapGrid(clone(state), state, act.bale);
    case Act.UPDATE_CENTER_CONTAINER:
      return Buzz.updateCenterContainer(clone(state), state, act.bale);
    case Act.ADD_MAP_SRC:
      return Buzz.writeMapSrcItem(clone(state), state, act.bale);
    default:
      return state;
  }
}
