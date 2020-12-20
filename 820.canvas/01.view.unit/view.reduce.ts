import * as clone from "clone-deep";
import * as Act from "./view.action";
import { ViewModel } from "./view.model";
import * as Buzz from "./view.buzzer";
import State from "../00.core/state";

export function reducer(
  model: ViewModel = new ViewModel(),
  act: Act.Actions,
  state?: State
) {
  switch (act.type) {
    case Act.UPDATE_BACKGROUND:
      return Buzz.updateBackground(clone(model), act.bale);

    case Act.HIDE_FACE:
      return Buzz.hideFace(clone(model), act.bale, state);

    case Act.SHOW_FACE:
      return Buzz.showFace(clone(model), act.bale, state);

    case Act.OPEN_SCROLLBAR:
      return Buzz.openScollBar(clone(model));

    case Act.CLOSE_SCROLLBAR:
      return Buzz.closeScollBar(clone(model));

    case Act.CLICK_TIMELINE:
      return Buzz.clickTimeline(clone(model), act.bale, state);

    case Act.WRITE_CARD_ITEM:
      return Buzz.writeCardItem(clone(model), act.bale, state);

    case Act.ADD_CARD_ITEM:
      return Buzz.addCardItem(clone(model), act.bale, state);

    case Act.CREATE_CARD:
      return Buzz.createCard(clone(model), act.bale, state);

    case Act.UPDATE_TIMELINE:
      return Buzz.updateTimeline(clone(model), act.bale, state);

    case Act.READ_TIMELINE:
      return Buzz.readTimeline(clone(model), act.bale, state);

    case Act.CREATE_RENDER:
      return Buzz.createRender(clone(model), act.bale, state);

    case Act.VIEW_OPEN:
      return Buzz.writeView(clone(model), act.bale, state);

    case Act.ADD_LORE:
      return Buzz.addLore(clone(model), act.bale, state);

    default:
      return model;
  }
}
