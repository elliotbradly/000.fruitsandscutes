import TitleUnit from "./00.core/title/title.unit";
import Model from "./00.core/interface/model.interface";

import Title from "./00.core/title/fce/title.interface";
import { TitleModel } from "./00.core/title/title.model";

import * as reduceFromTitle from "./00.core/title/title.reduce";

import LayoutUnit from "./00.layout.unit/layout.unit";


import Layout from "./00.layout.unit/fce/layout.interface";
import { LayoutModel } from "./00.layout.unit/layout.model";


export const list: Array<any> = [TitleUnit,LayoutUnit];

import * as reduceFromLayout from "./00.layout.unit/layout.reduce";


export const reducer: any = {
 title: reduceFromTitle.reducer,
 layout : reduceFromLayout.reducer, 

};

export default class UnitData implements Model {
 auto: number = 0;

 rootData: string = "../data";
 localData: string = "./data";

 title: Title = new TitleModel();
 layout : Layout = new LayoutModel();

}
