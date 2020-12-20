import TitleUnit from "./00.core/title/title.unit";
import Model from "./00.core/interface/model.interface";

import Title from "./00.core/title/fce/title.interface";
import { TitleModel } from "./00.core/title/title.model";

import * as reduceFromTitle from "./00.core/title/title.reduce";

import ScreenUnit from "./01.screen.unit/screen.unit";
import BodyUnit from "./02.body.unit/body.unit";
import IndexUnit from "./03.index.unit/index.unit";
//import MirrorUnit from "./04.mirror.unit/mirror.unit";

import Screen from "./01.screen.unit/fce/screen.interface";
import { ScreenModel } from "./01.screen.unit/screen.model";
import Body from "./02.body.unit/fce/body.interface";
import { BodyModel } from "./02.body.unit/body.model";
import Index from "./03.index.unit/fce/index.interface";
import { IndexModel } from "./03.index.unit/index.model";
//import Mirror from "./04.mirror.unit/fce/mirror.interface";
//import { MirrorModel } from "./04.mirror.unit/mirror.model";

export const list: Array<any> = [
  TitleUnit,
  ScreenUnit,
  BodyUnit,
  IndexUnit,
  //MirrorUnit,
];

import * as reduceFromScreen from "./01.screen.unit/screen.reduce";
import * as reduceFromBody from "./02.body.unit/body.reduce";
import * as reduceFromIndex from "./03.index.unit/index.reduce";
//import * as reduceFromMirror from "./04.mirror.unit/mirror.reduce";

export const reducer: any = {
  title: reduceFromTitle.reducer,
  screen: reduceFromScreen.reducer,
  body: reduceFromBody.reducer,
  index: reduceFromIndex.reducer,
  //mirror: reduceFromMirror.reducer,
};

export default class UnitData implements Model {
  auto: number = 0;

  rootData: string = "../data";
  localData: string = "./data";

  title: Title = new TitleModel();
  screen: Screen = new ScreenModel();
  body: Body = new BodyModel();
  index: Index = new IndexModel();
  //mirror: Mirror = new MirrorModel();
}
