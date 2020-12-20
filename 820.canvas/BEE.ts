import TitleUnit from "./00.core/title/title.unit";
import Model from "./00.core/interface/model.interface";

import Title from "./00.core/title/fce/title.interface";
import { TitleModel } from "./00.core/title/title.model";

import * as reduceFromTitle from "./00.core/title/title.reduce";

import ViewUnit from "./01.view.unit/view.unit";
import FocusUnit from "./03.focus.unit/focus.unit";
import HexUnit from "./04.hex.unit/hex.unit";
import SpriteUnit from "./05.sprite.unit/sprite.unit";
import GraphicUnit from "./06.graphic.unit/graphic.unit";
import TextUnit from "./07.text.unit/text.unit";
import ContainerUnit from "./08.container.unit/container.unit";
import SurfaceUnit from "./09.surface.unit/surface.unit";


import View from "./01.view.unit/fce/view.interface";
import { ViewModel } from "./01.view.unit/view.model";
import Focus from "./03.focus.unit/fce/focus.interface";
import { FocusModel } from "./03.focus.unit/focus.model";
import Hex from "./04.hex.unit/fce/hex.interface";
import { HexModel } from "./04.hex.unit/hex.model";
import Sprite from "./05.sprite.unit/fce/sprite.interface";
import { SpriteModel } from "./05.sprite.unit/sprite.model";
import Graphic from "./06.graphic.unit/fce/graphic.interface";
import { GraphicModel } from "./06.graphic.unit/graphic.model";
import Text from "./07.text.unit/fce/text.interface";
import { TextModel } from "./07.text.unit/text.model";
import Container from "./08.container.unit/fce/container.interface";
import { ContainerModel } from "./08.container.unit/container.model";
import Surface from "./09.surface.unit/fce/surface.interface";
import { SurfaceModel } from "./09.surface.unit/surface.model";


export const list: Array<any> = [TitleUnit,ViewUnit,FocusUnit,HexUnit,SpriteUnit,GraphicUnit,TextUnit,ContainerUnit,SurfaceUnit];

import * as reduceFromView from "./01.view.unit/view.reduce";
import * as reduceFromFocus from "./03.focus.unit/focus.reduce";
import * as reduceFromHex from "./04.hex.unit/hex.reduce";
import * as reduceFromSprite from "./05.sprite.unit/sprite.reduce";
import * as reduceFromGraphic from "./06.graphic.unit/graphic.reduce";
import * as reduceFromText from "./07.text.unit/text.reduce";
import * as reduceFromContainer from "./08.container.unit/container.reduce";
import * as reduceFromSurface from "./09.surface.unit/surface.reduce";


export const reducer: any = {
 title: reduceFromTitle.reducer,
 view : reduceFromView.reducer, 
focus : reduceFromFocus.reducer, 
hex : reduceFromHex.reducer, 
sprite : reduceFromSprite.reducer, 
graphic : reduceFromGraphic.reducer, 
text : reduceFromText.reducer, 
container : reduceFromContainer.reducer, 
surface : reduceFromSurface.reducer, 

};

export default class UnitData implements Model {
 auto: number = 0;

 rootData: string = "../data";
 localData: string = "./data";

 title: Title = new TitleModel();
 view : View = new ViewModel();
focus : Focus = new FocusModel();
hex : Hex = new HexModel();
sprite : Sprite = new SpriteModel();
graphic : Graphic = new GraphicModel();
text : Text = new TextModel();
container : Container = new ContainerModel();
surface : Surface = new SurfaceModel();

}
