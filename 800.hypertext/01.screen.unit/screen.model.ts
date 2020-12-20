import Screen from "./fce/Screen.interface";
import ScreenBit from "./fce/screen.interface";

export class ScreenModel implements Screen {
  //idx:string;
  //screenBitList: ScreenBit[] = [];
  //screenBits: any = {};
  ready: boolean;

  lore: any;
  show: any;

  layout: any;
  root: any;

  compile: string;

  navDex: number = 0;
}
