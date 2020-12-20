import Arc from "../../form/arc.form";
import State from "../../state";
import PathProcess from "../prc/path.process";
import { Inject } from "typescript-ioc";

export default class IndexTitleArc extends Arc {
  @Inject private path: PathProcess;

  constructor(private state: State) {
    super(state);
  }
}
