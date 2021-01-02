import TitleUnit from "./title/title.unit";

export const list: Array<any> = [TitleUnit];

import * as reduceFromTitle from "./title/title.reduce";

export const reducer: any = {
  title: reduceFromTitle.reducer,
};

export default class UnitData {
  path: string;
}
