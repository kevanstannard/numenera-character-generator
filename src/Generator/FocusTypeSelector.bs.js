'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Belt_List = require("bs-platform/lib/js/belt_List.js");
var Focus$NumeneraCharacterGenerator = require("../Numenera/Focus.bs.js");

function FocusTypeSelector(Props) {
  var onSelect = Props.onSelect;
  var onChange = function (e) {
    var value = e.target.value;
    return Curry._1(onSelect, Focus$NumeneraCharacterGenerator.stringToFocusType(value));
  };
  return React.createElement("div", undefined, React.createElement("h2", undefined, "Character Focus"), React.createElement("select", {
                  onChange: onChange
                }, React.createElement("option", undefined, "Choose your Focus"), Belt_List.toArray(Belt_List.map(Focus$NumeneraCharacterGenerator.focusInfos, (function (focusInfo) {
                            return React.createElement("option", {
                                        key: focusInfo.id,
                                        value: focusInfo.id
                                      }, focusInfo.name);
                          })))));
}

var make = FocusTypeSelector;

exports.make = make;
/* react Not a pure module */
