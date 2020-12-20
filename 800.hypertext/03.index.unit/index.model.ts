import Index from "./fce/Index.interface";
import IndexBit from "./fce/index.interface";

export class IndexModel implements Index {
  //idx:string;
  //indexBitList: IndexBit[] = [];
  //indexBits: any = {};

  navList: string[] = ["Earth", "Lore", "Trade"];

  pageIDX: string = "indexContent";
  navIDX: string = "indexNav";
  btnIDX: string = "indexBtn";

  navDex: number = 0;
}
