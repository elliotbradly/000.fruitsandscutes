import Text from "./fce/Text.interface";
import TextBit from "./fce/text.bit.interface";

export class TextModel implements Text {
  //idx:string;
  textBitList: TextBit[] = [];
  textBits: any = {};

  textList: PIXI.Text[] = [];
  texts: any = {};
}
