export default interface NavBit {
  idx?: string;
  nom?: string;
  src?: string; //template from where the informaton flows
  dex?: number; //current active button
  lst?: string[]; //labels of the buttons
  shw?: string; //active class
  hde?: string; //unactive class
  val?: number;
  btn?: string;
  act?: string;
  mod?: any;
}
