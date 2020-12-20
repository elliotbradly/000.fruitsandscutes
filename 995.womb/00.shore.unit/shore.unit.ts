import { Singleton } from "typescript-ioc";
import RoutingUnit from "./arc/00.routing.shore";
import Line from "../00.core/line";
import State from "../00.core/state";

@Singleton
export default class ShoreUnit {
 routing: RoutingUnit;

 constructor(router: Line, state: State) {
 //console.log("construnct sim unit " + this.router);
 this.routing = new RoutingUnit(router, state);
 }
}
