'use strict';

var Belt_List = require("bs-platform/lib/js/belt_List.js");

var characterTypes = {
  hd: /* Glave */0,
  tl: {
    hd: /* Nano */1,
    tl: {
      hd: /* Jack */2,
      tl: /* [] */0
    }
  }
};

function getCharacterInfo(characterType) {
  switch (characterType) {
    case /* Glave */0 :
        return {
                characterType: /* Glave */0,
                id: "Glave",
                name: "Glave",
                baseEffort: 1,
                baseStat: {
                  might: 11,
                  speed: 10,
                  intellect: 7
                },
                baseEdge: {
                  might: 1,
                  speed: 1,
                  intellect: 0
                },
                weaponSizes: {
                  hd: /* LightWeapon */0,
                  tl: {
                    hd: /* MediumWeapon */1,
                    tl: {
                      hd: /* HeavyWeapon */2,
                      tl: /* [] */0
                    }
                  }
                },
                weaponCount: 2,
                esoteriesCount: 0
              };
    case /* Nano */1 :
        return {
                characterType: /* Nano */1,
                id: "Nano",
                name: "Nano",
                baseEffort: 1,
                baseStat: {
                  might: 7,
                  speed: 9,
                  intellect: 12
                },
                baseEdge: {
                  might: 0,
                  speed: 0,
                  intellect: 1
                },
                weaponSizes: {
                  hd: /* LightWeapon */0,
                  tl: /* [] */0
                },
                weaponCount: 1,
                esoteriesCount: 2
              };
    case /* Jack */2 :
        return {
                characterType: /* Jack */2,
                id: "Jack",
                name: "Jack",
                baseEffort: 1,
                baseStat: {
                  might: 10,
                  speed: 10,
                  intellect: 10
                },
                baseEdge: {
                  might: 0,
                  speed: 0,
                  intellect: 0
                },
                weaponSizes: {
                  hd: /* LightWeapon */0,
                  tl: {
                    hd: /* MediumWeapon */1,
                    tl: /* [] */0
                  }
                },
                weaponCount: 2,
                esoteriesCount: 0
              };
    
  }
}

var characterInfos = Belt_List.map(characterTypes, getCharacterInfo);

function stringToCharacterType(id) {
  return Belt_List.reduce(characterInfos, undefined, (function (acc, characterInfo) {
                if (acc !== undefined) {
                  return acc;
                } else if (characterInfo.id === id) {
                  return characterInfo.characterType;
                } else {
                  return acc;
                }
              }));
}

exports.characterTypes = characterTypes;
exports.getCharacterInfo = getCharacterInfo;
exports.characterInfos = characterInfos;
exports.stringToCharacterType = stringToCharacterType;
/* characterInfos Not a pure module */
