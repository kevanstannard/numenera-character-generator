'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Belt_List = require("bs-platform/lib/js/belt_List.js");
var Trick$NumeneraCharacterGenerator = require("../Numenera/Trick.bs.js");
var SlotItem$NumeneraCharacterGenerator = require("../Util/SlotItem.bs.js");

function TricksSelector$TrickSelector(Props) {
  var label = Props.label;
  var onSelect = Props.onSelect;
  var onChange = function (e) {
    var value = e.target.value;
    return Curry._1(onSelect, Trick$NumeneraCharacterGenerator.stringToTrick(value));
  };
  return React.createElement("p", undefined, React.createElement("label", undefined, label + ": ", React.createElement("select", {
                      onChange: onChange
                    }, React.createElement("option", undefined, "Choose a trick"), Belt_List.toArray(Belt_List.map(Trick$NumeneraCharacterGenerator.trickInfos, (function (trickInfo) {
                                return React.createElement("option", {
                                            key: trickInfo.id,
                                            value: trickInfo.id
                                          }, trickInfo.name);
                              }))))));
}

var TrickSelector = {
  make: TricksSelector$TrickSelector
};

function TricksSelector(Props) {
  var trickCount = Props.trickCount;
  var onSelect = Props.onSelect;
  var match = React.useState(function () {
        return /* [] */0;
      });
  var setSelected = match[1];
  var selected = match[0];
  return React.createElement("div", undefined, React.createElement("h2", undefined, "Tricks of the Trade"), Belt_List.toArray(Belt_List.map(SlotItem$NumeneraCharacterGenerator.makeSlots(trickCount), (function (slot) {
                        var label = "Trick #" + String(slot);
                        var key = "trick-" + String(slot);
                        return React.createElement(TricksSelector$TrickSelector, {
                                    label: label,
                                    onSelect: (function (param) {
                                        var newSelected = SlotItem$NumeneraCharacterGenerator.updateSlot(selected, slot, param);
                                        Curry._1(setSelected, (function (param) {
                                                return newSelected;
                                              }));
                                        return Curry._1(onSelect, SlotItem$NumeneraCharacterGenerator.toItems(newSelected));
                                      }),
                                    key: key
                                  });
                      }))));
}

var make = TricksSelector;

exports.TrickSelector = TrickSelector;
exports.make = make;
/* react Not a pure module */
