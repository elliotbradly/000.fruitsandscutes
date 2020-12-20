import { Singleton } from "typescript-ioc";
import State from "../../state";
import * as B from "../../constant/BASIC";
import * as Act from "../title.action";
import * as S from "string";

import * as queryString from "query-string";
import Path from "../../form/path.form";

@Singleton
export default class PathProcess {
  private constructor() {}

  move = (state: State, type: string, bale?: any) => {
    if (bale != null && bale.dat != null) {
      if (typeof bale.dat === "string" || bale.dat instanceof String) {
        if (bale.dat.includes("object$$$:") == true) {
          var item = S(bale.dat).replace("object$$$:", "");
          bale.dat = JSON.parse(item);
        }
      }
    }

    state.dispatch({
      type: type,
      bale: bale,
    });
  };

  link = (ste: State, pth: string, mth?: string, dat?: any, spd?: number) => {
    if (mth == null) mth = B.READ;
    if (spd == null) spd = 1;
    //remember you can not handle nested objects

    if (dat != null) pth += "?" + queryString.stringify(dat);

    if (spd == null) spd = 0;
    if (spd == 0) {
      ste.dispatch({
        type: Act.UPDATE_PATH,
        bale: new Path(pth, mth),
      });

      return;
    }
    if (spd == 1) {
      process.nextTick(() => {
        ste.dispatch({
          type: Act.UPDATE_PATH,
          bale: new Path(pth, mth),
        });
      });
    } else {
      setTimeout(() => {
        ste.dispatch({
          type: Act.UPDATE_PATH,
          bale: new Path(pth, mth),
        });
      }, spd);
    }
  };
}
