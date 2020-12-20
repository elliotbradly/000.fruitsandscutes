import { UrlModel } from "../url.model";
import UrlBit from "../fce/url.bit";
import State from "../../00.core/state";
import * as ActTtl from "../../00.core/title/title.action";
import * as queryString from "query-string";
import * as crossroads from "crossroads";

import * as Act from "../url.action";
import * as PVT from "../../val/pivot";

import * as HrkRun from "../../hrk/runway.hark";

export const initUrl = (cpy: UrlModel, bal: UrlBit, ste: State) => {
  //ste.value.title[PVT.AER].hark(HrkRun.HREF, (val) => {
  //  if (val == null) return;
  //  ste.dispatch({ type: Act.PUSH_URL, bale: { src: val } });
  //});

  crossroads.addRoute("/", () => {});

  window.addEventListener("hashchange", urlchange);

  window.dispatchEvent(new CustomEvent("hashchange"));
  return cpy;
};

export const addRoute = (cpy: UrlModel, bal: UrlBit, ste: State) => {
  crossroads.addRoute(bal.idx, () => {
    alert("alligator");
  });
};

export const updateUrl = (cpy: UrlModel, bal: UrlBit, ste: State) => {
  cpy.proto = window.location.protocol;
  cpy.host = window.location.host;
  cpy.pathname = window.location.pathname;
  cpy.search = window.location.search;
  cpy.data = queryString.parse(cpy.search);
  cpy.path = cpy.pathname.split("/");

  return cpy;
};

export const pushUrl = (cpy: UrlModel, bal: UrlBit, ste: State) => {
  window.history.replaceState(cpy.host, cpy.title, bal.src);

  window.dispatchEvent(new CustomEvent("hashchange"));

  return cpy;
};

var urlchange = () => {
  var route = "/";
  var hash = window.location.pathname;
  if (hash.length > 0) route = hash.split("/").pop();
  crossroads.parse(route);
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
