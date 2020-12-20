import * as clone from "clone-deep";
import * as Act from "./surface.action";
import { SurfaceModel } from "./surface.model";
import * as Buzz from "./surface.buzzer";
import State from "../00.core/state";

export function reducer(
  model: SurfaceModel = new SurfaceModel(),
  act: Act.Actions,
  state?: State
) {
  switch (act.type) {
    case Act.SURFACE_CREATE:
      return Buzz.createSurface(clone(model), act.bale, state);

    case Act.PULL_RESIZE_ALL:
      return Buzz.pullResizeAll(clone(model), act.bale, state);

    case Act.RESIZE_SURFACE:
      return Buzz.resizeSurface(clone(model), act.bale, state);

    default:
      return state;
  }
}
