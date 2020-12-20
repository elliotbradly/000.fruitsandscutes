import State from "./state";
import Line from "./line";

import * as TitleHark from "./title/title.hark";

import PathProcess from "./title/prc/path.process";
import { Inject } from "typescript-ioc";

import * as B from "./constant/BASIC";

import * as queryString from "query-string";

import * as doT from "dot";
import * as S from "string";
import Path from "./form/path.form";
import Sing from "./interface/song.interface";
import Song from "./interface/song.interface";

import * as Import from "../BEE";
import { single } from "rxjs-compat/operator/single";

//this is the main interface between all the pivots

export default class Beeing {
  line: Line;
  value: any;

  @Inject private path: PathProcess;
  state: State;

  constructor() {
    this.state = new State();
    this.line = new Line();
    //this.imports.forEach((i) => new i(this.line, this.state));

    for (var k in Import.list) new Import.list[k](this.line, this.state);

    this.state.hark(TitleHark.PATH).subscribe((val) => this.line.route(val));

    this.value = this.state.value;
  }

  private doTCompiled;

  replace = (vol: any, val: any) => {
    var lst = vol.split(".");
    switch (lst.length) {
      case 0:
      case 1:
        this.value[lst[0]] = val;
      case 2:
        this.value[lst[0]][lst[1]] = val;
        break;
      case 2:
        this.value[lst[0]][lst[1]][lst[2]] = val;
        break;
    }
  };

  query = (val: string) => {
    var vol;

    var lst = val.split(".");
    switch (lst.length) {
      case 0:

      case 1:
        vol = this.value[lst[0]];
      case 2:
        vol = this.value[lst[0]][lst[1]];
        break;
      case 2:
        vol = this.value[lst[0]][lst[1]][lst[2]];
        break;
    }

    return vol;
  };

  power = (val: string, mth?: string, dat?: any) => {
    if (mth == null) mth = B.CREATE;

    var list = val.split("\n");

    if (dat != null) {
      list.forEach((a, b) => {
        //a = S(a).replaceAll(",", "*").s;
        if (a == null) return;
        this.doTCompiled = doT.template(a);
        list[b] = this.doTCompiled(dat);
      });
    }

    list.forEach((a) => {
      if (a.length <= 3) return;
      if (S(a).contains("//")) return; //true

      var dom = a.split(":")[0];
      if (dom == null) return;
      dom = S(dom).collapseWhitespace().s;
      var sub = a.split(":")[1];
      if (sub == null) return;
      sub = S(sub).collapseWhitespace().s;

      //console.log("dom " + dom);
      //console.log("sub " + sub);

      var comma = sub.split(",");
      comma.forEach((e, f) => {
        comma[f] = S(e).collapseWhitespace().s;
      });

      var age = {
        idx: comma[0],
      };

      //console.log(age.idx + " idx to work " + age.idx.length);

      var type = "";
      comma.forEach((a, b) => {
        if (b == 0) return;
        //if (b % 2 == 1) console.log("dom: " + a);
        if (b % 2 == 1) type = a;
        //if (b % 2 == 0) console.log("sub: " + a);
        if (b % 2 == 0) age[type] = a;
        //if (b % 2 == 0) console.log("midling " + age[type]);
      });

      //console.log("age " + JSON.stringify(age));

      if (age.idx != null) age.idx = S(age.idx).collapseWhitespace().s;

      this.sing(dom, mth, age);
    });
  };

  hark = (key: string, rsp: any) => {
    return this.state.hark(key).subscribe(rsp);
  };

  //move = (type: string, bale?: any) => this.path.move(this.state, type, bale);

  sing = (pth: string, mth?: string, dat?: any, spd?: number) => {
    //console.log('send patth: ' + pth );

    for (var key in dat) {
      var item = dat[key];
      if (Array.isArray(item)) {
        item.forEach((a, b) => {
          if (typeof a !== "object" || a === null) return;
          item[b] = "object$$$:" + JSON.stringify(a);
        });
      } else if (typeof item === "object" && item !== null)
        dat[key] = "object$$$:" + JSON.stringify(item);
    }

    if (pth.includes("/") == false) pth = pth + "/index";
    if (spd != null) return this.path.link(this.state, pth, mth, dat, spd);
    if (dat != null) pth += "?" + queryString.stringify(dat);
    return this.line.route(new Path(pth, mth));
  };

  hike = this.sing;

  song = (song: Song) => {
    this.sing(song.pth, song.mth, song.dat, song.spd);
  };

  dispatch = (val: any) => {
    this.state.dispatch(val);
  };
}
