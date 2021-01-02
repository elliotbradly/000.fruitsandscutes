import TitleUnit from "./00.core/title/title.unit";
import Model from "./00.core/interface/model.interface";

import Title from "./00.core/title/fce/title.interface";
import { TitleModel } from "./00.core/title/title.model";

import * as reduceFromTitle from "./00.core/title/title.reduce";

import FutureUnit from "./01.future.unit/future.unit";


import Future from "./01.future.unit/fce/future.interface";
import { FutureModel } from "./01.future.unit/future.model";


export const list: Array<any> = [TitleUnit,FutureUnit];

import * as reduceFromFuture from "./01.future.unit/future.reduce";


export const reducer: any = {
 title: reduceFromTitle.reducer,
 future : reduceFromFuture.reducer, 

};

export default class UnitData implements Model {
 auto: number = 0;

 rootData: string = "../data";
 localData: string = "./data";

 title: Title = new TitleModel();
 future : Future = new FutureModel();

}
