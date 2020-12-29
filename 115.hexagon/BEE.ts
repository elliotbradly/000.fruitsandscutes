import TitleUnit from "./00.core/title/title.unit";
import Model from "./00.core/interface/model.interface";

import Title from "./00.core/title/fce/title.interface";
import { TitleModel } from "./00.core/title/title.model";

import * as reduceFromTitle from "./00.core/title/title.reduce";

import HexmapUnit from "./01.hexmap.unit/hexmap.unit";


import Hexmap from "./01.hexmap.unit/fce/hexmap.interface";
import { HexmapModel } from "./01.hexmap.unit/hexmap.model";


export const list: Array<any> = [TitleUnit,HexmapUnit];

import * as reduceFromHexmap from "./01.hexmap.unit/hexmap.reduce";


export const reducer: any = {
 title: reduceFromTitle.reducer,
 hexmap : reduceFromHexmap.reducer, 

};

export default class UnitData implements Model {
 auto: number = 0;

 rootData: string = "../data";
 localData: string = "./data";

 title: Title = new TitleModel();
 hexmap : Hexmap = new HexmapModel();

}
