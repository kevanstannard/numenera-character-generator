'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Belt_List = require("bs-platform/lib/js/belt_List.js");
var Belt_Option = require("bs-platform/lib/js/belt_Option.js");
var Character$NumeneraCharacterGenerator = require("../Numenera/Character.bs.js");
var TricksSelector$NumeneraCharacterGenerator = require("./TricksSelector.bs.js");
var WeaponsSelector$NumeneraCharacterGenerator = require("./WeaponsSelector.bs.js");
var CharacterBuilder$NumeneraCharacterGenerator = require("../Builder/CharacterBuilder.bs.js");
var CharacterDisplay$NumeneraCharacterGenerator = require("../Builder/CharacterDisplay.bs.js");
var EsoteriesSelector$NumeneraCharacterGenerator = require("./EsoteriesSelector.bs.js");
var FocusTypeSelector$NumeneraCharacterGenerator = require("./FocusTypeSelector.bs.js");
var CharacterEdgeSelector$NumeneraCharacterGenerator = require("./CharacterEdgeSelector.bs.js");
var CharacterTypeSelector$NumeneraCharacterGenerator = require("./CharacterTypeSelector.bs.js");
var CharacterStatsSelector$NumeneraCharacterGenerator = require("./CharacterStatsSelector.bs.js");
var DescriptorTypeSelector$NumeneraCharacterGenerator = require("./DescriptorTypeSelector.bs.js");
var CharacterGeneratorState$NumeneraCharacterGenerator = require("./CharacterGeneratorState.bs.js");

var formSections = {
  hd: /* CollectCharacterType */0,
  tl: {
    hd: /* CollectDescriptorType */1,
    tl: {
      hd: /* CollectFocusType */2,
      tl: {
        hd: /* CollectCharacterStats */3,
        tl: {
          hd: /* CollectCharacterEdge */4,
          tl: {
            hd: /* CollectWeapons */5,
            tl: {
              hd: /* CollectEsoteries */6,
              tl: {
                hd: /* CollectTricks */7,
                tl: /* [] */0
              }
            }
          }
        }
      }
    }
  }
};

function isCharacterTypeSelected(state) {
  return Belt_Option.isSome(state.characterType);
}

function isCharacterType(state, characterType) {
  var currentCharacterType = state.characterType;
  if (currentCharacterType !== undefined) {
    return currentCharacterType === characterType;
  } else {
    return false;
  }
}

function hasEsoteries(state) {
  var characterType = state.characterType;
  if (characterType === undefined) {
    return false;
  }
  var characterInfo = Character$NumeneraCharacterGenerator.getCharacterInfo(characterType);
  return characterInfo.esoteriesCount > 0;
}

function hasTricks(state) {
  var characterType = state.characterType;
  if (characterType === undefined) {
    return false;
  }
  var characterInfo = Character$NumeneraCharacterGenerator.getCharacterInfo(characterType);
  return characterInfo.tricksCount > 0;
}

function formSectionIsVisible(state, formSection) {
  switch (formSection) {
    case /* CollectCharacterType */0 :
    case /* CollectDescriptorType */1 :
    case /* CollectFocusType */2 :
    case /* CollectCharacterStats */3 :
        return true;
    case /* CollectCharacterEdge */4 :
        return isCharacterType(state, /* Jack */2);
    case /* CollectWeapons */5 :
        return Belt_Option.isSome(state.characterType);
    case /* CollectEsoteries */6 :
        return hasEsoteries(state);
    case /* CollectTricks */7 :
        return hasTricks(state);
    
  }
}

