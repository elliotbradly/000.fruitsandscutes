import Arc from "../../00.core/form/arc.form";
import State from "../../00.core/state";
import PathProcess from "../../00.core/title/prc/path.process";
import { Inject } from "typescript-ioc";

import * as Act from "../index.action";
import IndexBit from "../fce/index.bit";


export default class IndexIndexArc extends Arc {
 @Inject private path: PathProcess;

 constructor(private state: State) {
 super(state);
 }

 init = (dat:IndexBit ) => this.path.move(this.state, Act.INIT_INDEX, dat);
 update = (dat:IndexBit ) => this.path.move(this.state, Act.UPDATE_INDEX, dat);

}
