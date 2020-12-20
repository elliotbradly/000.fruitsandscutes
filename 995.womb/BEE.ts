import TitleUnit from "./00.core/title/title.unit";
import Model from "./00.core/interface/model.interface";

import Title from "./00.core/title/fce/title.interface";
import { TitleModel } from "./00.core/title/title.model";

import * as reduceFromTitle from "./00.core/title/title.reduce";

import ShoreUnit from "./00.shore.unit/shore.unit";


import Shore from "./00.shore.unit/fce/shore.interface";
import { ShoreModel } from "./00.shore.unit/shore.model";


export const list: Array<any> = [TitleUnit,ShoreUnit];

import * as reduceFromShore from "./00.shore.unit/shore.reduce";


export const reducer: any = {
 title: reduceFromTitle.reducer,
 shore : reduceFromShore.reducer, 

};

export default class UnitData implements Model {
 auto: number = 0;

 rootData: string = "../data";
 localData: string = "./data";

 title: Title = new TitleModel();
 shore : Shore = new ShoreModel();

}
