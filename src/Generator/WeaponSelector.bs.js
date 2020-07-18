'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Belt_List = require("bs-platform/lib/js/belt_List.js");
var Weapon$NumeneraCharacterGenerator = require("../Numenera/Weapon.bs.js");

function initialState(param) {
  return /* [] */0;
}

function WeaponSelector(Props) {
  var weaponCount = Props.weaponCount;
  var weaponSizes = Props.weaponSizes;
  var onSelect = Props.onSelect;
  var match = React.useState(function () {
        return /* [] */0;
      });
  var setSelectedWeapons = match[1];
  var selectedWeapons = match[0];
  var clearWeaponSlot = function (slotToClear) {
    return Belt_List.keep(selectedWeapons, (function (param) {
                  return param[0] !== slotToClear;
                }));
  };
  var setWeaponSlot = function (slotToSet, weaponType) {
    return Belt_List.add(Belt_List.keep(selectedWeapons, (function (param) {
                      return param[0] !== slotToSet;
                    })), [
                slotToSet,
                weaponType
              ]);
  };
  var weaponSizeNames = Belt_List.length(weaponSizes) === 0 ? "None" : Belt_List.reduce(weaponSizes, "", (function (acc, weaponSize) {
            var name = Weapon$NumeneraCharacterGenerator.getWeaponSizeInfo(weaponSize).name;
            if (acc.length === 0) {
              return name;
            } else {
              return acc + (", " + name);
            }
          }));
  var availableWeapons = Belt_List.flatten(Belt_List.map(weaponSizes, (function (weaponSize) {
              return Belt_List.keep(Weapon$NumeneraCharacterGenerator.weaponInfos, (function (weaponInfo) {
                            return weaponInfo.weaponSize === weaponSize;
                          }));
            })));
  var weaponSlots = Belt_List.makeBy(weaponCount, (function (i) {
          return i + 1 | 0;
        }));
  return React.createElement("div", undefined, React.createElement("h2", undefined, "Weapons"), React.createElement("p", undefined, "Weapon sizes: " + weaponSizeNames), Belt_List.toArray(Belt_List.map(weaponSlots, (function (weaponSlot) {
                        var label = "Weapon #" + String(weaponSlot);
                        var key = "weapon-" + String(weaponSlot);
                        return React.createElement("p", {
                                    key: key
                                  }, React.createElement("label", undefined, label + ": ", React.createElement("select", {
                                            onChange: (function (param) {
                                                var value = param.target.value;
                                                var weaponType = Weapon$NumeneraCharacterGenerator.stringToWeaponType(value);
                                                if (weaponType !== undefined) {
                                                  var newSelectedWeapons = setWeaponSlot(weaponSlot, weaponType);
                                                  Curry._1(setSelectedWeapons, (function (param) {
                                                          return newSelectedWeapons;
                                                        }));
                                                  return Curry._1(onSelect, Belt_List.map(newSelectedWeapons, (function (param) {
                                                                    return param[1];
                                                                  })));
                                                }
                                                var newSelectedWeapons$1 = clearWeaponSlot(weaponSlot);
                                                Curry._1(setSelectedWeapons, (function (param) {
                                                        return newSelectedWeapons$1;
                                                      }));
                                                return Curry._1(onSelect, Belt_List.map(newSelectedWeapons$1, (function (param) {
                                                                  return param[1];
                                                                })));
                                              })
                                          }, React.createElement("option", undefined, "Choose a weapon"), Belt_List.toArray(Belt_List.map(availableWeapons, (function (weaponInfo) {
                                                      return React.createElement("option", {
                                                                  key: weaponInfo.id,
                                                                  value: weaponInfo.id
                                                                }, weaponInfo.name);
                                                    }))))));
                      }))));
}

var make = WeaponSelector;

exports.initialState = initialState;
exports.make = make;
/* react Not a pure module */
