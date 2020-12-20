import Container from "./fce/Container.interface";
import ContainerBit from "./fce/container.bit.interface";

export class ContainerModel implements Container {
  //idx:string;
  containerBitList: ContainerBit[] = [];
  containerBits: any = {};

  containerList: PIXI.Container[] = [];
  containers: any = {};
}
