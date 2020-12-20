import { Action } from "../../00.core/interface/action.interface";
import State from "../../00.core/state";
import axios from "axios";
import * as Act from "../hex.action";
import { HexModel } from "../hex.model";
import HexBit from "../fce/hex.bit.interface";

export const LoadHex = (act: Action, state: State) => {
  if (act.type != Act.HEX_LOAD) return;

  var mod: HexModel = state.value.hex;
  var bit: HexBit = act.bale;

  if (bit.src == null) return console.log("sorry you got no source " + bit.idx);

  console.log("loading... " + bit.src);

  axios
    .get(bit.src)
    .then(response => {
      var dat = response.data;
      console.log("loaded... " + bit.src);

      var hex: HexBit = { idx: dat.nom, src: bit.src };

      hex.grid = dat.cube;
      hex.graph = dat.graphic;
      hex.size = dat.size;
      hex.map = dat.map;
      hex.h = dat.height;

      hex.right = dat.right;
      hex.left = dat.left;

      hex.top = dat.top;
      hex.btm = dat.bottom;

      var hMod: HexModel = state.value.hex;
      delete hMod.loadedLast;
      hMod.loadedLast = bit.src;
      hMod.loadedCount += 1;

      state.dispatch({
        type: Act.HEX_OPEN,
        bale: hex
      });
    })
    .catch(error => {
      console.log(error);
    });
};

export const WakeHex = (act: Action, state: State) => {
  if (act.type != Act.HEX_OPEN) return;

  var mod: HexModel = state.value.hex;
};
