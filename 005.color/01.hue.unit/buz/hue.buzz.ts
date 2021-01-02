var colorListLoc: string = "./src/core/data/color/colornames.json";

var colorList: Array<{ name: string; hex: string }>;
var colors: any;
var nearest: any;

export const makeHue = (cpy: HueModel, bal: HueBit, ste: State) => {
  var list = fromHexToRGB(bal.idx);
  var color = Color.rgb(list);

  //var val0 = this.fate.integer(0, 7);
  //var val1 = this.fate.integer(0, 33) * 0.01;

  pivot(ste, PVT.CLR, HkeFtr.INDEX, B.UPDATE, { min: 0, max: 7 });
  var val0 = query(ste, PVT.CLR, HrkFtr.VALUE);

  pivot(ste, PVT.CLR, HkeFtr.INDEX, B.UPDATE, { min: 0, max: 33 });
  var val1 = query(ste, PVT.CLR, HrkFtr.VALUE) * 0.01;

  switch (val0) {
    case 0:
      color = color.lighten(val1);
      break;
    case 1:
      color = color.darken(val1);
      break;
    case 2:
      color = color.saturate(val1);
      break;
    case 3:
      color = color.desaturate(val1);
      break;
    case 4:
      color = color.whiten(val1);
      break;
    case 5:
      color = color.blacken(val1);
      break;
    case 6:
      color = color.fade(val1);
      break;
    case 7:
      color = color.opaquer(val1);
      break;
  }

  var repect = color.rgb().array();
  var word = convert.rgb.hex([repect[0], repect[1], repect[2]]);

  cpy.color = near(word);
};

export const matchHue = (cpy: HueModel, bal: HueBit, ste: State) => {
  var options = {
    shouldSort: true,
    threshold: 0.6,
    location: 0,
    distance: 100,
    maxPatternLength: 32,
    minMatchCharLength: 1,
    keys: ["name", "hex"],
  };
  var fuse = new Fuse(colorList, options); // "list" is the item array
  var result = fuse.search(bal.idx);
  var max = bal.val;

  if (max == null) max = 10;

  if (result.length < max) return result;

  var list = [];

  for (var i = 0; i < max; i++) {
    pivot(ste, PVT.FTE, HkeFtr.INDEX, B.SELECT, { lst: result });
    list.push(query(ste, PVT.FTE, HrkFtr.VALUE));
  }

  cpy.matchList = list;

  return cpy;
};

export const initHue = (cpy: HueModel, bal: HueBit, ste: State) => {
  if (colorList != null) return;
  colorList = FS.readJSONSync(colorListLoc);
  colors = colorList.reduce(
    (o, { name, hex }) => Object.assign(o, { [name]: hex }),
    {}
  );

  nearest = nearestColor.from(colors);
  console.log(colorList.length + " after color titles loaded ");

  return cpy;
};

export const updateHue = (cpy: HueModel, bal: HueBit, ste: State) => {
  return cpy;
};

var fromHexToRGB = (hex: string) => {
  return convert.hex.rgb(hex);
};

var fromHexToCMYK = (hex: string) => {
  return convert.hex.cmyk(hex);
};

var near = (clr: string) => {
  return nearest(clr);
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

import { HueModel } from "../hue.model";
import HueBit from "../fce/hue.bit";
import State from "../../00.core/state";
import * as ActTtl from "../../00.core/title/title.action";

import * as FS from "fs-extra";

import * as PVT from "../../val/pivot";

import * as nearestColor from "nearest-color";
import * as Color from "color";
import * as Fuse from "fuse.js";
import Vibrant = require("node-vibrant");
import convert = require("color-convert");

import * as B from "../../00.core/constant/BASIC";

import * as HkeFtr from "../../hke/future.hike";
import * as HrkFtr from "../../hrk/future.hark";
