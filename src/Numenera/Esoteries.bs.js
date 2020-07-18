'use strict';

var Belt_List = require("bs-platform/lib/js/belt_List.js");

var esoteries = {
  hd: /* HedgeMagic */0,
  tl: {
    hd: /* Onslaught */1,
    tl: {
      hd: /* Push */2,
      tl: {
        hd: /* Scan */3,
        tl: {
          hd: /* Ward */4,
          tl: /* [] */0
        }
      }
    }
  }
};

function getEsoteryInfo(esotery) {
  switch (esotery) {
    case /* HedgeMagic */0 :
        return {
                esotery: /* HedgeMagic */0,
                id: "HedgeMagic",
                name: "Hedge Magic"
              };
    case /* Onslaught */1 :
        return {
                esotery: /* Onslaught */1,
                id: "Onslaught",
                name: "Onslaught"
              };
    case /* Push */2 :
        return {
                esotery: /* Push */2,
                id: "Push",
                name: "Push"
              };
    case /* Scan */3 :
        return {
                esotery: /* Scan */3,
                id: "Scan",
                name: "Scan"
              };
    case /* Ward */4 :
        return {
                esotery: /* Ward */4,
                id: "Ward",
                name: "Ward"
              };
    
  }
}

var esoteryInfos = Belt_List.map(esoteries, getEsoteryInfo);

exports.esoteries = esoteries;
exports.getEsoteryInfo = getEsoteryInfo;
exports.esoteryInfos = esoteryInfos;
/* esoteryInfos Not a pure module */
