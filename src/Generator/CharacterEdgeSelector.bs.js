'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Caml_format = require("bs-platform/lib/js/caml_format.js");

function calculateAvailable(might, speed, intellect) {
  return ((1 - might | 0) - speed | 0) - intellect | 0;
}

function CharacterEdgeSelector(Props) {
  var edges = Props.edges;
  var onUpdate = Props.onUpdate;
  var available = calculateAvailable(edges.might, edges.speed, edges.intellect);
  var onMightChange = function (e) {
    var newMight = Caml_format.caml_int_of_string(e.target.value);
    var newAvailable = calculateAvailable(newMight, edges.speed, edges.intellect);
    if (newAvailable >= 0) {
      return Curry._1(onUpdate, {
                  might: newMight,
                  speed: edges.speed,
                  intellect: edges.intellect
                });
    }
    
  };
  var onSpeedChange = function (e) {
    var newSpeed = Caml_format.caml_int_of_string(e.target.value);
    var newAvailable = calculateAvailable(edges.might, newSpeed, edges.intellect);
    if (newAvailable >= 0) {
      return Curry._1(onUpdate, {
                  might: edges.might,
                  speed: newSpeed,
                  intellect: edges.intellect
                });
    }
    
  };
  var onIntellectChange = function (e) {
    var newIntellect = Caml_format.caml_int_of_string(e.target.value);
    var newAvailable = calculateAvailable(edges.might, edges.speed, newIntellect);
    if (newAvailable >= 0) {
      return Curry._1(onUpdate, {
                  might: edges.might,
                  speed: edges.speed,
                  intellect: newIntellect
                });
    }
    
  };
  return React.createElement(React.Fragment, undefined, React.createElement("h2", undefined, "Edge"), React.createElement("p", undefined, "Points available: " + String(available)), React.createElement("p", undefined, React.createElement("label", undefined, "Might: ", React.createElement("input", {
                          max: String(1),
                          min: "0",
                          type: "number",
                          value: String(edges.might),
                          onChange: onMightChange
                        }))), React.createElement("p", undefined, React.createElement("label", undefined, "Speed: ", React.createElement("input", {
                          max: String(1),
                          min: "0",
                          type: "number",
                          value: String(edges.speed),
                          onChange: onSpeedChange
                        }))), React.createElement("p", undefined, React.createElement("label", undefined, "Intellect: ", React.createElement("input", {
                          max: String(1),
                          min: "0",
                          type: "number",
                          value: String(edges.intellect),
                          onChange: onIntellectChange
                        }))));
}

var maxAvailable = 1;

var make = CharacterEdgeSelector;

exports.maxAvailable = maxAvailable;
exports.calculateAvailable = calculateAvailable;
exports.make = make;
/* react Not a pure module */
