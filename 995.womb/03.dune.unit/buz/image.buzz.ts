export const InitImage = (cpy: DuneModel, bal: DuneBit, ste: State) => {
  debugger;
  return cpy;
};

export const OpenImage = (cpy: DuneModel, bal: DuneBit, ste: State) => {
  debugger;
  return cpy;
};

export const UpdateImage = (cpy: DuneModel, bal: DuneBit, ste: State) => {
  debugger;
  return cpy;
};

export const ResizeImage = (cpy: DuneModel, bal: DuneBit, ste: State) => {
  debugger;
  return cpy;
};

export const ReplaceImage = (cpy: DuneModel, bal: DuneBit, ste: State) => {
  debugger;
  return cpy;
};

export const CloseImage = (cpy: DuneModel, bal: DuneBit, ste: State) => {
  debugger;
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

import { DuneModel } from "../dune.model";
import DuneBit from "../fce/dune.bit";
import State from "../../00.core/state";
import * as ActTtl from "../../00.core/title/title.action";
