import { BodyModel } from "../body.model";
import Body from "../fce/body.interface";
import BodyBit from "../fce/body.bit";
import State from "../../00.core/state";
import * as Act from "../body.action";

import * as doT from "dot";

var navList = ["map-img", "fruit-ava"];

var navActive: string = "btn btn-block active";
var navUnactive: string = "btn btn-block";

var init = false;

export const initBody = (cpy: BodyModel, bal: BodyBit, ste: State) => {
  //  if (cpy.lore == null) return console.error("no lore present");

  if (init == true) return;

  init = true;

  ste.dispatch({ type: Act.UPDATE_BODY });

  //cpy.lore.bee.hark("color.mix", displayColorMix);

  return cpy;
};

export const updateBody = (cpy: BodyModel, bal: BodyBit, ste: State) => {
  var container = document.getElementById("body");

  if (container == null) {
    return console.error("no container");
  }

  var content = templateContent;
  container.innerHTML = content;
};

var tmpClrBox =
  '<div style="background-color: {{=it.clr}}; width:10px; height:10px;"></div>';

var templateContent = `<div id="containerBody" class="container"> body </div>`;
