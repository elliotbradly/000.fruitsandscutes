export const initShore = (cpy: ShoreModel, bal: ShoreBit, ste: State) => {
  //last time
  return cpy;
};

export const updateShore = (cpy: ShoreModel, bal: ShoreBit, ste: State) => {
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

import { ShoreModel } from "../shore.model";
import ShoreBit from "../fce/shore.interface";
import State from "../../00.core/state";
import * as ActTtl from "../../00.core/title/title.action";
