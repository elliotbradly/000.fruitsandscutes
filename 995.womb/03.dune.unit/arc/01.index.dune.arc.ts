import Arc from "../../00.core/form/arc.form";
import State from "../../00.core/state";
import PathProcess from "../../00.core/title/prc/path.process";
import { Inject } from "typescript-ioc";

import * as Act from "../dune.action";
import DuneBit from "../fce/dune.bit";


export default class IndexDuneArc extends Arc {
 @Inject private path: PathProcess;

 constructor(private state: State) {
 super(state);
 }

 init = (dat:DuneBit ) => this.path.move(this.state, Act.INIT_DUNE, dat);
 update = (dat:DuneBit ) => this.path.move(this.state, Act.UPDATE_DUNE, dat);

}
