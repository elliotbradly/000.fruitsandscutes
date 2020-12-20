import { FocusModel } from "../focus.model";
import Focus from "../fce/focus.interface";
import FocusBit from "../fce/focus.bit.interface";
import * as moment from "moment";

export const openFocus = (cpy: FocusModel, ste: FocusModel, bal: FocusBit) => {
  var bit: FocusBit = bal;
  if (cpy.foci[bit.idx] != null) return;

  bit.x = Number(bit.x);
  bit.y = Number(bit.y);

  if (bit.x == null) bit.x = 0;
  if (bit.y == null) bit.y = 0;

  if (bit.face == null) bit.face = "E";

  if (bit.update == null) bit.update = 0;
  if (bit.clock == null) bit.clock = 0;
  if (bit.updateSpeed == null) bit.updateSpeed = 333;
  if (bit.turnSpeed == null) bit.turnSpeed = 111;

  if (bit.creation == null) bit.creation = moment().valueOf();

  if (bit.camX == null) bit.camX = 0.5;
  if (bit.camY == null) bit.camY = 0.5;

  bit.dex = cpy.fociList.length;
  cpy.foci[bit.idx] = bit.dex;
  cpy.fociList.push(bit);

  cpy.count = cpy.fociList.length;

  return cpy;
};

export const writeFocus = (cpy: FocusModel, ste: FocusModel, bal: Focus) => {
  cpy.lastUpdate = moment().valueOf();
  return cpy;
};
