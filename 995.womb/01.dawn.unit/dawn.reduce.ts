import * as clone from "clone-deep";
import * as Act from "./dawn.action";
import { DawnModel } from "./dawn.model";
import * as Buzz from "./dawn.buzzer";
import State from "../00.core/state";

export function reducer(
  model: DawnModel = new DawnModel(),
  act: Act.Actions,
  state?: State
) {
  switch (act.type) {
    case Act.EXTRACT_FILE_DATA:
      return Buzz.extractFileData(clone(model), act.bale, state);

    case Act.REPLACE_DATA:
      return Buzz.replaceData(clone(model), act.bale, state);

    case Act.CREATE_LINK:
      return Buzz.createArteLink(clone(model), act.bale, state);

    case Act.UPDATE_DAWN:
      return Buzz.updateDawn(clone(model), act.bale, state);

    case Act.INIT_DAWN:
      return Buzz.initDawn(clone(model), act.bale, state);

    //geojson

    case Act.INIT_GEOJSON:
      return Buzz.initGeojson(clone(model), act.bale, state);

    case Act.OPEN_GEOJSON:
      return Buzz.openGeojson(clone(model), act.bale, state);

    case Act.UPDATE_GEOJSON:
      return Buzz.updateGeojson(clone(model), act.bale, state);

    case Act.RESIZE_GEOJSON:
      return Buzz.resizeGeojson(clone(model), act.bale, state);

    case Act.REPLACE_GEOJSON:
      return Buzz.replaceGeojson(clone(model), act.bale, state);

    case Act.CLOSE_GEOJSON:
      return Buzz.closeGeojson(clone(model), act.bale, state);

    default:
      return model;
  }
}
