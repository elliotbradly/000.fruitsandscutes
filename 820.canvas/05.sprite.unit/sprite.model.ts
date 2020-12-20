import Sprite from "./fce/Sprite.interface";
import SpriteBit from "./fce/sprite.bit.interface";

export class SpriteModel implements Sprite {
  //idx:string;
  spriteBitList: SpriteBit[] = [];
  spriteBits: any = {};

  spriteList: PIXI.Sprite[] = [];
  sprites: any = {};
}
