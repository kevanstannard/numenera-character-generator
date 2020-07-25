'use strict';

var Belt_List = require("bs-platform/lib/js/belt_List.js");
var Character$NumeneraCharacterGenerator = require("../Numenera/Character.bs.js");

function initialCharacter(param) {
  return {
          characterType: undefined,
          effort: 0,
          might: /* [] */0,
          speed: /* [] */0,
          intellect: /* [] */0,
          mightEdge: /* [] */0,
          speedEdge: /* [] */0,
          intellectEdge: /* [] */0
        };
}

function setCharacterType(character, state) {
  return {
          characterType: state.characterType,
          effort: character.effort,
          might: character.might,
          speed: character.speed,
          intellect: character.intellect,
          mightEdge: character.mightEdge,
          speedEdge: character.speedEdge,
          intellectEdge: character.intellectEdge
        };
}

function addEffort(character, effort) {
  if (effort > 0) {
    return {
            characterType: character.characterType,
            effort: effort,
            might: character.might,
            speed: character.speed,
            intellect: character.intellect,
            mightEdge: character.mightEdge,
            speedEdge: character.speedEdge,
            intellectEdge: character.intellectEdge
          };
  } else {
    return character;
  }
}

function addMight(character, amount, reason) {
  if (amount > 0) {
    return {
            characterType: character.characterType,
            effort: character.effort,
            might: Belt_List.add(character.might, {
                  amount: amount,
                  reason: reason
                }),
            speed: character.speed,
            intellect: character.intellect,
            mightEdge: character.mightEdge,
            speedEdge: character.speedEdge,
            intellectEdge: character.intellectEdge
          };
  } else {
    return character;
  }
}

function addSpeed(character, amount, reason) {
  if (amount > 0) {
    return {
            characterType: character.characterType,
            effort: character.effort,
            might: character.might,
            speed: Belt_List.add(character.speed, {
                  amount: amount,
                  reason: reason
                }),
            intellect: character.intellect,
            mightEdge: character.mightEdge,
            speedEdge: character.speedEdge,
            intellectEdge: character.intellectEdge
          };
  } else {
    return character;
  }
}

function addIntellect(character, amount, reason) {
  if (amount > 0) {
    return {
            characterType: character.characterType,
            effort: character.effort,
            might: character.might,
            speed: character.speed,
            intellect: Belt_List.add(character.intellect, {
                  amount: amount,
                  reason: reason
                }),
            mightEdge: character.mightEdge,
            speedEdge: character.speedEdge,
            intellectEdge: character.intellectEdge
          };
  } else {
    return character;
  }
}

function addBaseStats(character, state) {
  var characterType = state.characterType;
  if (characterType === undefined) {
    return character;
  }
  var reason = "Base";
  var characterInfo = Character$NumeneraCharacterGenerator.getCharacterInfo(characterType);
  var match = characterInfo.baseStat;
  return addIntellect(addSpeed(addMight(character, match.might, reason), match.speed, reason), match.intellect, reason);
}

function addExtraStats(character, state) {
  var reason = "Extra";
  var match = state.extraStats;
  return addIntellect(addSpeed(addMight(character, match.might, reason), match.speed, reason), match.intellect, reason);
}

function addMightEdge(character, amount, reason) {
  if (amount > 0) {
    return {
            characterType: character.characterType,
            effort: character.effort,
            might: character.might,
            speed: character.speed,
            intellect: character.intellect,
            mightEdge: Belt_List.add(character.mightEdge, {
                  amount: amount,
                  reason: reason
                }),
            speedEdge: character.speedEdge,
            intellectEdge: character.intellectEdge
          };
  } else {
    return character;
  }
}

function addSpeedEdge(character, amount, reason) {
  if (amount > 0) {
    return {
            characterType: character.characterType,
            effort: character.effort,
            might: character.might,
            speed: character.speed,
            intellect: character.intellect,
            mightEdge: character.mightEdge,
            speedEdge: Belt_List.add(character.speedEdge, {
                  amount: amount,
                  reason: reason
                }),
            intellectEdge: character.intellectEdge
          };
  } else {
    return character;
  }
}

function addIntellectEdge(character, amount, reason) {
  if (amount > 0) {
    return {
            characterType: character.characterType,
            effort: character.effort,
            might: character.might,
            speed: character.speed,
            intellect: character.intellect,
            mightEdge: character.mightEdge,
            speedEdge: character.speedEdge,
            intellectEdge: Belt_List.add(character.intellectEdge, {
                  amount: amount,
                  reason: reason
                })
          };
  } else {
    return character;
  }
}

function addBaseEdges(character, state) {
  var characterType = state.characterType;
  if (characterType === undefined) {
    return character;
  }
  var reason = "Base";
  var characterInfo = Character$NumeneraCharacterGenerator.getCharacterInfo(characterType);
  var match = characterInfo.baseEdge;
  return addIntellectEdge(addSpeedEdge(addMightEdge(character, match.might, reason), match.speed, reason), match.intellect, reason);
}

function build(state) {
  return addBaseEdges(addExtraStats(addBaseStats(addEffort(setCharacterType({
                              characterType: undefined,
                              effort: 0,
                              might: /* [] */0,
                              speed: /* [] */0,
                              intellect: /* [] */0,
                              mightEdge: /* [] */0,
                              speedEdge: /* [] */0,
                              intellectEdge: /* [] */0
                            }, state), 1), state), state), state);
}

exports.initialCharacter = initialCharacter;
exports.setCharacterType = setCharacterType;
exports.addEffort = addEffort;
exports.addMight = addMight;
exports.addSpeed = addSpeed;
exports.addIntellect = addIntellect;
exports.addBaseStats = addBaseStats;
exports.addExtraStats = addExtraStats;
exports.addMightEdge = addMightEdge;
exports.addSpeedEdge = addSpeedEdge;
exports.addIntellectEdge = addIntellectEdge;
exports.addBaseEdges = addBaseEdges;
exports.build = build;
/* Character-NumeneraCharacterGenerator Not a pure module */
