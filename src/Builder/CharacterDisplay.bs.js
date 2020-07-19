'use strict';

var React = require("react");

function CharacterDisplay(Props) {
  var character = Props.character;
  if (character !== undefined) {
    return React.createElement("h1", undefined, character.characterType);
  } else {
    return null;
  }
}

var make = CharacterDisplay;

exports.make = make;
/* react Not a pure module */
