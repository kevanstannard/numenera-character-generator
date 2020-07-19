'use strict';

var Belt_List = require("bs-platform/lib/js/belt_List.js");

var tricks = {
  hd: /* TrainedInArmour */0,
  tl: {
    hd: /* CreateDeadlyPoison */1,
    tl: {
      hd: /* CritterCompanion */2,
      tl: {
        hd: /* FaceMorph */3,
        tl: {
          hd: /* FleetOfFoot */4,
          tl: {
            hd: /* LateInspiration */5,
            tl: {
              hd: /* LinkSenses */6,
              tl: {
                hd: /* PhasedPocket */7,
                tl: {
                  hd: /* Vanish */8,
                  tl: /* [] */0
                }
              }
            }
          }
        }
      }
    }
  }
};

function getTrickInfo(trick) {
  switch (trick) {
    case /* TrainedInArmour */0 :
        return {
                trick: /* TrainedInArmour */0,
                id: "TrainedInArmour",
                name: "Trained in Armour"
              };
    case /* CreateDeadlyPoison */1 :
        return {
                trick: /* CreateDeadlyPoison */1,
                id: "CreateDeadlyPoison",
                name: "Create Deadly Poison"
              };
    case /* CritterCompanion */2 :
        return {
                trick: /* CritterCompanion */2,
                id: "CritterCompanion",
                name: "Critter Companion"
              };
    case /* FaceMorph */3 :
        return {
                trick: /* FaceMorph */3,
                id: "FaceMorph",
                name: "Face Morph"
              };
    case /* FleetOfFoot */4 :
        return {
                trick: /* FleetOfFoot */4,
                id: "FleetOfFoot",
                name: "Fleet of Foot"
              };
    case /* LateInspiration */5 :
        return {
                trick: /* LateInspiration */5,
                id: "LateInspiration",
                name: "Late Inspiration"
              };
    case /* LinkSenses */6 :
        return {
                trick: /* LinkSenses */6,
                id: "LinkSenses",
                name: "Link Senses"
              };
    case /* PhasedPocket */7 :
        return {
                trick: /* PhasedPocket */7,
                id: "PhasedPocket",
                name: "Phased Pocket"
              };
    case /* Vanish */8 :
        return {
                trick: /* Vanish */8,
                id: "Vanish",
                name: "Vanish"
              };
    
  }
}

var trickInfos = Belt_List.map(tricks, getTrickInfo);

function stringToTrick(id) {
  return Belt_List.reduce(trickInfos, undefined, (function (acc, trickInfo) {
                if (acc !== undefined) {
                  return acc;
                } else if (trickInfo.id === id) {
                  return trickInfo.trick;
                } else {
                  return acc;
                }
              }));
}

exports.tricks = tricks;
exports.getTrickInfo = getTrickInfo;
exports.trickInfos = trickInfos;
exports.stringToTrick = stringToTrick;
/* trickInfos Not a pure module */
