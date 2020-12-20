import Bond from "./bond.interface";

export default interface GridItemBit {
  idx: string;
  x?: number;
  y?: number;
  graph?: string;
  bonds?: any;
  bondList?: Bond[];
}
