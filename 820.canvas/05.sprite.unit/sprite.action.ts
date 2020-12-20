import { Action } from "../00.core/interface/action.interface";
import SpriteBit from "./fce/sprite.bit.interface";

export const CLOSE = "[Sprite action] Close Sprite";
export class CloseSprite implements Action {
  readonly type = CLOSE;
  constructor(public bale: SpriteBit) {}
}

export const UPDATE = "[Sprite action] Update Sprite";
export class UpdateSprite implements Action {
  readonly type = UPDATE;
  constructor(public bale: SpriteBit) {}
}

export const SPRITE_OPEN = "[Sprite action] Open Sprite";
export class OpenSprite implements Action {
  readonly type = SPRITE_OPEN;
  constructor(public bale: SpriteBit) {}
}

export type Actions = CloseSprite | UpdateSprite | OpenSprite;
