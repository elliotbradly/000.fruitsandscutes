import TitleUnit from "./00.core/title/title.unit";
import Model from "./00.core/interface/model.interface";

import Title from "./00.core/title/fce/title.interface";
import { TitleModel } from "./00.core/title/title.model";

import * as reduceFromTitle from "./00.core/title/title.reduce";

import ScreenUnit from "./01.screen.unit/screen.unit";
import BodyUnit from "./02.body.unit/body.unit";


import Screen from "./01.screen.unit/fce/screen.interface";
import { ScreenModel } from "./01.screen.unit/screen.model";
import Body from "./02.body.unit/fce/body.interface";
import { BodyModel } from "./02.body.unit/body.model";


export const list: Array<any> = [TitleUnit,ScreenUnit,BodyUnit];

import * as reduceFromScreen from "./01.screen.unit/screen.reduce";
import * as reduceFromBody from "./02.body.unit/body.reduce";


export const reducer: any = {
 title: reduceFromTitle.reducer,
 screen : reduceFromScreen.reducer, 
body : reduceFromBody.reducer, 

};

export default class UnitData implements Model {
 auto: number = 0;

 rootData: string = "../data";
 localData: string = "./data";

 title: Title = new TitleModel();
 screen : Screen = new ScreenModel();
body : Body = new BodyModel();

}
