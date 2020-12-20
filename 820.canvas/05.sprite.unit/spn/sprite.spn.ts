import { Action } from "../../00.core/interface/action.interface";
import State from "../../00.core/state";
import * as PIXI from "pixi.js";
import * as Act from "../sprite.action";
import { SpriteModel } from "../sprite.model";
import SpriteBit from "../fce/sprite.bit.interface";
import { ContainerModel } from "../../08.container.unit/container.model";

export const CloseSprite = (act: Action, state: State) => {
  if (act.type != Act.CLOSE) return;

  var sMod: SpriteModel = state.value.sprite;
  var cMod: ContainerModel = state.value.container;
  var bale: SpriteBit = act.bale;
  var idx = bale.idx;

  var index = sMod.spriteBits[bale.idx];
  bale = sMod.spriteBitList[index];

  if (bale == null)
    return console.log("can not close graphic for " + idx + " :: " + index);

  var sprite: PIXI.Sprite = sMod.spriteList[bale.dex];
  var dex = bale.dex;

  sMod.spriteBitList[dex] = null;
  sMod.spriteList[dex] = null;
  sMod.spriteBitList.splice(dex, 1);
  sMod.spriteList.splice(dex, 1);
  delete sMod.spriteBits[idx];
  delete sMod.sprites[idx];

  sMod.spriteBits[idx] = null;
  sMod.sprites[idx] = null;

  var container = cMod.containerList[cMod.containers[bale.can]];
  if (container == null) return console.log("no container " + bale.can);

  container.removeChild(sprite);

  sprite.destroy({ children: true, texture: true, baseTexture: true });

  for (var i = dex; i < sMod.spriteBitList.length; i++) {
    var item = sMod.spriteBitList[i];
    sMod.spriteBits[item.idx] = i;
    item.dex = i;
  }

  sprite.texture = null;
  sprite = null;
};

export const WakeSprite = (act: Action, state: State) => {
  if (act.type != Act.SPRITE_OPEN) return;

  var bale: SpriteBit = act.bale;
  var sMod: SpriteModel = state.value.sprite;
  var cMod: ContainerModel = state.value.container;

  if (bale.img != null) bale.src = "./img/" + bale.img + ".png";
  if (bale.vid != null) bale.src = "./vid/" + bale.vid + ".mp4";

  var sprite = PIXI.Sprite.from(bale.src);
  bale.dex = sMod.spriteList.length;

  sMod.spriteBitList.push(bale);
  //check to make sure that this idx is not being used
  sMod.spriteBits[bale.idx] = bale.dex;

  sMod.sprites[bale.idx] = sMod.spriteList.length;
  sMod.spriteList.push(sprite);

  var container = cMod.containerList[cMod.containers[bale.can]];
  if (container == null) return console.log("no container " + bale.can);

  container.addChild(sprite);

  state.dispatch({
    type: Act.UPDATE,
    bale: bale
  });
};
