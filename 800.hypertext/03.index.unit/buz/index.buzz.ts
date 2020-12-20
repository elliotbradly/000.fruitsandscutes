import { IndexModel } from "../index.model";
import IndexBit from "../fce/index.interface";
import State from "../../00.core/state";

import * as Act from "../index.action";
import * as ActScr from "../../01.screen.unit/screen.action";
//import * as ActLre from "../../05.lore.unit/lore.action";
//import * as ActEth from "../../04.earth.unit/earth.action";

import * as HTML from "../../val/html";
import { BodyModel } from "../../02.body.unit/body.model";
import NavBit from "../../01.screen.unit/fce/nav.bit";
import { ScreenModel } from "../../01.screen.unit/screen.model";

export const initIndex = (cpy: IndexModel, bal: IndexBit, ste: State) => {
  var modBod: BodyModel = ste.value.body;
  var modScn: ScreenModel = ste.value.screen;

  ste.dispatch({
    type: ActScr.DELETE_HTML,
    bale: { idx: cpy.pageIDX },
  });

  ste.dispatch({
    type: ActScr.PUSH_COMP,
    bale: { src: HTML.page, dat: { pageIDX: cpy.pageIDX, navIDX: cpy.navIDX } },
  });

  ste.dispatch({
    type: ActScr.UPDATE_HTML,
    bale: { idx: modBod.bdyIDX, src: modScn.compile },
  });

  //var current = tmpMainContent;
  //var content = document.getElementById("containerBody");
  //if (content == null) return;
  //content.innerHTML = current;
  ste.dispatch({ type: Act.UPDATE_INDEX });

  return cpy;
};

export const updateIndex = (cpy: IndexModel, bal: IndexBit, ste: State) => {
  ste.dispatch({
    type: ActScr.MAKE_NAV,
    bale: {
      idx: cpy.navIDX,
      dex: cpy.navDex,
      val: 1,
      lst: cpy.navList,
      btn: HTML.naVBtn0,
      nom: cpy.btnIDX,
      mod: cpy,
      act: Act.UPDATE_INDEX,
    },
  });

  switch (cpy.navDex) {
    case 0:
      break;
    case 1:
      break;
    case 2:
      break;
    case 3:
      break;
  }

  return cpy;
};
