import VerseBit from "./verse.bit";
import BeatBit from "./beat.bit";

export default interface PlotBit {
  idx?: string;
  dex: number;
  src?: string;
  nom?: string;
  vrs?: VerseBit[];
  clr?: string;
  clk?: string;
  req?: string[];
  bet?: BeatBit;
}
