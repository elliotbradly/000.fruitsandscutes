import TitleUnit from "./00.core/title/title.unit";

import Model from "./00.core/interface/model.interface";

import Title from "./00.core/title/fce/title.interface";
import { TitleModel } from "./00.core/title/title.model";

export const list: Array<any> = [TitleUnit];

import * as reduceFromTitle from "./00.core/title/title.reduce";

export const reducer: any = {
  title: reduceFromTitle.reducer,
};

export default class UnitData implements Model {
  title: Title = new TitleModel();
}
