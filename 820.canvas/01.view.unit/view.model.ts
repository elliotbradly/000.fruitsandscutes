import View from "./fce/View.interface";
import ViewBit from "./fce/view.interface";
import CardBit from "./fce/card.bit";

export class ViewModel implements View {
  lore: any;
  contentIDX: string = "content";

  cardBitsList: CardBit[] = [];
  cardBits: any = {};

  cardUpdateCount: number = 0;

  nowCard: CardBit;
  title: string = "Perfect Beeing";
  //idx:string;
  //viewBitList: ViewBit[] = [];
  //viewBits: any = {};
}
