'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Belt_List = require("bs-platform/lib/js/belt_List.js");
var Character$NumeneraCharacterGenerator = require("../Numenera/Character.bs.js");

function CharacterTypeSelector(Props) {
  var onSelect = Props.onSelect;
  var onChange = function (e) {
    var value = e.target.value;
    return Curry._1(onSelect, Character$NumeneraCharacterGenerator.stringToCharacterType(value));
  };
  return React.createElement("div", undefined, React.createElement("h2", undefined, "Character Type"), React.createElement("select", {
                  onChange: onChange
                }, React.createElement("option", undefined, "Choose your character type"), Belt_List.toArray(Belt_List.map(Character$NumeneraCharacterGenerator.characterInfos, (function (characterInfo) {
                            return React.createElement("option", {
                                        key: characterInfo.id,
                                        value: characterInfo.id
                                      }, characterInfo.name);
                          })))));
}

var make = CharacterTypeSelector;

exports.make = make;
/* react Not a pure module */
