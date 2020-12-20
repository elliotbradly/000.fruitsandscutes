import { Action } from "../../00.core/interface/action.interface";
import State from "../../00.core/state";

import * as Act from "../focus.action";
import * as HexAct from "../../04.hex.unit/hex.action";

import { FocusModel } from "../focus.model";
import * as Honeycomb from "honeycomb-grid";
import * as moment from "moment";
import { HexModel } from "../../04.hex.unit/hex.model";
import FocusBit from "../fce/focus.bit.interface";
import BondBit from "../fce/bond.bit.interface";
import * as direct from "../fce/direction-all.interface";
import { GraphicModel } from "../../06.graphic.unit/graphic.model";
import FocusRenderBit from "../fce/focus-render.bit.interface";

export const RenderFocus = (act: Action, state: State) => {
  if (act.type != Act.RENDER_FOCUS) return;

  console.log("beginning to rendering focus ");
  console.log("------");

  var yMod = 0.61;

  var gMod: GraphicModel = state.value.graphic;
  var hMod: HexModel = state.value.hex;
  var fMod: FocusModel = state.value.focus;

  var renderBit: FocusRenderBit = act.bale;
  //console.log("render bit " + JSON.stringify(renderBit));

  var focusBit: FocusBit = fMod.fociList[fMod.foci[renderBit.idx]];
  console.log("focus bit " + JSON.stringify(focusBit));

  var hexLOC = focusBit.hex;
  // console.log("laod " + gridLOC);

  var hexBit = hMod.hexBitList[hMod.hexBits[hexLOC]];
  if (hexBit == null) return console.error("no grid byte " + hexBit);
  //console.log("grid bit " + JSON.stringify(gridBit));

  if (focusBit == null)
    return console.error("focus bit " + renderBit.idx + " not present");

  var hexIDX = focusBit.hex + "-" + focusBit.x + "-" + focusBit.y;
  var hex: Honeycomb.Hex<any> = hMod.hc.hexList[hMod.hc.hexs[hexIDX]];

  if (hex == null) return console.log("hex " + hexIDX + " not present");

  console.log("!!!!!!!!!!!!!!!!!!!!! " + hex.hex);

  if (hexBit.map == null)
    return console.warn("no grid bit map " + renderBit.idx);
  //if (gridBit.map.forEach == null)
  //  return console.log("no grid bit map for each " + renderBit.idx);

  //for (var key in gridBit.map) {
  //}

  const point = hex.toPoint();
  const center = hex.center().add(point);

  var graph = gMod.graphicList[gMod.graphics[renderBit.graphic]];
  if (graph == null)
    return console.log("you have no graphic for " + renderBit.graphic);

  graph.clear();
  graph.lineStyle(5, 0x0000ff);
  graph.beginFill(0xff00ff, 1);
  graph.endFill();

  var face;

  const corners = hex.corners().map(corner => corner.add(point));

  switch (focusBit.face) {
    case direct.NORTH_WEST:
      face = [corners[4], corners[5]];
      break;
    case direct.NORTH_EAST:
      face = [corners[5], corners[0]];
      break;
    case direct.EAST:
      face = [corners[0], corners[1]];
      break;
    case direct.SOUTH_EAST:
      face = [corners[1], corners[2]];
      break;
    case direct.SOUTH_WEST:
      face = [corners[2], corners[3]];
      break;
    case direct.WEST:
      face = [corners[3], corners[4]];
      break;
    default:
      console.log("nothig");
  }

  if (face == null) return console.log("no face");

  graph.lineStyle(10, 0x00ff00);
  graph.moveTo(face[0].x, face[0].y * yMod);
  graph.lineTo(face[1].x, face[1].y * yMod);
};

