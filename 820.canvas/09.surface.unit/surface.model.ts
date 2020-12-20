import Surface from "./fce/Surface.interface";
import SurfaceBit from "./fce/surface.bit.interface";
import * as PIXI from "pixi.js";

export class SurfaceModel implements Surface {
  //idx:string;
  surfaceBitList: SurfaceBit[] = [];
  surfaceBits: any = {};

  surfaceList: PIXI.Application[] = [];
  surfaces: any = {};

  canvasList: HTMLElement[] = [];
  canvases: any = {};
}
