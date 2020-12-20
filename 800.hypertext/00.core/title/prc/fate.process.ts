import * as chance from "chance";
import { Singleton } from "typescript-ioc";
import { Inject } from "typescript-ioc";

@Singleton
export default class FateProcess {
  private fate: any;
  private whim: any;

  private count: number;

  private constructor() {
    if (this.count != null) return;
    this.count = 0;
    this.add();

    //console.log("create fate process");
  }

  public add() {
    //console.log("start up fate process " + this.count);
    this.count += 1;
  }

  private wake() {
    if (this.fate == null) this.fate = new chance("19250921");
    if (this.whim == null) this.whim = new chance();
  }

  public hex() {
    this.wake();
    return this.fate.color({ format: "hex" });
  }

  public integer(min: number, max: number, whim?: boolean) {
    this.wake();
    if (whim) return this.whim.integer({ min: min, max: max });
    return this.fate.integer({ min: min, max: max });
  }

  public shuffle(list: Array<any>) {
    this.wake();
    if (list == null) return "";
    if (list.length == 0) return "";

    return this.fate.shuffle(list);
  }

  public letter = () => {
    this.wake();
    return this.whim.letter({ casing: "upper" });
  };

  public pick(list: Array<any>, flag?: Boolean) {
    if (flag == null) flag = true;

    this.wake();
    if (list == null) return "";
    if (list.length == 0) return "";

    if (flag == true) {
      return this.fate.pick(list);
    } else {
      return this.whim.pick(list);
    }
  }

  public test() {
    if (this.fate == null) this.wake();
    console.log("object " + this.fate.hashtag());
  }
}