export const UpdateFocus = (act: Action, state: State) => {
  if (act.type != Act.UPDATE_FOCUS) return;

  var fMod: FocusModel = state.value.focus;
  var hMod: HexModel = state.value.hex;

  var bit: FocusBit = fMod.fociList[fMod.foci[act.bale.idx]];
  if (bit == null) return console.log("can not find bit for " + act.bale.idx);
  bit.move = act.bale.move;
  if (bit.move == null) return console.log("can not  move for " + act.bale.idx);

  //console.log("move bit " + JSON.stringify(bit));

  var now = moment().valueOf();
  var next = bit.update + bit.updateSpeed;
  if (bit.turn != null) next = bit.update + bit.turnSpeed;

  //console.log("Before turn check " + JSON.stringify(bit));

  if (next > now) return checkTurn(bit, act.bale, state);

  //console.log("after turn check " + JSON.stringify(bit));

  bit.update = now;

  //console.log("show me bit " + JSON.stringify(bit));

  state.dispatch({
    type: HexAct.HEX_RANGE_OPN,
    bale: bit
  });

  //  console.log("shown me bit " + JSON.stringify(bit));

  //console.log("what kind of bit do you have " + JSON.stringify(bit));

  var bond: BondBit;

  switch (bit.move) {
    case direct.EAST:
      bond = moveEast(bit);
      break;

    case direct.WEST:
      bond = moveWest(bit);
      break;

    case direct.NORTH:
      bond = moveNorth(bit);
      break;

    case direct.SOUTH:
      bond = moveSouth(bit);
      break;
  }

  //console.log("what kind of bond do you have " + JSON.stringify(bond));

  if (bond != null) {
    bit.x = bond.x;
    bit.y = bond.y;
    bit.turn = null;
  }

  if (bit.turn != null) bit.face = bit.turn;

  //console.log("before write focust " + JSON.stringify(bit));

  state.dispatch({
    type: Act.WRITE_FOCUS,
    bale: bit
  });

  checkTurn(bit, act.bale, state);

  //console.log("direct " + item.direct);
  //console.log("sides " + JSON.stringify(bit.bondList));
};

var checkTurn = (bit: FocusBit, item: FocusBit, state: State) => {
  if (bit.turn == null) return console.log("no turn");
  // return;

  requestAnimationFrame(() => {
    state.dispatch({
      type: Act.UPDATE_FOCUS,
      bale: item
    });
  });
};

var moveEast = (bit: FocusBit) => {
  console.log("moving west " + bit.move + "::: " + bit.face);

  if (bit.move == bit.face) return advance(bit);
  turn(bit, direct.EAST);
};

var moveWest = (bit: FocusBit) => {
  console.log("moving west " + bit.move + "::: " + bit.face);

  if (bit.move == bit.face) return advance(bit);
  turn(bit, direct.WEST);
};

var moveNorth = (bit: FocusBit) => {
  if (bit.face == direct.NORTH_WEST) return advance(bit);
  if (bit.face == direct.NORTH_EAST) return advance(bit);
  turn(bit, direct.NORTH);
};

var moveSouth = (bit: FocusBit) => {
  if (bit.face == direct.SOUTH_WEST) return advance(bit);
  if (bit.face == direct.SOUTH_EAST) return advance(bit);
  turn(bit, direct.SOUTH);
};

var advance = (bit: FocusBit) => {
  // console.log("advance " + JSON.stringify(bit));

  if (bit == null) return;
  if (bit.face == null) return;

  bit.turn = null;
  if (bit.bonds == null) return;
  return bit.bonds[bit.face];
};

var turn = (bit: FocusBit, target) => {
  switch (bit.face) {
    case direct.EAST:
      if (target == direct.WEST) bit.turn = direct.SOUTH_EAST;
      if (target == direct.SOUTH) bit.turn = direct.SOUTH_EAST;
      if (target == direct.NORTH) bit.turn = direct.NORTH_EAST;

      //if (target == direct.WEST) bit.face = direct.SOUTH_EAST

      break;

    case direct.SOUTH_EAST:
      if (target == direct.WEST) bit.turn = direct.SOUTH_WEST;
      if (target == direct.EAST) bit.turn = direct.EAST;
      if (target == direct.NORTH) bit.turn = direct.EAST;

      //if (target == direct.WEST) bit.face = direct.SOUTH_EAST

      break;

    case direct.SOUTH_WEST:
      if (target == direct.WEST) bit.turn = direct.WEST;
      if (target == direct.EAST) bit.turn = direct.SOUTH_EAST;
      break;

    case direct.WEST:
      if (target == direct.EAST) bit.turn = direct.SOUTH_WEST;
      if (target == direct.SOUTH) bit.turn = direct.SOUTH_WEST;
      if (target == direct.NORTH) bit.turn = direct.NORTH_WEST;

      break;

    case direct.NORTH_WEST:
      if (target == direct.EAST) bit.turn = direct.NORTH_EAST;
      if (target == direct.WEST) bit.turn = direct.WEST;
      break;

    case direct.NORTH_EAST:
      if (target == direct.WEST) bit.turn = direct.NORTH_WEST;
      if (target == direct.EAST) bit.turn = direct.EAST;
      if (target == direct.SOUTH) bit.turn = direct.EAST;
      break;

    case direct.NORTH:
      moveNorth(bit);
      break;

    case direct.SOUTH:
      moveSouth(bit);
      break;
  }

  //console.log("show me the turn " + bit.turn);
};
