import TitleUnit from "./00.core/title/title.unit";
import Model from "./00.core/interface/model.interface";

import Title from "./00.core/title/fce/title.interface";
import { TitleModel } from "./00.core/title/title.model";

import * as reduceFromTitle from "./00.core/title/title.reduce";

import UrlUnit from "./01.url.unit/url.unit";


import Url from "./01.url.unit/fce/url.interface";
import { UrlModel } from "./01.url.unit/url.model";


export const list: Array<any> = [TitleUnit,UrlUnit];

import * as reduceFromUrl from "./01.url.unit/url.reduce";


export const reducer: any = {
 title: reduceFromTitle.reducer,
 url : reduceFromUrl.reducer, 

};

export default class UnitData implements Model {
 auto: number = 0;

 rootData: string = "../data";
 localData: string = "./data";

 title: Title = new TitleModel();
 url : Url = new UrlModel();

}
