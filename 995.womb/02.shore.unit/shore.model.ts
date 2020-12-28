import Shore from "./fce/Shore.interface";
import ShoreBit from "./fce/shore.interface";
import * as PVT from "../val/pivot";

export class ShoreModel implements Shore {
  pivot: string = PVT.WMB;
  //idx:string;
  //shoreBitList: ShoreBit[] = [];
  //shoreBits: any = {};
  witnessList: any[];
  witnessDex: number = 0;
  navDex: number = 0;
  arteData: any;
}