function CharacterGenerator(Props) {
  var match = React.useReducer((function (state, action) {
          switch (action.TAG | 0) {
            case /* SetCharacterType */0 :
                return {
                        characterType: action._0,
                        descriptorType: state.descriptorType,
                        focusType: state.focusType,
                        weapons: state.weapons,
                        esoteries: state.esoteries,
                        tricks: state.tricks,
                        extraStats: state.extraStats,
                        extraEdges: state.extraEdges
                      };
            case /* SetDescriptorType */1 :
                return {
                        characterType: state.characterType,
                        descriptorType: action._0,
                        focusType: state.focusType,
                        weapons: state.weapons,
                        esoteries: state.esoteries,
                        tricks: state.tricks,
                        extraStats: state.extraStats,
                        extraEdges: state.extraEdges
                      };
            case /* SetFocusType */2 :
                return {
                        characterType: state.characterType,
                        descriptorType: state.descriptorType,
                        focusType: action._0,
                        weapons: state.weapons,
                        esoteries: state.esoteries,
                        tricks: state.tricks,
                        extraStats: state.extraStats,
                        extraEdges: state.extraEdges
                      };
            case /* SetExtraStats */3 :
                return {
                        characterType: state.characterType,
                        descriptorType: state.descriptorType,
                        focusType: state.focusType,
                        weapons: state.weapons,
                        esoteries: state.esoteries,
                        tricks: state.tricks,
                        extraStats: action._0,
                        extraEdges: state.extraEdges
                      };
            case /* SetExtraEdges */4 :
                return {
                        characterType: state.characterType,
                        descriptorType: state.descriptorType,
                        focusType: state.focusType,
                        weapons: state.weapons,
                        esoteries: state.esoteries,
                        tricks: state.tricks,
                        extraStats: state.extraStats,
                        extraEdges: action._0
                      };
            case /* SetWeapons */5 :
                return {
                        characterType: state.characterType,
                        descriptorType: state.descriptorType,
                        focusType: state.focusType,
                        weapons: action._0,
                        esoteries: state.esoteries,
                        tricks: state.tricks,
                        extraStats: state.extraStats,
                        extraEdges: state.extraEdges
                      };
            case /* SetEsoteries */6 :
                return {
                        characterType: state.characterType,
                        descriptorType: state.descriptorType,
                        focusType: state.focusType,
                        weapons: state.weapons,
                        esoteries: action._0,
                        tricks: state.tricks,
                        extraStats: state.extraStats,
                        extraEdges: state.extraEdges
                      };
            case /* SetTricks */7 :
                return {
                        characterType: state.characterType,
                        descriptorType: state.descriptorType,
                        focusType: state.focusType,
                        weapons: state.weapons,
                        esoteries: state.esoteries,
                        tricks: action._0,
                        extraStats: state.extraStats,
                        extraEdges: state.extraEdges
                      };
            
          }
        }), CharacterGeneratorState$NumeneraCharacterGenerator.defaultState(undefined));
  var dispatch = match[1];
  var state = match[0];
  var determineVisibleFormSections = function (param) {
    return Belt_List.reverse(Belt_List.reduce(formSections, /* [] */0, (function (acc, formSection) {
                      if (formSectionIsVisible(state, formSection)) {
                        return {
                                hd: formSection,
                                tl: acc
                              };
                      } else {
                        return acc;
                      }
                    })));
  };
  var formSectionEls = Belt_List.toArray(Belt_List.reverse(Belt_List.reduce(determineVisibleFormSections(undefined), /* [] */0, (function (acc, formSection) {
                  var el;
                  switch (formSection) {
                    case /* CollectCharacterType */0 :
                        el = React.createElement(CharacterTypeSelector$NumeneraCharacterGenerator.make, {
                              onSelect: (function (characterType) {
                                  return Curry._1(dispatch, {
                                              TAG: /* SetCharacterType */0,
                                              _0: characterType
                                            });
                                }),
                              key: "CharacterTypeSelector"
                            });
                        break;
                    case /* CollectDescriptorType */1 :
                        el = React.createElement(DescriptorTypeSelector$NumeneraCharacterGenerator.make, {
                              onSelect: (function (descriptorType) {
                                  return Curry._1(dispatch, {
                                              TAG: /* SetDescriptorType */1,
                                              _0: descriptorType
                                            });
                                }),
                              key: "DescriptorTypeSelector"
                            });
                        break;
                    case /* CollectFocusType */2 :
                        el = React.createElement(FocusTypeSelector$NumeneraCharacterGenerator.make, {
                              onSelect: (function (focusType) {
                                  return Curry._1(dispatch, {
                                              TAG: /* SetFocusType */2,
                                              _0: focusType
                                            });
                                }),
                              key: "FocusTypeSelector"
                            });
                        break;
                    case /* CollectCharacterStats */3 :
                        el = React.createElement(CharacterStatsSelector$NumeneraCharacterGenerator.make, {
                              stats: state.extraStats,
                              onUpdate: (function (extraStats) {
                                  return Curry._1(dispatch, {
                                              TAG: /* SetExtraStats */3,
                                              _0: extraStats
                                            });
                                }),
                              key: "CharacterStatsSelector"
                            });
                        break;
                    case /* CollectCharacterEdge */4 :
                        el = React.createElement(CharacterEdgeSelector$NumeneraCharacterGenerator.make, {
                              edges: state.extraEdges,
                              onUpdate: (function (extraEdges) {
                                  return Curry._1(dispatch, {
                                              TAG: /* SetExtraEdges */4,
                                              _0: extraEdges
                                            });
                                }),
                              key: "CharacterEdgeSelector"
                            });
                        break;
                    case /* CollectWeapons */5 :
                        var characterType = state.characterType;
                        var characterInfo = characterType !== undefined ? Character$NumeneraCharacterGenerator.getCharacterInfo(characterType) : undefined;
                        el = characterInfo !== undefined ? React.createElement(WeaponsSelector$NumeneraCharacterGenerator.make, {
                                weaponCount: characterInfo.weaponCount,
                                weaponSizes: characterInfo.weaponSizes,
                                onSelect: (function (weaponTypes) {
                                    return Curry._1(dispatch, {
                                                TAG: /* SetWeapons */5,
                                                _0: weaponTypes
                                              });
                                  }),
                                key: "WeaponsSelector"
                              }) : null;
                        break;
                    case /* CollectEsoteries */6 :
                        var characterType$1 = state.characterType;
                        var characterInfo$1 = characterType$1 !== undefined ? Character$NumeneraCharacterGenerator.getCharacterInfo(characterType$1) : undefined;
                        el = characterInfo$1 !== undefined ? React.createElement(EsoteriesSelector$NumeneraCharacterGenerator.make, {
                                esoteryCount: characterInfo$1.esoteriesCount,
                                onSelect: (function (esoteries) {
                                    return Curry._1(dispatch, {
                                                TAG: /* SetEsoteries */6,
                                                _0: esoteries
                                              });
                                  }),
                                key: "EsoteriesSelector"
                              }) : null;
                        break;
                    case /* CollectTricks */7 :
                        var characterType$2 = state.characterType;
                        var characterInfo$2 = characterType$2 !== undefined ? Character$NumeneraCharacterGenerator.getCharacterInfo(characterType$2) : undefined;
                        el = characterInfo$2 !== undefined ? React.createElement(TricksSelector$NumeneraCharacterGenerator.make, {
                                trickCount: characterInfo$2.tricksCount,
                                onSelect: (function (tricks) {
                                    return Curry._1(dispatch, {
                                                TAG: /* SetTricks */7,
                                                _0: tricks
                                              });
                                  }),
                                key: "TricksSelector"
                              }) : null;
                        break;
                    
                  }
                  return {
                          hd: el,
                          tl: acc
                        };
                }))));
  return React.createElement("div", {
              className: "container"
            }, React.createElement("h1", undefined, "Numenera Character Generator"), React.createElement("div", {
                  className: "row"
                }, React.createElement("div", {
                      className: "col-sm-6"
                    }, formSectionEls), React.createElement("div", {
                      className: "col-sm-6"
                    }, React.createElement(CharacterDisplay$NumeneraCharacterGenerator.make, {
                          character: CharacterBuilder$NumeneraCharacterGenerator.build(state)
                        }))));
}

var make = CharacterGenerator;

exports.formSections = formSections;
exports.isCharacterTypeSelected = isCharacterTypeSelected;
exports.isCharacterType = isCharacterType;
exports.hasEsoteries = hasEsoteries;
exports.hasTricks = hasTricks;
exports.formSectionIsVisible = formSectionIsVisible;
exports.make = make;
/* react Not a pure module */
