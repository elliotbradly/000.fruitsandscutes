import * as clone from "clone-deep";
import * as Act from "./hue.action";
import { HueModel } from "./hue.model";
import * as Buzz from "./hue.buzzer";
import State from "../00.core/state";

export function reducer(model: HueModel = new HueModel(), act: Act.Actions,  state?: State ) {
 switch (act.type) {
 
 case Act.UPDATE_HUE:
 return Buzz.updateHue(clone(model), act.bale, state);

 case Act.INIT_HUE:
 return Buzz.initHue(clone(model), act.bale, state);

 default:
 return model;
 }
}
