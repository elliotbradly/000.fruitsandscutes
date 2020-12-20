import PlotBit from "./plot.bit";

export default interface SceneBit {
  idx: string;
  now: number;
  dex?: number;
  plt?: PlotBit[];
  tle: string;
  sub?: string;
  vix?: string;
}
