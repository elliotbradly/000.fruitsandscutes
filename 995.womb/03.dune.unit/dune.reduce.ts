import * as clone from "clone-deep";
import * as Act from "./dune.action";
import { DuneModel } from "./dune.model";
import * as Buzz from "./dune.buzzer";
import State from "../00.core/state";

export function reducer(model: DuneModel = new DuneModel(), act: Act.Actions,  state?: State ) {
 switch (act.type) {
 
 case Act.UPDATE_DUNE:
 return Buzz.updateDune(clone(model), act.bale, state);

 case Act.INIT_DUNE:
 return Buzz.initDune(clone(model), act.bale, state);

 default:
 return model;
 }
}
