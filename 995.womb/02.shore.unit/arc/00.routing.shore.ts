import Line from "../../00.core/line";
import State from "../../00.core/state";

import IndexArc from "./01.index.shore.arc";
import WitnessArc from "./02.witness.shore.arc";
import LinkArc from "./03.link.shore.arc";

export const root: string = "shore";

export const routes = [
  {
    path: "index",
    arcType: IndexArc,
    arc: null,
  },
  {
    path: "witness",
    arcType: WitnessArc,
    arc: null,
  },
  {
    path: "link",
    arcType: LinkArc,
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
