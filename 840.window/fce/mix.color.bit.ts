import RBGBit from "./rgb.color.bit";
import ColorBit from "./color.bit";

export default interface MixBit {
  name?: string;
  value?: string;
  hex?: string;
  rgb?: RBGBit;
  distance?: number;
  src0?: ColorBit;
  src1?: ColorBit;
}
