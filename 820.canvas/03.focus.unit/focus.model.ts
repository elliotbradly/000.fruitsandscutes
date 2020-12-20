import Focus from "./fce/Focus.interface";
import FocusBit from "./fce/focus.bit.interface";

export class FocusModel implements Focus {
  fociList: FocusBit[] = [];
  foci: any = {};
  count: number = 0; //gives you the number of foci present
  lastUpdate: number = 0;

  hero: string;
}
