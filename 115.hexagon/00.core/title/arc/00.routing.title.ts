import Line from "../../line";
import State from "../../state";

import IndexArc from "./01.index.title.arc";

export const root: string = "title";

export const routes = [
  {
    path: "index",
    arcType: IndexArc,
    arc: null,
  },
];

export default class DisplayRoutingUnit {
  constructor(router: Line, state: State) {
    routes.forEach((a) => {
      a.path = root + "/" + a.path;
      a.arc = new a.arcType(state);
      router.register(a);
    });
  }
}
