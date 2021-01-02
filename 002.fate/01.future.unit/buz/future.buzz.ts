var fate;
var whim;

var count;

export const initFuture = (cpy: FutureModel, bal: FutureBit, ste: State) => {
  fate = new chance("092125");
  whim = new chance();

  return cpy;
};

export const selectFuture = (cpy: FutureModel, bal: FutureBit, ste: State) => {
  if (bal.val == null) bal.val = 0;

  switch (bal.val) {
    case 0:
      cpy.value = fate.pick(bal.lst);
      break;

    case 1:
      cpy.value = whim.pick(bal.lst);
      break;
  }

  return cpy;
};

export const updateFuture = (cpy: FutureModel, bal: FutureBit, ste: State) => {
  if (bal.val == null) bal.val = 0;

  var output = 0;

  switch (bal.val) {
    case 0:
      output = fate.integer({ min: Number(bal.min), max: Number(bal.max) });
      break;

    case 1:
      output = whim.integer({ min: Number(bal.min), max: Number(bal.max) });
      break;
  }

  cpy.value = output;
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

import { FutureModel } from "../future.model";
import FutureBit from "../fce/future.bit";
import State from "../../00.core/state";
import * as ActTtl from "../../00.core/title/title.action";

import * as chance from "chance";
