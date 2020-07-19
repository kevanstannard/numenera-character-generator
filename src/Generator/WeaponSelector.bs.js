'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Belt_List = require("bs-platform/lib/js/belt_List.js");
var Weapon$NumeneraCharacterGenerator = require("../Numenera/Weapon.bs.js");
var SlotItem$NumeneraCharacterGenerator = require("../Util/SlotItem.bs.js");

function WeaponSelector$SingleWeaponSelector(Props) {
  var label = Props.label;
  var availableWeapons = Props.availableWeapons;
  var onSelect = Props.onSelect;
  var onChange = function (e) {
    var value = e.target.value;
    return Curry._1(onSelect, Weapon$NumeneraCharacterGenerator.stringToWeaponType(value));
  };
  return React.createElement("p", undefined, React.createElement("label", undefined, label + ": ", React.createElement("select", {
                      onChange: onChange
                    }, React.createElement("option", undefined, "Choose a weapon"), Belt_List.toArray(Belt_List.map(availableWeapons, (function (weaponInfo) {
                                return React.createElement("option", {
                                            key: weaponInfo.id,
                                            value: weaponInfo.id
                                          }, weaponInfo.name);
                              }))))));
}

var SingleWeaponSelector = {
  make: WeaponSelector$SingleWeaponSelector
};

function WeaponSelector(Props) {
  var weaponCount = Props.weaponCount;
  var weaponSizes = Props.weaponSizes;
  var onSelect = Props.onSelect;
  var match = React.useState(function () {
        return /* [] */0;
      });
  var setSelectedWeapons = match[1];
  var selectedWeapons = match[0];
  var weaponSizeNames = Belt_List.length(weaponSizes) === 0 ? "None" : Belt_List.reduce(weaponSizes, "", (function (acc, weaponSize) {
            var name = Weapon$NumeneraCharacterGenerator.getWeaponSizeInfo(weaponSize).name;
            if (acc.length === 0) {
              return name;
            } else {
              return acc + (", " + name);
            }
          }));
  var availableWeapons = Weapon$NumeneraCharacterGenerator.weaponInfosFiltered(weaponSizes);
  return React.createElement("div", undefined, React.createElement("h2", undefined, "Weapons"), React.createElement("p", undefined, "Weapon sizes: " + weaponSizeNames), Belt_List.toArray(Belt_List.map(SlotItem$NumeneraCharacterGenerator.makeSlots(weaponCount), (function (slot) {
                        var label = "Weapon #" + String(slot);
                        var key = "weapon-" + String(slot);
                        return React.createElement(WeaponSelector$SingleWeaponSelector, {
                                    label: label,
                                    availableWeapons: availableWeapons,
                                    onSelect: (function (param) {
                                        var newSelectedWeapons = SlotItem$NumeneraCharacterGenerator.updateSlot(selectedWeapons, slot, param);
                                        Curry._1(setSelectedWeapons, (function (param) {
                                                return newSelectedWeapons;
                                              }));
                                        return Curry._1(onSelect, SlotItem$NumeneraCharacterGenerator.toItems(newSelectedWeapons));
                                      }),
                                    key: key
                                  });
                      }))));
}

var make = WeaponSelector;

exports.SingleWeaponSelector = SingleWeaponSelector;
exports.make = make;
/* react Not a pure module */
