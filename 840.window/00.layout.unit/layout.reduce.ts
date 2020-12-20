import * as clone from "clone-deep";
import * as Act from "./layout.action";
import { LayoutModel } from "./layout.model";
import * as Buzz from "./layout.buzzer";
import State from "../00.core/state";

export function reducer(
  model: LayoutModel = new LayoutModel(),
  act: Act.Actions,
  state?: State
) {
  switch (act.type) {
    case Act.RESIZE_LAYOUT:
      return Buzz.resizeLayout(clone(model), act.bale, state);

    case Act.READ_CONTENT:
      return Buzz.readContent(clone(model), act.bale, state);

    case Act.ADD_ELEMENT:
      return Buzz.addElement(clone(model), act.bale, state);

    case Act.UPDATE_LAYOUT:
      return Buzz.updateLayout(clone(model), act.bale, state);

    case Act.MAKE_COMPONENT:
      return Buzz.makeComponent(clone(model), act.bale, state);

    case Act.CREATE_GROUP:
      return Buzz.createGroup(clone(model), act.bale, state);

    case Act.INIT_LAYOUT:
      return Buzz.initLayout(clone(model), act.bale, state);

    case Act.OPEN_LAYOUT:
      return Buzz.openLayout(clone(model), act.bale, state);

    case Act.REPLACE_GOLDEN:
      return Buzz.replaceGolden(clone(model), act.bale, state);

    case Act.EXTRACT_ROOT:
      return Buzz.extractRoot(clone(model), act.bale, state);

    default:
      return model;
  }
}
