export const initLayout = (
  cpy: LayoutModel,
  bal: LayoutUnitBit,
  ste: State
) => {
  //console.clear();

  return cpy;
};

export const openLayout = (cpy: LayoutModel, bal: LayoutBit, ste: State) => {
  if (bal.dat == null) return console.error("no dat on openLayout");
  if (bal.dat.content == null)
    return console.error("no content on openLayout dat");

  var group = [];
  var component = [];

  var scan = (itm) => {
    console.log("size " + itm.length);

    if (itm == null) return console.log("show " + itm);

    itm.forEach((a) => {
      if (a.type == null) return;
      if (a.type == "row") group.push(a);
      if (a.type == "column") group.push(a);
      if (a.type == "component") component.push(a);

      if (a.content == null) return;
      scan(a.content);
    });
  };

  scan(bal.dat.content);

  var layout = new GoldenLayout(bal.dat);

  patch(ste, Act.REPLACE_GOLDEN, { dat: layout });

  group.forEach((a) => {
    var itm = clone(a);
    patch(ste, Act.CREATE_GROUP, { idx: itm.id, src: null });
  });

  component.forEach((a) => {
    var itm = clone(a);
    patch(ste, Act.MAKE_COMPONENT, { idx: itm.componentName, src: null });
  });

  cpy.layout.init();

  setTimeout(() => patch(ste, Act.EXTRACT_ROOT), 333);

  //var comp = layout.getComponent("sayHi");

  //for (var key in layout) {
  //  console.log("show me " + key);
  //  console.log("next " + layout[key]);
  // }

  //layout.root.contentItems[0].addChild(newItemConfig);

  //myLayout.init();

  return cpy;
};

//this allows you to construct the base structure of the pockets
export const addElement = (cpy: LayoutModel, bal: LayoutBit, ste: State) => {
  patch(ste, Act.READ_CONTENT, bal);

  var content: any = cpy.contentNow;

  if (bal.val == null) bal.val = 0;

  var ele = "";

  switch (Number(bal.val)) {
    case 0:
      ele = "<div id='" + +bal.src + "'></div>";
      break;
    case 1:
      ele = "<canvas id='" + bal.src + "'></canvas>";
      break;
  }

  content.getElement().html(ele);

  return cpy;
};

export const resizeLayout = (cpy: LayoutModel, bal: ResizeBit, ste: State) => {
  if (cpy.compList.length == 0) return;

  setTimeout(() => {
    cpy.layout.updateSize();
  }, 333);

  patch(ste, ActTtl.PULL_PIVOT, {
    pvt: PIVOT.CANVAS,
    hke: HkeSfc.INDEX,
    mth: B.PULL,
  });

  //now
  return cpy;
};

export const createGroup = (cpy: LayoutModel, bal: LayoutBit, ste: State) => {
  if (bal.idx == null) return console.error("you have no idx for group bit");

  bal.dex = cpy.groupList.length;

  cpy.groups[bal.idx] = bal.dex;
  cpy.groupList.push(bal);

  console.log("created group " + bal.idx + " ::: " + cpy.groupList.length);
  if (bal.src == null) return;
  if (bal.val == null) bal.val = 0;

  var config;

  switch (bal.src) {
    case Group.COLUMN:
      config = {
        type: Group.COLUMN,
      };

      break;
    case Group.ROW:
      config = {
        type: Group.ROW,
      };
      break;
    case Group.STACK:
      config = {
        type: Group.STACK,
      };
      console.log("is there a stack");

      break;
  }

  bal.dat = cpy.layout.createContentItem(config);
  cpy.root.contentItems[bal.val].addChild(bal.dat);

  //cpy.root.contentItems[bal.val] = bal.dat;
};

export const makeComponent = (cpy: LayoutModel, bal: LayoutBit, ste: State) => {
  if (bal.idx == null) return console.error("no idx for component bit");

  bal.dex = cpy.compList.length;

  cpy.comps[bal.idx] = bal.dex;
  cpy.compList.push(bal);

  cpy.layout.registerComponent(bal.idx, function (container, state) {
    bal.dat = container;

    container.on("resize", () => {
      //check the contents for a canvas
      //if canvas exist resize
      var ele = container.getElement()[0];

      if (ele.innerHTML == null) return;
      if (ele.innerHTML.includes("canvas") == false) return;
      var canvas = ele.firstChild;
      var idx = canvas.id;

      pivot(ste, PIVOT.CANVAS, HkeSfc.INDEX, B.RESIZE, { idx });

      console.log("resizing");
    });

    //ste.dispatch({ type: Act.ADD_MIRROR, bale: { val: 0, dat: container } });
  });

  console.log("made comp " + bal.idx + " ::: " + cpy.compList.length);
  console.log("do you have " + bal.src);

  if (bal.src == null) return;
  if (bal.val == null) bal.val = 0;

  var config = {
    type: "component",
    componentName: bal.src,
    isClosable: false,
  };

  //var item = cpy.layout.createContentItem(config);

  var parent = cpy.root.contentItems[bal.val];
  parent.addChild(config);

  var dex0 = parent.contentItems.length - 1;
  var stack = parent.contentItems[dex0];

  var dex = stack.contentItems.length - 1;
  var comp = stack.contentItems[dex];
  bal.dat = comp.container;
  bal.dex = cpy.contentList.length;
  cpy.contents[bal.idx] = bal.dex;
  cpy.contentList.push(bal);

  return cpy;
};

export const readContent = (cpy: LayoutModel, bal: LayoutBit, ste: State) => {
  var content = cpy.compList[cpy.comps[bal.idx]];
  cpy.contentNow = content.dat;
  return cpy;
};

export const updateLayout = (cpy: LayoutModel, bal: LayoutBit, ste: State) => {
  return cpy;
};

export const replaceGolden = (cpy: LayoutModel, bal: LayoutBit, ste: State) => {
  cpy.layout = bal.dat;
  return cpy;
};

export const extractRoot = (cpy: LayoutModel, bal: LayoutBit, ste: State) => {
  cpy.root = cpy.layout.root;
  cpy.ready = true;
  return cpy;
};

var patch = (ste, type, bale?) => {
  if (ste.dispatch == null)
    return console.error("no patch " + JSON.stringify(type) + " ::: " + bale);

  ste.dispatch({ type, bale });
};

var query = (ste, pvt, hrk) => {
  var val = ste.value.title[pvt].query(hrk);
  if (val == null) return console.error("no val for " + pvt + " : " + hrk);
  return val;
};

var pivot = (ste, pvt, hke, mth, dat?) => {
  ste.dispatch({
    type: ActTtl.PULL_PIVOT,
    bale: {
      pvt,
      hke,
      mth,
      dat,
    },
  });
};

import { LayoutModel } from "../layout.model";
import LayoutBit from "../fce/layout.bit";
import State from "../../00.core/state";
import * as Act from "../layout.action";
import LayoutUnitBit from "../fce/layout-unit.bit";
import * as clone from "clone-deep";

import * as B from "../../00.core/constant/BASIC";
import * as PIVOT from "../../val/pivot";

import * as ActTtl from "../../00.core/title/title.action";

import * as HkeSfc from "../../hke/surface.hike";

import * as Group from "../../val/layout-group";
import { groupBy } from "rxjs/operators";
import ResizeBit from "../fce/resize.bit";

import * as GoldenLayout from "golden-layout";
