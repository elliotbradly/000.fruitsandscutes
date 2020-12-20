import GridItemRenderBit from "./grid-item-render.bit.interface";

export default interface GridItemHiLiteRenderBit {
  idx: string;
  x?: number;
  y?: number;
  graph?: string;
  list: GridItemRenderBit[];
}
