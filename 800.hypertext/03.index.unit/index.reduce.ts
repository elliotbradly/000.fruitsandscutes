import * as clone from "clone-deep";
import * as Act from "./index.action";
import { IndexModel } from "./index.model";
import * as Buzz from "./index.buzzer";
import State from "../00.core/state";

export function reducer(model: IndexModel = new IndexModel(), act: Act.Actions,  state?: State ) {
 switch (act.type) {
 
 case Act.UPDATE_INDEX:
 return Buzz.updateIndex(clone(model), act.bale, state);

 case Act.INIT_INDEX:
 return Buzz.initIndex(clone(model), act.bale, state);

 default:
 return model;
 }
}
