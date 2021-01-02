import Link from "./interface/link.interface";
import * as queryString from "query-string";
import Path from "./form/path.form";

import * as S from "string";
import * as B from "./constant/BASIC";

export default class Line {
  address: any = {};
  addressList: any = [];

  constructor() {}

  route(lnk: Link): Link {
    if (lnk == null) return;

    if (typeof lnk === "string" || lnk instanceof String) {
      lnk = new Path(String(lnk));
    }

    if (lnk.method == null) lnk.method = B.READ;

    //this.log.save(lnk);

    var data: any;

    var params = lnk.path.split("?");
    if (params.length > 1) {
      data = queryString.parseUrl(lnk.path).query;
      lnk.path = params[0];
    }

    for (var key in data) {
      var item = data[key];
      //if (item.in != null && item.contains("object$$$:")) {
      // item = item.replace("object$$$:", "");
      //}

      if (Array.isArray(item)) {
        item.forEach((a, b) => {
          if (item.contains != null && a.contains("object$$$:") == false)
            return;
          a = a.replace("object$$$:", "");

          if (typeof a === "string" || a instanceof String) {
            item[b] = a;
          } else item[b] = JSON.parse(a);
        });
      } else if (item.includes != null && item.includes("object$$$:") == true) {
        item = item.replace("object$$$:", "");
        data[key] = JSON.parse(item);
      }
    }

    if (lnk.data != null) data = lnk.data;

    return this.action(lnk.method, lnk.path, data);
  }

  register(dat: Link) {
    var closed = false;

    this.addressList.forEach((a) => {
      if (a.path == dat.path) return (closed = true);
    });

    if (closed) return console.log(dat.path + " ROUTE CLOSED");

    this.address[dat.path] = dat.arc;
    this.addressList.push(dat);
  }

  action(typ, pth, dat, cbk = null) {
    var item = this.address[pth];
    if (item == null) return console.log("item missing pth " + pth);

    if (item[typ] == null) return console.log("action not possible for " + typ);
    dat = item[typ](dat);
    if (cbk != null) cbk(dat);
    return dat;
  }
}
