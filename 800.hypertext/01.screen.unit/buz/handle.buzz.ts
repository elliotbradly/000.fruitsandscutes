export const makeListener = (
  cpy: ScreenModel,
  bal: ListenerBit,
  ste: State
) => {
  cpy.listenerList.push(bal);
  var ele = document.getElementById(bal.target);
  if (ele == null) return console.log(bal.target + " does not exist");
  ele.addEventListener(bal.type, bal.method);
  console.log("adding listener " + JSON.stringify(bal));

  return cpy;
};

export const removeAllListeners = (
  cpy: ScreenModel,
  bal: ListenerBit,
  ste: State
) => {
  cpy.listenerList.forEach((a: ListenerBit) => {
    if (document.getElementById(a.target) == null) return;
    document.getElementById(a.target).removeEventListener(a.type, a.method);
  });

  cpy.listenerList.forEach((a: ListenerBit) => {
    a.target = null;
    a.method = null;
    a.type = null;
  });

  cpy.listenerList = [];

  return cpy;
};

export const removeDragable = (
  cpy: ScreenModel,
  bal: ListenerBit,
  ste: State
) => {
  //var holder = document.getElementById(bal.idx);

  cpy.draggerList.forEach((a) => {
    var old_element = document.getElementById(a);
    if (old_element == null)
      return console.log("draggable idx does not exist for " + a);
    var new_element = old_element.cloneNode(true);
    old_element.parentNode.replaceChild(new_element, old_element);
  });

  cpy.draggerList = [];
};

export const createDragable = (
  cpy: ScreenModel,
  bal: ListenerBit,
  ste: State
) => {
  cpy.draggerList.push(bal.idx);
  var holder = document.getElementById(bal.idx);
  if (holder == null) return console.log("nope draggable " + bal.idx);

  holder.ondragover = () => {
    return false;
  };

  holder.ondragleave = () => {
    return false;
  };

  holder.ondragend = () => {
    return false;
  };

  var path = "";

  holder.ondrop = (e) => {
    e.preventDefault();

    for (var key in e.dataTransfer.files) {
      for (var pass in e.dataTransfer.files[key]) {
        if (pass != "path") continue;
        var p = e.dataTransfer.files[key][pass];
        path = p;
        //document.getElementById("fileName").innerText = path;
        console.log("you dropped " + p);
      }
    }

    var name = path.replace(/^.*[\\\/]/, "");
    var fileBit: FileBit = { path, name };
    ste.dispatch({ type: Act.WRITE_DRAG_FILE, bale: fileBit });

    if (bal.src == null) return;

    ste.dispatch({ type: bal.src, bale: bal.dat });

    //console.log("show me path " + path);

    //FS.emptyDirSync("./inko/frm/");
    //FS.copySync(path, "./inko/frm/" + filename);

    //console.log("inko copy " + path);

    return false;
  };
};

export const writeDragFile = (cpy: ScreenModel, bal: FileBit, ste: State) => {
  cpy.dragFile = bal;
  return cpy;
};

import { ScreenModel } from "../screen.model";
import ListenerBit from "../fce/listener.bit";
import FileBit from "../fce/file.bit";
import State from "../../00.core/state";
import * as Act from "../screen.action";
