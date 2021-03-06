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

    //artefacte

    case Act.INIT_ARTEFACTE:
      return Buzz.initArtefacte(clone(model), act.bale, state);

    case Act.OPEN_ARTEFACTE:
      return Buzz.openArtefacte(clone(model), act.bale, state);

    case Act.UPDATE_ARTEFACTE:
      return Buzz.updateArtefacte(clone(model), act.bale, state);

    case Act.RESIZE_ARTEFACTE:
      return Buzz.resizeArtefacte(clone(model), act.bale, state);

    case Act.REPLACE_ARTEFACTE:
      return Buzz.replaceArtefacte(clone(model), act.bale, state);

    case Act.CLOSE_ARTEFACTE:
      return Buzz.closeArtefacte(clone(model), act.bale, state);

    case Act.ERROR_LINK:
      return Buzz.errorLink(clone(model), act.bale, state);

    case Act.RESIZE_LINK:
      return Buzz.resizeLink(clone(model), act.bale, state);

    case Act.OPEN_SHORE:
      return Buzz.openShore(clone(model), act.bale, state);

    case Act.OPEN_WITNESS:
      return Buzz.openWitness(clone(model), act.bale, state);

    case Act.OPEN_LINK:
      return Buzz.openLink(clone(model), act.bale, state);

    case Act.REPLACE_DATA:
      return Buzz.replaceData(clone(model), act.bale, state);

    case Act.READ_ARTE:
      return Buzz.readArte(clone(model), act.bale, state);

    case Act.REPLACE_WITNESS_DATA:
      return Buzz.replaceWitnessData(clone(model), act.bale, state);

    case Act.LIST_WITNESS_CONTENT:
      return Buzz.listWitnessContent(clone(model), act.bale, state);

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
