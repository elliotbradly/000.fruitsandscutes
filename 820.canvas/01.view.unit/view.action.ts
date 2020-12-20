import { Action } from "../00.core/interface/action.interface";
import ViewBit from "./fce/view.bit";
import CardBit from "./fce/card.bit";
import CardItemBit from "./fce/card.-item.bit";
import CardChoiceBit from "./fce/card-choice.bit";

export const HIDE_FACE = "[View action] Hide Face";
export class HideFace implements Action {
  readonly type = HIDE_FACE;
  constructor(public bale: ViewBit) {}
}

export const SHOW_FACE = "[View action] Show Face";
export class ShowFace implements Action {
  readonly type = SHOW_FACE;
  constructor(public bale: ViewBit) {}
}

export const UPDATE_BACKGROUND = "[View action] Update Background";
export class UpdateBackground implements Action {
  readonly type = UPDATE_BACKGROUND;
  constructor(public bale: ViewBit) {}
}

export const CLOSE_SCROLLBAR = "[View action] Close Scrollbar";
export class CloseScrollBar implements Action {
  readonly type = CLOSE_SCROLLBAR;
  constructor(public bale: ViewBit) {}
}

export const OPEN_SCROLLBAR = "[View action] Open Scrollbar";
export class OpenScrollBar implements Action {
  readonly type = OPEN_SCROLLBAR;
  constructor(public bale: ViewBit) {}
}

export const CLICK_TIMELINE = "[View action] Click Timeline";
export class ClickTimeline implements Action {
  readonly type = CLICK_TIMELINE;
  constructor(public bale: CardChoiceBit) {}
}

export const WRITE_CARD_ITEM = "[View action] Write Card Item";
export class WriteCardItem implements Action {
  readonly type = WRITE_CARD_ITEM;
  constructor(public bale: CardItemBit) {}
}

export const ADD_CARD_ITEM = "[View action] Add Card Item";
export class AddCardItem implements Action {
  readonly type = ADD_CARD_ITEM;
  constructor(public bale: CardItemBit) {}
}

export const CREATE_CARD = "[View action] Create Card";
export class CreateCard implements Action {
  readonly type = CREATE_CARD;
  constructor(public bale: CardBit) {}
}

export const UPDATE_TIMELINE = "[View action] Update Timeline";
export class UpdateTimeline implements Action {
  readonly type = UPDATE_TIMELINE;
  constructor(public bale: ViewBit) {}
}

export const READ_TIMELINE = "[View action] Read Timeline";
export class ReadTimeline implements Action {
  readonly type = READ_TIMELINE;
  constructor(public bale: ViewBit) {}
}

export const ADD_LORE = "[View action] Add Lore";
export class AddLore implements Action {
  readonly type = ADD_LORE;
  constructor(public bale: ViewBit) {}
}

export const CREATE_RENDER = "[View action] Fetch Render";
export class CreateRender implements Action {
  readonly type = CREATE_RENDER;
  constructor(public bale: ViewBit) {}
}

export const INIT_PIXI = "[View action] Init Pixi";
export class InitPixi implements Action {
  readonly type = INIT_PIXI;
  constructor(public bale: ViewBit) {}
}

export const VIEW_OPEN = "[View action] Waking View";
export class View implements Action {
  readonly type = VIEW_OPEN;
  constructor(public bale: ViewBit) {}
}

export type Actions =
  | HideFace
  | ShowFace
  | WriteCardItem
  | UpdateBackground
  | CloseScrollBar
  | OpenScrollBar
  | ClickTimeline
  | AddCardItem
  | CreateCard
  | UpdateTimeline
  | AddLore
  | ReadTimeline
  | CreateRender
  | InitPixi
  | View;
