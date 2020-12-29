import * as clone from "clone-deep";
import * as Act from "./dune.action";
import { DuneModel } from "./dune.model";
import * as Buzz from "./dune.buzzer";
import State from "../00.core/state";

export function reducer(
  model: DuneModel = new DuneModel(),
  act: Act.Actions,
  state?: State
) {
  switch (act.type) {
    case Act.INIT_IMAGE:
      return Buzz.InitImage(clone(model), act.bale, state);

    case Act.OPEN_IMAGE:
      return Buzz.OpenImage(clone(model), act.bale, state);

    case Act.UPDATE_IMAGE:
      return Buzz.UpdateImage(clone(model), act.bale, state);

    case Act.RESIZE_IMAGE:
      return Buzz.ResizeImage(clone(model), act.bale, state);

    case Act.REPLACE_IMAGE:
      return Buzz.ReplaceImage(clone(model), act.bale, state);

    case Act.CLOSE_IMAGE:
      return Buzz.CloseImage(clone(model), act.bale, state);

    case Act.INIT_TEXT:
      return Buzz.InitText(clone(model), act.bale, state);

    case Act.OPEN_TEXT:
      return Buzz.OpenText(clone(model), act.bale, state);

    case Act.UPDATE_TEXT:
      return Buzz.UpdateText(clone(model), act.bale, state);

    case Act.RESIZE_TEXT:
      return Buzz.ResizeText(clone(model), act.bale, state);

    case Act.REPLACE_TEXT:
      return Buzz.ReplaceText(clone(model), act.bale, state);

    case Act.CLOSE_TEXT:
      return Buzz.CloseText(clone(model), act.bale, state);

    case Act.UPDATE_DUNE:
      return Buzz.updateDune(clone(model), act.bale, state);

    case Act.INIT_DUNE:
      return Buzz.initDune(clone(model), act.bale, state);

    default:
      return model;
  }
}
