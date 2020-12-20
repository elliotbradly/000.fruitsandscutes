import * as clone from "clone-deep";
import * as Act from "./shore.action";
import { ShoreModel } from "./shore.model";
import * as Buzz from "./shore.buzzer";
import State from "../00.core/state";

export function reducer(model: ShoreModel = new ShoreModel(), act: Act.Actions,  state?: State ) {
 switch (act.type) {
 
 case Act.UPDATE_SHORE:
 return Buzz.updateShore(clone(model), act.bale, state);

 case Act.INIT_SHORE:
 return Buzz.initShore(clone(model), act.bale, state);

 default:
 return model;
 }
}
