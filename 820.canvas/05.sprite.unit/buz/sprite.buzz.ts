import { SpriteModel } from "../sprite.model";
import Sprite from "../fce/sprite.interface";
import SpriteBit from "../fce/sprite.bit.interface";
import * as PIXI from "pixi.js";

export const updateSprite = (
  cpy: SpriteModel,
  ste: SpriteModel,
  bal: SpriteBit
) => {
  var sprite: PIXI.Sprite = cpy.spriteList[cpy.sprites[bal.idx]];

  if (sprite == null) console.log("no sprite present");

  console.log("i wish you would update the sprite");

  if (bal.x != null) sprite.x = bal.x;
  if (bal.y != null) sprite.y = bal.y;
  if (bal.w != null) sprite.width = bal.w;
  if (bal.h != null) sprite.height = bal.h;
};

export const writeSprite = (
  cpy: SpriteModel,
  ste: SpriteModel,
  bal: Sprite
) => {
  return cpy;
};
