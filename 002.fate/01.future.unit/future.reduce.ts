import * as clone from "clone-deep";
import * as Act from "./future.action";
import { FutureModel } from "./future.model";
import * as Buzz from "./future.buzzer";
import State from "../00.core/state";

export function reducer(model: FutureModel = new FutureModel(), act: Act.Actions,  state?: State ) {
 switch (act.type) {
 
 case Act.UPDATE_FUTURE:
 return Buzz.updateFuture(clone(model), act.bale, state);

 case Act.INIT_FUTURE:
 return Buzz.initFuture(clone(model), act.bale, state);

 default:
 return model;
 }
}
