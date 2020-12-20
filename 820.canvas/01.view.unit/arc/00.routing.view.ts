import Line from "../../00.core/line";
import State from "../../00.core/state";

import IndexArc from "./01.index.view.arc";
import TimelineArc from "./02.timeline.view.arc";

export const root: string = "view";

export const routes = [
  {
    path: "index",
    arcType: IndexArc,
    arc: null,
  },
  {
    path: "timeline",
    arcType: TimelineArc,
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
