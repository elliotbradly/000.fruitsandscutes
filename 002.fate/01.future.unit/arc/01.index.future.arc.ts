import Arc from "../../00.core/form/arc.form";
import State from "../../00.core/state";
import PathProcess from "../../00.core/title/prc/path.process";
import { Inject } from "typescript-ioc";

import * as Act from "../future.action";
import FutureBit from "../fce/future.bit";


export default class IndexFutureArc extends Arc {
 @Inject private path: PathProcess;

 constructor(private state: State) {
 super(state);
 }

 init = (dat:FutureBit ) => this.path.move(this.state, Act.INIT_FUTURE, dat);
 update = (dat:FutureBit ) => this.path.move(this.state, Act.UPDATE_FUTURE, dat);

}
