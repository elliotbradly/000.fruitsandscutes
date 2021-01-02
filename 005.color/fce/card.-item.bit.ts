import ViewBit from "./view.bit";
import CardChoiceBit from "./card-choice.bit";

export default interface CardItemBit {
  idx?: string;
  dex?: number;
  title?: string;
  titlesub?: string;
  body?: string;
  image?: string;
  choice?: CardChoiceBit[];
}
