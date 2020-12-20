import { Action } from "../00.core/interface/action.interface";
import BodyBit from "./fce/body.bit";

export const INIT_BODY = "[Body action] Init Body";
export class InitBody implements Action {
  readonly type = INIT_BODY;
  constructor(public bale: BodyBit) {}
}

export const UPDATE_BODY = "[Body action] Update Body";
export class UpdateBody implements Action {
  readonly type = UPDATE_BODY;
  constructor(public bale: BodyBit) {}
}

export type Actions = InitBody | UpdateBody;
