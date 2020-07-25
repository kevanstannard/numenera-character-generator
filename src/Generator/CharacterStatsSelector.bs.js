'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Caml_format = require("bs-platform/lib/js/caml_format.js");

function calculateAvailable(might, speed, intellect) {
  return ((6 - might | 0) - speed | 0) - intellect | 0;
}

function CharacterStatsSelector(Props) {
  var stats = Props.stats;
  var onUpdate = Props.onUpdate;
  var available = calculateAvailable(stats.might, stats.speed, stats.intellect);
  var onMightChange = function (e) {
    var newMight = Caml_format.caml_int_of_string(e.target.value);
    var newAvailable = calculateAvailable(newMight, stats.speed, stats.intellect);
    if (newAvailable >= 0) {
      return Curry._1(onUpdate, {
                  might: newMight,
                  speed: stats.speed,
                  intellect: stats.intellect
                });
    }
    
  };
  var onSpeedChange = function (e) {
    var newSpeed = Caml_format.caml_int_of_string(e.target.value);
    var newAvailable = calculateAvailable(stats.might, newSpeed, stats.intellect);
    if (newAvailable >= 0) {
      return Curry._1(onUpdate, {
                  might: stats.might,
                  speed: newSpeed,
                  intellect: stats.intellect
                });
    }
    
  };
  var onIntellectChange = function (e) {
    var newIntellect = Caml_format.caml_int_of_string(e.target.value);
    var newAvailable = calculateAvailable(stats.might, stats.speed, newIntellect);
    if (newAvailable >= 0) {
      return Curry._1(onUpdate, {
                  might: stats.might,
                  speed: stats.speed,
                  intellect: newIntellect
                });
    }
    
  };
  return React.createElement(React.Fragment, undefined, React.createElement("h2", undefined, "Extra Stats"), React.createElement("p", undefined, "Points available: " + String(available)), React.createElement("p", undefined, React.createElement("label", undefined, "Might: ", React.createElement("input", {
                          max: "6",
                          min: "0",
                          type: "number",
                          value: String(stats.might),
                          onChange: onMightChange
                        }))), React.createElement("p", undefined, React.createElement("label", undefined, "Speed: ", React.createElement("input", {
                          max: "6",
                          min: "0",
                          type: "number",
                          value: String(stats.speed),
                          onChange: onSpeedChange
                        }))), React.createElement("p", undefined, React.createElement("label", undefined, "Intellect: ", React.createElement("input", {
                          max: "6",
                          min: "0",
                          type: "number",
                          value: String(stats.intellect),
                          onChange: onIntellectChange
                        }))));
}

var maxAvailable = 6;

var make = CharacterStatsSelector;

exports.maxAvailable = maxAvailable;
exports.calculateAvailable = calculateAvailable;
exports.make = make;
/* react Not a pure module */
