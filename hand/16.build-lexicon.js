//takes lines of words and discovers  
//definitions for them

require("dotenv").config();

var rapidApi = process.env.RAPID_API;
var googleApi = process.env.GOOGLE_API;

var FS = require("fs-extra");
var clipboardy = require("clipboardy");
var S = require('string');
//remember to figure out how to disable apple keypad entry
var title = "master";
var srcDir = "./data/reference/lexicon/";
var finDir = './data/redux/lexicon/';

var program = require("commander");
program.option("-t, --title <type>", "title of message");
program.parse(process.argv);

if (program.title) title = program.title;
title = finDir + '/'+ title + '.txt';

FS.ensureDirSync(srcDir)
FS.ensureDirSync(finDir)
FS.ensureFileSync( title)

var output = [];
var tomSawyer = [];

var init = () =>{

  var nowLexi = String(FS.readdirSync( finDir ).length).padStart(3, "0");

var format = (str) =>{
  str = S(str).collapseWhitespace().s;
  return str
} 

var list = FS.readdirSync(srcDir);

list.forEach( (a)=>{
  var chk = a.split('.');
  var fix = chk.slice(-1).pop();
  console.log('fox: ' + fix)
  if ( fix == null )return
  if ( fix != 'txt')return;
  var want = srcDir + a ;
  console.log('want:: ' + want)
  var lst = FS.readFileSync( want ).toString().split('\n')

  lst.forEach( (a)=>{
    var str = format(a);
    if (str.length <= 1) return
    output.push(str)
  })
})

console.log('output ' + output);
console.log('now ' + nowLexi);
createTerm();

}

var saveTerm = (idx, flv, def, ext ) =>{

  var line;
  if (ext == null) line = idx + " , " + flv + " : " + def;
  else line = idx + " , " + ext + " , " + flv + " : " + def;

  var list = FS.readFileSync(title).toString().split("\n");
  list.push(line)

  FS.writeFileSync(title, list.join("\n"));
  console.log("lexi write " + title);
  process.nextTick( createTerm)
  
}

var createTerm = (idx) =>{

  if ( idx == null){
    var Fate = require("chance");
    var fate = new Fate();

    tomSawyer = [createWordNet,  createUrbanLex, createRapidWordLex ]
    tomSawyer = fate.shuffle( tomSawyer)

    tomSawyer.unshift( createGoogleLex )

    
    
    if ( output.length == 0 ) return console.log("end of the line")
    idx = output.pop();
  }

  var now = tomSawyer.pop();
  now(idx)

}

var createWordNet = (idx) => {
  console.log("wordnet " + idx)
  var natural = require("natural");
  var wordnet = new natural.WordNet();

  var Fate = require("chance");
  var fate = new Fate();

  wordnet.lookup(idx, (res) => {
    var item;
    var line;
    if (res.length == 0) return wordNetEmpty(idx);
    if (res.length == 1) {
      item = res[0];
      if (item == null) return console.log("gloss one for " + bal.idx);

      if (item.gloss == null) return console.log("no gloss for " + bal.idx);

      line = item.gloss;
      var gloss = formatLine( gloss)
      saveTerm( idx, line )
    } else {
      item = fate.pick(res);
      if (item.gloss == null) return console.log("gloss bleak for " + bal.idx);

      console.log("whut " + JSON.stringify(item));

      var ext;

      if (item.synonyms != null) ext = item.synonyms.join(" , ");
     
      var gloss = formatLine( gloss)
      saveTerm( idx, gloss, null, ext )

      //ste.dispatch({ type: Act.FORMAT_LINE, bale: { src: item.gloss } });
      //ste.dispatch({ type: Act.SAVE_TERM, bale: bal });
    }
  });
};

var wordNetEmpty = (idx) => {
  console.log("word net empty" + idx);
  createTerm(idx)
};

