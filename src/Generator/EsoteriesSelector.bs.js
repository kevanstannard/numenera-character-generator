'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Belt_List = require("bs-platform/lib/js/belt_List.js");
var Esotery$NumeneraCharacterGenerator = require("../Numenera/Esotery.bs.js");
var SlotItem$NumeneraCharacterGenerator = require("../Util/SlotItem.bs.js");

function EsoteriesSelector$EsoterySelector(Props) {
  var label = Props.label;
  var onSelect = Props.onSelect;
  var onChange = function (e) {
    var value = e.target.value;
    return Curry._1(onSelect, Esotery$NumeneraCharacterGenerator.stringToEsotery(value));
  };
  return React.createElement("p", undefined, React.createElement("label", undefined, label + ": ", React.createElement("select", {
                      onChange: onChange
                    }, React.createElement("option", undefined, "Choose an esotery"), Belt_List.toArray(Belt_List.map(Esotery$NumeneraCharacterGenerator.esoteryInfos, (function (esoteryInfo) {
                                return React.createElement("option", {
                                            key: esoteryInfo.id,
                                            value: esoteryInfo.id
                                          }, esoteryInfo.name);
                              }))))));
}

var EsoterySelector = {
  make: EsoteriesSelector$EsoterySelector
};

function EsoteriesSelector(Props) {
  var esoteryCount = Props.esoteryCount;
  var onSelect = Props.onSelect;
  var match = React.useState(function () {
        return /* [] */0;
      });
  var setSelectedWeapons = match[1];
  var selectedWeapons = match[0];
  return React.createElement("div", undefined, React.createElement("h2", undefined, "Esoteries"), Belt_List.toArray(Belt_List.map(SlotItem$NumeneraCharacterGenerator.makeSlots(esoteryCount), (function (slot) {
                        var label = "Esotery #" + String(slot);
                        var key = "esotery-" + String(slot);
                        return React.createElement(EsoteriesSelector$EsoterySelector, {
                                    label: label,
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

var make = EsoteriesSelector;

exports.EsoterySelector = EsoterySelector;
exports.make = make;
/* react Not a pure module */
