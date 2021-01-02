import Arc from "../../00.core/form/arc.form";
import State from "../../00.core/state";
import PathProcess from "../../00.core/title/prc/path.process";
import { Inject } from "typescript-ioc";

import * as Act from "../hue.action";
import HueBit from "../fce/hue.bit";


export default class IndexHueArc extends Arc {
 @Inject private path: PathProcess;

 constructor(private state: State) {
 super(state);
 }

 init = (dat:HueBit ) => this.path.move(this.state, Act.INIT_HUE, dat);
 update = (dat:HueBit ) => this.path.move(this.state, Act.UPDATE_HUE, dat);

}
