import { TitleModel } from "../title.model";
import Link from "../../interface/link.interface";
import Pivot from "../../interface/pivot.interface";
import State from "../../state";
import PivotBit from "../../interface/pivot-bit.interface";

export const updatePath = (cpy: TitleModel, bale: Link) => {
  cpy.path = bale;
  return cpy;
};

export const pushPivot = (cpy: TitleModel, bal: Pivot, ste: State) => {
  if (bal.idx == null) return console.error("no pivot idx for " + bal.idx);
  if (bal.idx == "path") return console.error("path already here for idx");
  if (bal.datIDX.bee == null)
    return console.error("no idx bee idx for " + bal.idx);
  cpy[bal.idx] = bal.datIDX.bee;
  console.log("pivot " + bal.idx + " addded");

  if (bal.src == "path") return console.error("path already here for src");
  if (bal.src == null) return;
  if (bal.datSRC.bee == null)
    return console.error("no src bee idx for " + bal.idx);

  bal.datIDX.bee.value.title[bal.src] = bal.datSRC.bee;
  console.log("pivot " + bal.src + " addded");

  return cpy;
};

export const pullPivot = (cpy: TitleModel, bal: PivotBit, ste: State) => {
  if (cpy[bal.pvt] == null) return console.error(bal.pvt + "no exist");
  cpy[bal.pvt].hike(bal.hke, bal.mth, bal.dat);
  return cpy;
};
