import TitleUnit from "./00.core/title/title.unit";
import Model from "./00.core/interface/model.interface";

import Title from "./00.core/title/fce/title.interface";
import { TitleModel } from "./00.core/title/title.model";

import * as reduceFromTitle from "./00.core/title/title.reduce";

import OutlineUnit from "./01.outline.unit/outline.unit";


import Outline from "./01.outline.unit/fce/outline.interface";
import { OutlineModel } from "./01.outline.unit/outline.model";


export const list: Array<any> = [TitleUnit,OutlineUnit];

import * as reduceFromOutline from "./01.outline.unit/outline.reduce";


export const reducer: any = {
 title: reduceFromTitle.reducer,
 outline : reduceFromOutline.reducer, 

};

export default class UnitData implements Model {
 auto: number = 0;

 rootData: string = "../data";
 localData: string = "./data";

 title: Title = new TitleModel();
 outline : Outline = new OutlineModel();

}
