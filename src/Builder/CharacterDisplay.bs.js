'use strict';

var React = require("react");
var Belt_List = require("bs-platform/lib/js/belt_List.js");
var Character$NumeneraCharacterGenerator = require("../Numenera/Character.bs.js");

function line(x) {
  return x + "\n";
}

function lines(xs) {
  return Belt_List.reduce(xs, "", (function (acc, x) {
                return acc + (x + "\n");
              }));
}

function listJoin(items, separator) {
  return Belt_List.reduce(items, "", (function (acc, item) {
                if (acc.length === 0) {
                  return item;
                } else {
                  return acc + (separator + item);
                }
              }));
}

function characterTypeToDisplay(characterType) {
  if (characterType !== undefined) {
    return Character$NumeneraCharacterGenerator.characterTypeToString(characterType);
  } else {
    return "";
  }
}

function effortToDisplay(effort) {
  return String(effort);
}

function statValueToDisplay(values) {
  var total = Belt_List.reduce(values, 0, (function (acc, value) {
          return acc + value.amount | 0;
        }));
  var reasons = Belt_List.reduce(values, /* [] */0, (function (acc, value) {
          return {
                  hd: value.reason + (": " + String(value.amount)),
                  tl: acc
                };
        }));
  return {
          total: String(total),
          reasons: reasons
        };
}

function edgeValueToDisplay(values) {
  var total = Belt_List.reduce(values, 0, (function (acc, value) {
          return acc + value.amount | 0;
        }));
  var reasons = Belt_List.reduce(values, /* [] */0, (function (acc, value) {
          return {
                  hd: value.reason + (": " + String(value.amount)),
                  tl: acc
                };
        }));
  return {
          total: String(total),
          reasons: reasons
        };
}

function CharacterDisplay(Props) {
  var character = Props.character;
  console.log("character >>>", character);
  var mightDisplay = statValueToDisplay(character.might);
  var speedDisplay = statValueToDisplay(character.speed);
  var intellectDisplay = statValueToDisplay(character.intellect);
  var mightEdgeDisplay = edgeValueToDisplay(character.mightEdge);
  var speedEdgeDisplay = edgeValueToDisplay(character.speedEdge);
  var intellectEdgeDisplay = edgeValueToDisplay(character.intellectEdge);
  var content = "CHARACTER TYPE\n" + (characterTypeToDisplay(character.characterType) + "\n\nEFFORT\n" + (String(character.effort) + "\n\nMIGHT\n" + ("Pool: " + mightDisplay.total + "\n" + ("Edge: " + mightEdgeDisplay.total + "\n\nSPEED\n" + ("Pool: " + speedDisplay.total + "\n" + ("Edge: " + speedEdgeDisplay.total + "\n\nINTELLECT\n" + ("Pool: " + intellectDisplay.total + "\n" + ("Edge: " + intellectEdgeDisplay.total + "\n\n"))))))));
  return React.createElement("pre", undefined, content);
}

var make = CharacterDisplay;

exports.line = line;
exports.lines = lines;
exports.listJoin = listJoin;
exports.characterTypeToDisplay = characterTypeToDisplay;
exports.effortToDisplay = effortToDisplay;
exports.statValueToDisplay = statValueToDisplay;
exports.edgeValueToDisplay = edgeValueToDisplay;
exports.make = make;
/* react Not a pure module */
