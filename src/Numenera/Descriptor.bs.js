'use strict';

var Belt_List = require("bs-platform/lib/js/belt_List.js");

var descriptorTypes = {
  hd: /* Charming */0,
  tl: {
    hd: /* Celver */1,
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
                id: "charming",
                name: "Charming"
              };
    case /* Celver */1 :
        return {
                descriptorType: /* Celver */1,
                id: "clever",
                name: "Clever"
              };
    case /* Graceful */2 :
        return {
                descriptorType: /* Graceful */2,
                id: "graceful",
                name: "Graceful"
              };
    case /* Intelligent */3 :
        return {
                descriptorType: /* Intelligent */3,
                id: "intelligent",
                name: "Intelligent"
              };
    case /* Learned */4 :
        return {
                descriptorType: /* Learned */4,
                id: "learned",
                name: "Learned"
              };
    case /* MysticalMechanical */5 :
        return {
                descriptorType: /* MysticalMechanical */5,
                id: "mystical_mechanical",
                name: "Mystical/Mechanical"
              };
    case /* Rugged */6 :
        return {
                descriptorType: /* Rugged */6,
                id: "rugged",
                name: "Rugged"
              };
    case /* Stealthy */7 :
        return {
                descriptorType: /* Stealthy */7,
                id: "stealthy",
                name: "Stealthy"
              };
    case /* Strong */8 :
        return {
                descriptorType: /* Strong */8,
                id: "strong",
                name: "Strong"
              };
    case /* StrongWilled */9 :
        return {
                descriptorType: /* StrongWilled */9,
                id: "strong_willed",
                name: "Strong Willed"
              };
    case /* Swift */10 :
        return {
                descriptorType: /* Swift */10,
                id: "swift",
                name: "Swift"
              };
    case /* Tough */11 :
        return {
                descriptorType: /* Tough */11,
                id: "tough",
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

exports.descriptorTypes = descriptorTypes;
exports.getDescriptorInfo = getDescriptorInfo;
exports.descriptorInfos = descriptorInfos;
exports.stringToDescriptorType = stringToDescriptorType;
/* descriptorInfos Not a pure module */
