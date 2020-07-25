'use strict';

var Belt_List = require("bs-platform/lib/js/belt_List.js");

function descriptorTypeToString(descriptorType) {
  switch (descriptorType) {
    case /* Charming */0 :
        return "Charming";
    case /* Clever */1 :
        return "Clever";
    case /* Graceful */2 :
        return "Graceful";
    case /* Intelligent */3 :
        return "Intelligent";
    case /* Learned */4 :
        return "Learned";
    case /* MysticalMechanical */5 :
        return "Mystical/Mechanical";
    case /* Rugged */6 :
        return "Rugged";
    case /* Stealthy */7 :
        return "Stealthy";
    case /* Strong */8 :
        return "Strong";
    case /* StrongWilled */9 :
        return "Strong willed";
    case /* Swift */10 :
        return "Swift";
    case /* Tough */11 :
        return "Tough";
    
  }
}

var descriptorTypes = {
  hd: /* Charming */0,
  tl: {
    hd: /* Clever */1,
    tl: {
      hd: /* Graceful */2,
      tl: {
        hd: /* Intelligent */3,
        tl: {
          hd: /* Learned */4,
          tl: {
            hd: /* MysticalMechanical */5,
            tl: {
              hd: /* Rugged */6,
              tl: {
                hd: /* Stealthy */7,
                tl: {
                  hd: /* Strong */8,
                  tl: {
                    hd: /* StrongWilled */9,
                    tl: {
                      hd: /* Swift */10,
                      tl: {
                        hd: /* Tough */11,
                        tl: /* [] */0
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
};

function getDescriptorInfo(descriptorType) {
  switch (descriptorType) {
    case /* Charming */0 :
        return {
                descriptorType: /* Charming */0,
                id: "Charming",
                name: "Charming"
              };
    case /* Clever */1 :
        return {
                descriptorType: /* Clever */1,
                id: "Clever",
                name: "Clever"
              };
    case /* Graceful */2 :
        return {
                descriptorType: /* Graceful */2,
                id: "Graceful",
                name: "Graceful"
              };
    case /* Intelligent */3 :
        return {
                descriptorType: /* Intelligent */3,
                id: "Intelligent",
                name: "Intelligent"
              };
    case /* Learned */4 :
        return {
                descriptorType: /* Learned */4,
                id: "Learned",
                name: "Learned"
              };
    case /* MysticalMechanical */5 :
        return {
                descriptorType: /* MysticalMechanical */5,
                id: "MysticalMechanical",
                name: "Mystical/Mechanical"
              };
    case /* Rugged */6 :
        return {
                descriptorType: /* Rugged */6,
                id: "Rugged",
                name: "Rugged"
              };
    case /* Stealthy */7 :
        return {
                descriptorType: /* Stealthy */7,
                id: "Stealthy",
                name: "Stealthy"
              };
    case /* Strong */8 :
        return {
                descriptorType: /* Strong */8,
                id: "Strong",
                name: "Strong"
              };
    case /* StrongWilled */9 :
        return {
                descriptorType: /* StrongWilled */9,
                id: "StrongWilled",
                name: "Strong willed"
              };
    case /* Swift */10 :
        return {
                descriptorType: /* Swift */10,
                id: "Swift",
                name: "Swift"
              };
    case /* Tough */11 :
        return {
                descriptorType: /* Tough */11,
                id: "Tough",
                name: "Tough"
              };
    
  }
}

var descriptorInfos = Belt_List.map(descriptorTypes, getDescriptorInfo);

function stringToDescriptorType(id) {
  return Belt_List.reduce(descriptorInfos, undefined, (function (acc, descriptorInfo) {
                if (acc !== undefined) {
                  return acc;
                } else if (descriptorInfo.id === id) {
                  return descriptorInfo.descriptorType;
                } else {
                  return acc;
                }
              }));
}

exports.descriptorTypeToString = descriptorTypeToString;
exports.descriptorTypes = descriptorTypes;
exports.getDescriptorInfo = getDescriptorInfo;
exports.descriptorInfos = descriptorInfos;
exports.stringToDescriptorType = stringToDescriptorType;
/* descriptorInfos Not a pure module */
