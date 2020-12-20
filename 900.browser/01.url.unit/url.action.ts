import { Action } from "../00.core/interface/action.interface";
import UrlBit from "./fce/url.bit";

// Url actions

export const INIT_URL = "[Url action] Init Url";
export class InitUrl implements Action {
  readonly type = INIT_URL;
  constructor(public bale: UrlBit) {}
}

export const PUSH_URL = "[Url action] Push Url";
export class PushUrl implements Action {
  readonly type = PUSH_URL;
  constructor(public bale: UrlBit) {}
}

export const UPDATE_URL = "[Url action] Update Url";
export class UpdateUrl implements Action {
  readonly type = UPDATE_URL;
  constructor(public bale: UrlBit) {}
}

export type Actions = InitUrl | UpdateUrl | PushUrl;
