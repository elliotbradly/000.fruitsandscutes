import TitleUnit from "./00.core/title/title.unit";
import Model from "./00.core/interface/model.interface";

import Title from "./00.core/title/fce/title.interface";
import { TitleModel } from "./00.core/title/title.model";

import * as reduceFromTitle from "./00.core/title/title.reduce";

import HueUnit from "./01.hue.unit/hue.unit";


import Hue from "./01.hue.unit/fce/hue.interface";
import { HueModel } from "./01.hue.unit/hue.model";


export const list: Array<any> = [TitleUnit,HueUnit];

import * as reduceFromHue from "./01.hue.unit/hue.reduce";


export const reducer: any = {
 title: reduceFromTitle.reducer,
 hue : reduceFromHue.reducer, 

};

export default class UnitData implements Model {
 auto: number = 0;

 rootData: string = "../data";
 localData: string = "./data";

 title: Title = new TitleModel();
 hue : Hue = new HueModel();

}
