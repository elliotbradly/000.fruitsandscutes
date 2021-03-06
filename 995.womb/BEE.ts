import TitleUnit from "./00.core/title/title.unit";
import Model from "./00.core/interface/model.interface";

import Title from "./00.core/title/fce/title.interface";
import { TitleModel } from "./00.core/title/title.model";

import * as reduceFromTitle from "./00.core/title/title.reduce";

import DawnUnit from "./01.dawn.unit/dawn.unit";
import ShoreUnit from "./02.shore.unit/shore.unit";
import DuneUnit from "./03.dune.unit/dune.unit";


import Dawn from "./01.dawn.unit/fce/dawn.interface";
import { DawnModel } from "./01.dawn.unit/dawn.model";
import Shore from "./02.shore.unit/fce/shore.interface";
import { ShoreModel } from "./02.shore.unit/shore.model";
import Dune from "./03.dune.unit/fce/dune.interface";
import { DuneModel } from "./03.dune.unit/dune.model";


export const list: Array<any> = [TitleUnit,DawnUnit,ShoreUnit,DuneUnit];

import * as reduceFromDawn from "./01.dawn.unit/dawn.reduce";
import * as reduceFromShore from "./02.shore.unit/shore.reduce";
import * as reduceFromDune from "./03.dune.unit/dune.reduce";


export const reducer: any = {
 title: reduceFromTitle.reducer,
 dawn : reduceFromDawn.reducer, 
shore : reduceFromShore.reducer, 
dune : reduceFromDune.reducer, 

};

export default class UnitData implements Model {
 auto: number = 0;

 rootData: string = "../data";
 localData: string = "./data";

 title: Title = new TitleModel();
 dawn : Dawn = new DawnModel();
shore : Shore = new ShoreModel();
dune : Dune = new DuneModel();

}
