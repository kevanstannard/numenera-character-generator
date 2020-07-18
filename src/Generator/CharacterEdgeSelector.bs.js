'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Caml_format = require("bs-platform/lib/js/caml_format.js");

function initialState(param) {
  return {
          available: 1,
          might: 0,
          speed: 0,
          intellect: 0
        };
}

function CharacterEdgeSelector(Props) {
  var match = React.useReducer((function (state, action) {
          switch (action.TAG | 0) {
            case /* UpdateMight */0 :
                var newMight = action._0;
                var total = (newMight + state.speed | 0) + state.intellect | 0;
                if (total <= 1) {
                  return {
                          available: 1 - total | 0,
                          might: newMight,
                          speed: state.speed,
                          intellect: state.intellect
                        };
                } else {
                  return state;
                }
            case /* UpdateSpeed */1 :
                var newSpeed = action._0;
                var total$1 = (state.might + newSpeed | 0) + state.intellect | 0;
                if (total$1 <= 1) {
                  return {
                          available: 1 - total$1 | 0,
                          might: state.might,
                          speed: newSpeed,
                          intellect: state.intellect
                        };
                } else {
                  return state;
                }
            case /* UpdateIntellect */2 :
                var newIntellect = action._0;
                var total$2 = (state.might + state.speed | 0) + newIntellect | 0;
                if (total$2 <= 1) {
                  return {
                          available: 1 - total$2 | 0,
                          might: state.might,
                          speed: state.speed,
                          intellect: newIntellect
                        };
                } else {
                  return state;
                }
            
          }
        }), {
        available: 1,
        might: 0,
        speed: 0,
        intellect: 0
      });
  var dispatch = match[1];
  var state = match[0];
  var onMightChange = function (e) {
    var value = e.target.value;
    return Curry._1(dispatch, {
                TAG: /* UpdateMight */0,
                _0: Caml_format.caml_int_of_string(value)
              });
  };
  var onSpeedChange = function (e) {
    var value = e.target.value;
    return Curry._1(dispatch, {
                TAG: /* UpdateSpeed */1,
                _0: Caml_format.caml_int_of_string(value)
              });
  };
  var onIntellectChange = function (e) {
    var value = e.target.value;
    return Curry._1(dispatch, {
                TAG: /* UpdateIntellect */2,
                _0: Caml_format.caml_int_of_string(value)
              });
  };
  return React.createElement(React.Fragment, undefined, React.createElement("h2", undefined, "Edge"), React.createElement("p", undefined, "Points available: " + String(state.available)), React.createElement("p", undefined, React.createElement("label", undefined, "Might: ", React.createElement("input", {
                          max: String(1),
                          min: "0",
                          type: "number",
                          value: String(state.might),
                          onChange: onMightChange
                        }))), React.createElement("p", undefined, React.createElement("label", undefined, "Speed: ", React.createElement("input", {
                          max: String(1),
                          min: "0",
                          type: "number",
                          value: String(state.speed),
                          onChange: onSpeedChange
                        }))), React.createElement("p", undefined, React.createElement("label", undefined, "Intellect: ", React.createElement("input", {
                          max: String(1),
                          min: "0",
                          type: "number",
                          value: String(state.intellect),
                          onChange: onIntellectChange
                        }))));
}

var maxAvailable = 1;

var make = CharacterEdgeSelector;

exports.maxAvailable = maxAvailable;
exports.initialState = initialState;
exports.make = make;
/* react Not a pure module */