var createUrbanLex = (idx) => {
  const axios = require("axios");

  axios({
    method: "GET",
    url: "https://mashape-community-urban-dictionary.p.rapidapi.com/define",
    headers: {
      "content-type": "application/octet-stream",
      "x-rapidapi-host": "mashape-community-urban-dictionary.p.rapidapi.com",
      "x-rapidapi-key": rapidApi,
      useQueryString: true,
    },
    params: {
      term: idx,
    },
  })
    .then((res) => {
      var list = res.data.list;
      var Fate = require("chance");
      var fate = new Fate();

      var item;
      if (list.length == 0) return urbanLexEmpty(idx);
      if (list.length == 1) item = list[0];
      item = fate.pick(list);

      var fin = item.definition + " , " + item.example + " , " + item.author;
      fin = formatLine( fin)
      saveTerm( idx, null, fin)

      //ste.dispatch({ type: Act.FORMAT_LINE, bale: { src: fin } });
      //ste.dispatch({ type: Act.SAVE_TERM, bale: bal });
    })
    .catch((error) => {
      console.log(error);
    });
};

var urbanLexEmpty = (idx) => {
  console.log("urban lex empty try again " + idx);
  createTerm( idx)
  //ste.dispatch({ type: Act.CREATE_TERM, bale: bal });
};

createRapidWordLex = (idx) => {
  const axios = require("axios");
  axios({
    method: "GET",
    url: "https://wordsapiv1.p.rapidapi.com/words/" + idx,
    headers: {
      "content-type": "application/octet-stream",
      "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
      "x-rapidapi-key": rapidApi,
      useQueryString: true,
    },
  })
    .then((response) => {
      var data = response.data.results;

      var Fate = require("chance");
      var fate = new Fate();

      var item;
      if (data.length == 1) item = data[0];
      else item = fate.pick(data);

      var def = item.definition;

      axios({
        method: "GET",
        url:
          "https://wordsapiv1.p.rapidapi.com/words/" + idx + "/synonyms/",
        headers: {
          "content-type": "application/octet-stream",
          "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
          "x-rapidapi-key": rapidApi,
          useQueryString: true,
        },
      })
        .then((response) => {
          var syb = response.data.synonyms;
          var symbols = syb.join(",");
          console.log("show me the symbols " + symbols);
          var ext;
          if (item.synonyms != null) ext = symbols;

          var def = formatLine(def)
          saveTerm( idx, null, def, ext )

          //ste.dispatch({ type: Act.FORMAT_LINE, bale: { src: def } });
          //ste.dispatch({ type: Act.SAVE_TERM, bale: bal });
        })
        .catch((error) => {
          console.log(error);
        });
    })
    .catch((error) => {
      console.log(error);
      console.log("google it");
      rapidWordEmpty(idx);
    });
};

var rapidWordEmpty = (idx) => {
  console.log("rapid word empty try again " + idx);
  createTerm(idx)
  //ste.dispatch({ type: Act.CREATE_TERM, bale: bal });
};

var createGoogleLex = (idx) => {
  const axios = require("axios");

  var googleSearch =
    "https://www.googleapis.com/customsearch/v1?key=" +
    googleApi +
    "&cx=004780414566706833745:cc2ngws_l7i&q=" +
    idx;

  axios({
    method: "GET",
    url: googleSearch,
  })
    .then((response) => {
      var list = response.data.items;

      var item;

      if (list.length == 0) {
        console.log("time for something else");
      } else if (list.length == 1) {
        item = list[0];
      } else {
        var Fate = require("chance");
        var fate = new Fate();
        item = fate.pick(list);
      }

      var title = item.title;
      var description = item.snippet;

      var def =  title + " , " + description;
      console.log( def)
      def = formatLine(def)
      saveTerm( idx, null, def)

      //ste.dispatch({ type: Act.FORMAT_LINE, bale: { src: def } });
      //ste.dispatch({ type: Act.SAVE_TERM, bale: bal });
    })
    .catch((error) => {
      console.log(error);
    });
};


var formatLine = (src) => {
  if ( src == null ) return ''
  src = S(src).replaceAll(",", ",\n \t");
  src = S(src).replaceAll("and", "\n \t and");
  src = S(src).replaceAll("but", "\n \t but");
  src = S(src).replaceAll(":", "\n \t :");
  src = S(src).replaceAll("?", "\n \t ?");
  src = S(src).replaceAll("!", "\n \t !");
  src = S(src).replaceAll(".", "\n \t .");
  return src;
};





init()