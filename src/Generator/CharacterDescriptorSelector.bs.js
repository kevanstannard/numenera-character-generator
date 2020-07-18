'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Belt_List = require("bs-platform/lib/js/belt_List.js");
var Descriptor$NumeneraCharacterGenerator = require("../Numenera/Descriptor.bs.js");

function CharacterDescriptorSelector(Props) {
  var onSelect = Props.onSelect;
  var onChange = function (e) {
    var value = e.target.value;
    return Curry._1(onSelect, Descriptor$NumeneraCharacterGenerator.stringToDescriptorType(value));
  };
  return React.createElement("div", undefined, React.createElement("h2", undefined, "Character Descriptor"), React.createElement("select", {
                  onChange: onChange
                }, React.createElement("option", undefined, "Choose your Descriptor"), Belt_List.toArray(Belt_List.map(Descriptor$NumeneraCharacterGenerator.descriptorInfos, (function (descriptorInfo) {
                            return React.createElement("option", {
                                        key: descriptorInfo.id,
                                        value: descriptorInfo.id
                                      }, descriptorInfo.name);
                          })))));
}

var make = CharacterDescriptorSelector;

exports.make = make;
/* react Not a pure module */
