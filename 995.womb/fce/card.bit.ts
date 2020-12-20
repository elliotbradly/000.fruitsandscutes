import ViewBit from "./view.bit";
import CardItemBit from "./card.-item.bit";

export default interface CardBit {
  idx: string;
  dex?: number;
  dat?: CardItemBit[];
}
