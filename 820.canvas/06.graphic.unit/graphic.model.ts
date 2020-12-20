import Graphic from "./fce/Graphic.interface";
import GraphicBit from "./fce/graphic.bit.interface";

export class GraphicModel implements Graphic {
  //idx:string;
  graphicBitList: GraphicBit[] = [];
  graphicBits: any = {};

  graphicList: PIXI.Graphics[] = [];
  graphics: any = {};
}
