import Line from "../../00.core/line";
import State from "../../00.core/state";

import IndexArc from "./01.index.hex.arc";
import RenderArc from "./02.render.hex.arc";
import CenterArc from "./03.center.hex.arc";

export const root: string = "hex";

export const routes = [
  {
    path: "index",
    arcType: IndexArc,
    arc: null
  },
  {
    path: "render",
    arcType: RenderArc,
    arc: null
  },
  {
    path: "center",
    arcType: CenterArc,
    arc: null
  }
];

export default class DisplayRoutingUnit {
  constructor(router: Line, state: State) {
    routes.forEach(a => {
      a.path = root + "/" + a.path;
      a.arc = new a.arcType(state);
      router.register(a);
    });
  }
}
