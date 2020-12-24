export const initDawn = (cpy: DawnModel, bal: DawnBit, ste: State) => {
  return cpy;
};

export const updateDawn = (cpy: DawnModel, bal: DawnBit, ste: State) => {
  return cpy;
};

var query = (ste, pvt, hrk) => {
  var val = ste.value.title[pvt].query(hrk);
  if (val == null) return console.error("no val for " + pvt + " : " + hrk);
  return val;
};

var patch = (ste, type, bale) => ste.dispatch({ type, bale });

var pivot = (ste, pvt, hke, mth, dat?) => {
  ste.dispatch({
    type: ActTtl.PULL_PIVOT,
    bale: {
      pvt,
      hke,
      mth,
      dat,
    },
  });
};

import { DawnModel } from "../dawn.model";
import DawnBit from "../fce/dawn.interface";
import State from "../../00.core/state";
import * as ActTtl from "../../00.core/title/title.action";
