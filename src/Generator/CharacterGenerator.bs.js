'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Belt_List = require("bs-platform/lib/js/belt_List.js");
var Belt_Option = require("bs-platform/lib/js/belt_Option.js");
var Character$NumeneraCharacterGenerator = require("../Numenera/Character.bs.js");
var WeaponSelector$NumeneraCharacterGenerator = require("./WeaponSelector.bs.js");
var CharacterEdgeSelector$NumeneraCharacterGenerator = require("./CharacterEdgeSelector.bs.js");
var CharacterTypeSelector$NumeneraCharacterGenerator = require("./CharacterTypeSelector.bs.js");
var CharacterFocusSelector$NumeneraCharacterGenerator = require("./CharacterFocusSelector.bs.js");
var CharacterStatsSelector$NumeneraCharacterGenerator = require("./CharacterStatsSelector.bs.js");
var CharacterDescriptorSelector$NumeneraCharacterGenerator = require("./CharacterDescriptorSelector.bs.js");

var formSections = {
  hd: /* CollectCharacterType */0,
  tl: {
    hd: /* CollectCharacterDescriptor */1,
    tl: {
      hd: /* CollectCharacterFocus */2,
      tl: {
        hd: /* CollectCharacterStats */3,
        tl: {
          hd: /* CollectCharacterEdge */4,
          tl: {
            hd: /* CollectWeapons */5,
            tl: /* [] */0
          }
        }
      }
    }
  }
};

function isCharacterTypeSelected(state) {
  return Belt_Option.isSome(state.characterType);
}

function isJack(state) {
  var characterType = state.characterType;
  if (characterType !== undefined) {
    return characterType === /* Jack */2;
  } else {
    return false;
  }
}

function formSectionIsVisible(state, formSection) {
  if (formSection !== 4) {
    if (formSection >= 5) {
      return Belt_Option.isSome(state.characterType);
    } else {
      return true;
    }
  } else {
    return isJack(state);
  }
}

function defaultState(param) {
  return {
          characterType: undefined,
          characterDescriptor: undefined,
          characterFocus: undefined,
          weapons: /* [] */0
        };
}

function CharacterGenerator(Props) {
  var match = React.useReducer((function (state, action) {
          switch (action.TAG | 0) {
            case /* SetCharacterType */0 :
                return {
                        characterType: action._0,
                        characterDescriptor: state.characterDescriptor,
                        characterFocus: state.characterFocus,
                        weapons: state.weapons
                      };
            case /* SetCharacterDescriptor */1 :
                return {
                        characterType: state.characterType,
                        characterDescriptor: action._0,
                        characterFocus: state.characterFocus,
                        weapons: state.weapons
                      };
            case /* SetCharacterFocus */2 :
                return {
                        characterType: state.characterType,
                        characterDescriptor: state.characterDescriptor,
                        characterFocus: action._0,
                        weapons: state.weapons
                      };
            case /* SetWeapons */3 :
                return {
                        characterType: state.characterType,
                        characterDescriptor: state.characterDescriptor,
                        characterFocus: state.characterFocus,
                        weapons: action._0
                      };
            
          }
        }), {
        characterType: undefined,
        characterDescriptor: undefined,
        characterFocus: undefined,
        weapons: /* [] */0
      });
  var dispatch = match[1];
  var state = match[0];
  console.log(state);
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
                    case /* CollectCharacterDescriptor */1 :
                        el = React.createElement(CharacterDescriptorSelector$NumeneraCharacterGenerator.make, {
                              onSelect: (function (characterDescriptor) {
                                  return Curry._1(dispatch, {
                                              TAG: /* SetCharacterDescriptor */1,
                                              _0: characterDescriptor
                                            });
                                }),
                              key: "CharacterDescriptorSelector"
                            });
                        break;
                    case /* CollectCharacterFocus */2 :
                        el = React.createElement(CharacterFocusSelector$NumeneraCharacterGenerator.make, {
                              onSelect: (function (characterFocus) {
                                  return Curry._1(dispatch, {
                                              TAG: /* SetCharacterFocus */2,
                                              _0: characterFocus
                                            });
                                }),
                              key: "CharacterFocusSelector"
                            });
                        break;
                    case /* CollectCharacterStats */3 :
                        el = React.createElement(CharacterStatsSelector$NumeneraCharacterGenerator.make, {
                              key: "CharacterStatsSelector"
                            });
                        break;
                    case /* CollectCharacterEdge */4 :
                        el = React.createElement(CharacterEdgeSelector$NumeneraCharacterGenerator.make, {
                              key: "CharacterEdgeSelector"
                            });
                        break;
                    case /* CollectWeapons */5 :
                        var characterType = state.characterType;
                        var characterInfo = characterType !== undefined ? Character$NumeneraCharacterGenerator.getCharacterInfo(characterType) : undefined;
                        el = characterInfo !== undefined ? React.createElement(WeaponSelector$NumeneraCharacterGenerator.make, {
                                weaponCount: characterInfo.weaponCount,
                                weaponSizes: characterInfo.weaponSizes,
                                onSelect: (function (weaponTypes) {
                                    return Curry._1(dispatch, {
                                                TAG: /* SetWeapons */3,
                                                _0: weaponTypes
                                              });
                                  }),
                                key: "WeaponSelector"
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
                    }, "Output goes here")));
}

var make = CharacterGenerator;

exports.formSections = formSections;
exports.isCharacterTypeSelected = isCharacterTypeSelected;
exports.isJack = isJack;
exports.formSectionIsVisible = formSectionIsVisible;
exports.defaultState = defaultState;
exports.make = make;
/* react Not a pure module */
