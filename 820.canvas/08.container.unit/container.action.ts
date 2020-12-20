import { Action } from "../00.core/interface/action.interface";
import ContainerBit from "./fce/container.bit.interface";

export const DELETE_CONTAINER = "[wakeContainer action] Delete Container";
export class DeleteContainer implements Action {
  readonly type = DELETE_CONTAINER;
  constructor(public bale: ContainerBit) {}
}

export const UPDATE_CONTAINER = "[wakeContainer action] Update Container";
export class UpdateContainer implements Action {
  readonly type = UPDATE_CONTAINER;
  constructor(public bale: ContainerBit) {}
}

export const CREATE_CONTAINER = "[wakeContainer action] Create Container";
export class CreateContainer implements Action {
  readonly type = CREATE_CONTAINER;
  constructor(public bale: ContainerBit) {}
}

export type Actions = DeleteContainer | UpdateContainer | CreateContainer;
