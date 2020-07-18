'use strict';

var Belt_List = require("bs-platform/lib/js/belt_List.js");

var fightingMoves = {
  hd: /* Aggression */0,
  tl: {
    hd: /* FleetOfFoot */1,
    tl: {
      hd: /* ImpressiveDisplay */2,
      tl: {
        hd: /* Misdirect */3,
        tl: {
          hd: /* NoNeedForWeapons */4,
          tl: {
            hd: /* TrainedWithoutArmour */5,
            tl: /* [] */0
          }
        }
      }
    }
  }
};

function getFightingMoveInfo(fightingMove) {
  switch (fightingMove) {
    case /* Aggression */0 :
        return {
                fightingMove: /* Aggression */0,
                id: "Aggression",
                name: "Aggression"
              };
    case /* FleetOfFoot */1 :
        return {
                fightingMove: /* FleetOfFoot */1,
                id: "FleetOfFoot",
                name: "Fleet of Foot"
              };
    case /* ImpressiveDisplay */2 :
        return {
                fightingMove: /* ImpressiveDisplay */2,
                id: "ImpressiveDisplay",
                name: "Impressive Display"
              };
    case /* Misdirect */3 :
        return {
                fightingMove: /* Misdirect */3,
                id: "Misdirect",
                name: "Misdirect"
              };
    case /* NoNeedForWeapons */4 :
        return {
                fightingMove: /* NoNeedForWeapons */4,
                id: "NoNeedForWeapons",
                name: "No Need for Weapons"
              };
    case /* TrainedWithoutArmour */5 :
        return {
                fightingMove: /* TrainedWithoutArmour */5,
                id: "TrainedWithoutArmour",
                name: "Trained Without Armour"
              };
    
  }
}

var fightingMoveInfos = Belt_List.map(fightingMoves, getFightingMoveInfo);

exports.fightingMoves = fightingMoves;
exports.getFightingMoveInfo = getFightingMoveInfo;
exports.fightingMoveInfos = fightingMoveInfos;
/* fightingMoveInfos Not a pure module */
