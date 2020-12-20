import { ViewModel } from "../view.model";
import State from "../../00.core/state";
import ViewBit from "../fce/view.bit";
import CardBit from "../fce/card.bit";
import CardItemBit from "../fce/card.-item.bit";
import * as doT from "dot";
import CardChoiceBit from "../fce/card-choice.bit";
import * as Act from "../view.action";
import * as GSAP from "gsap";
import { now } from "moment";

var timelineIDX: string = "timelineContent";

export const readTimeline = (cpy: ViewModel, bal: ViewBit, ste: State) => {
  var bodyEle = document.getElementById("body");
  bodyEle.innerHTML += bodyTemp;

  var element = document.getElementById(cpy.contentIDX);
  element.innerHTML = timelineTemp;
  return cpy;
};

export const updateTimeline = (cpy: ViewModel, bal: ViewBit, ste: State) => {
  //document.getElementById(cpy.contentIDX).innerHTML = timelineTemp;
  return cpy;
};

export const clickTimeline = (
  cpy: ViewModel,
  bal: CardChoiceBit,
  ste: State
) => {
  console.log("you hit the the timeline " + bal.data);
};

export const writeCardItem = (cpy: ViewModel, bal: CardItemBit, ste: State) => {
  var card: CardBit = cpy.cardBitsList[cpy.cardBits[bal.idx]];
  if (card == null) return console.log("you cannot find the card bit " + card);

  if (bal.body != null) {
    var nowCount = bodyCount;

    var bodyIDX = "card" + bal.idx + "body" + nowCount;
    var verseElement = document.getElementById(bodyIDX);
    if (verseElement == null)
      return console.warn("no verse element " + bodyIDX);

    verseElement.innerHTML += bal.body;
  }

  return cpy;
};

var bodyCount = 0;

export const createCard = (cpy: ViewModel, bal: CardBit, ste: State) => {
  //document.getElementById(cpy.contentIDX).innerHTML = timelineTemp;

  bal.dex = cpy.cardBitsList.length;
  if (bal.dat == null) bal.dat = [];

  cpy.cardBits[bal.idx] = bal.dex;
  cpy.cardBitsList.push(bal);

  if (cpy.nowCard == null) cpy.nowCard = bal;

  var idx = "card" + bal.idx;

  var gel = { cardIDX: idx };
  var doTCompiled = doT.template(cardTemp);
  var outLine = doTCompiled(gel);

  var timelineContent = document.getElementById(timelineIDX);
  if (timelineContent == null) return console.log("nope on the " + idx);
  timelineContent.innerHTML += outLine;

  var element = document.getElementById(idx);

  //window.requestAnimationFrame(() => {
  //  GSAP.gsap.to(element, {
  //    duration: 0,
  //    css: { opacity: 0 },
  //  });

  // GSAP.gsap.to(element, {
  ///   duration: 2,
  // /  css: { opacity: 1 },
  //    delay: 1,
  //  });
  //});

  console.log("do you have an element " + element);

  if (bal.dat != null) {
  }

  return cpy;
};

export const addCardItem = (cpy: ViewModel, bal: CardItemBit, ste: State) => {
  //document.getElementById(cpy.contentIDX).innerHTML = timelineTemp;

  console.log("add a card item");

  var card: CardBit = cpy.cardBitsList[cpy.cardBits[bal.idx]];
  if (card == null) return console.warn("you cannot find the card bit " + card);

  card.dat.push(bal);

  var cardIDX = "card" + bal.idx;
  var cardElement = document.getElementById(cardIDX);

  if (cardElement == null)
    return console.error("no card present for " + cardIDX);

  var gel = { title: "", subtitle: "" };

  var titleFlag = false;

  var line = "";
  if (bal.title != null) {
    gel.title = bal.title;
    titleFlag = true;
  }

  if (bal.titlesub != null) {
    gel.subtitle = bal.titlesub;
    titleFlag = true;
  }

  var doTCompiled, outline;

  if (titleFlag) {
    doTCompiled = doT.template(cardHeaderTemp);
    outline = doTCompiled(gel);
    line += outline;
  }

  if (bal.image) {
    var gel0 = {
      imgSRC: "./img/" + bal.image + ".png",
    };
    doTCompiled = doT.template(cardImgTemp);
    outline = doTCompiled(gel0);
    line += outline;
  }

  if (bal.body) {
    var bodyIDX = "card" + bal.idx + "body" + bodyCount;

    console.log("body idxe " + bodyIDX);

    var gel1 = {
      body: bal.body,
      bodyIDX: bodyIDX,
    };

    bodyCount += 1;
    doTCompiled = doT.template(cardBodyTemp);
    outline = doTCompiled(gel1);
    line += outline;
  }

  if (bal.choice) {
    var choiceLine = "";

    bal.choice.forEach((c: CardChoiceBit) => {
      console.log("card choice " + JSON.stringify(c));

      var btnIDX = "btn" + c.idx;

      var gel3 = {
        btnIDX: btnIDX,
        classIDX: navUnactive,
        label: c.label,
      };

      doTCompiled = doT.template(subNavTemp);
      outline = doTCompiled(gel3);
      console.log("what do you have for outline " + outline);

      choiceLine += outline;
    });

    doTCompiled = doT.template(blockButtonTmp);

    var gel4 = {
      block: choiceLine,
    };

    outline = doTCompiled(gel4);
    line += outline;
  }

  cardElement.innerHTML += line;

  if (bal.choice) {
    bal.choice.forEach((e: CardChoiceBit) => {
      var btnIDX = "btn" + e.idx;

      var option = document.getElementById(btnIDX);
      if (option == null) return console.error("fix this :: btn  " + btnIDX);

      option.addEventListener("mouseup", () => {
        ste.dispatch({ type: Act.CLICK_TIMELINE, bale: e });
      });
    });
  }

  //if (bal.) {
  //  var gel1 = {
  //    imgSRC: bal.body,
  //  };
  //  doTCompiled = doT.template(cardBodyTemp);
  //  outline = doTCompiled(gel1);
  //  line += outline;
  //}

  return cpy;
};

var bodyTemp = `
<div id="navBar" class="btn-group btn-group-block"></div>

  <div class="container" style="align-items: center; justify-content: center;">
  <div class="columns" style="align-items: center; justify-content: center;">
  <div id="content" class="column col-12" style="align-items: center; justify-content: center; width: 600px;">    
  </div>
`;

var timelineTemp = `
<div id='timelineContent'>
</div>
`;

var blockButtonTmp =
  '<div class="btn-group btn-group-block"> {{=it.block}} </div>';

var navUnactive: string = "btn btn-sm";
var navActive: string = "btn btn-sm active";
var lexiconBtnStyle = "btn btn-block";

var subNavTemp: string = `<button id="{{=it.btnIDX}}" class="{{=it.classIDX}}">{{=it.label}}</button>`;

var cardTemp = `
<div id="{{=it.cardIDX}}" class="card"></div><br></br>
`;

var cardImgTemp = `
<div class="card-image">
  <img src="{{=it.imgSRC}}" class="img-responsive">
</div>
`;

var cardHeaderTemp = `
<div class="card-header">
  <div class="card-title h5">{{=it.title}}</div>
  <div class="card-subtitle text-gray">{{=it.subtitle}}</div>
</div>
`;

var cardBodyTemp = `
<div class="card-body">
  <p id="{{=it.bodyIDX}}" class="typewriter">{{=it.body}}</p>
</div>
`;

var cardFootTemp = `
<div class="card-footer">
{{=it.foot}}
</div>
`;
