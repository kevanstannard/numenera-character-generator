'use strict';

var React = require("react");
var ReactDom = require("react-dom");
var ExampleStyles$NumeneraCharacterGenerator = require("./ExampleStyles.bs.js");
var BlinkingGreeting$NumeneraCharacterGenerator = require("./BlinkingGreeting/BlinkingGreeting.bs.js");
var CharacterGenerator$NumeneraCharacterGenerator = require("../Generator/CharacterGenerator.bs.js");
var FetchedDogPictures$NumeneraCharacterGenerator = require("./FetchedDogPictures/FetchedDogPictures.bs.js");
var ReducerFromReactJSDocs$NumeneraCharacterGenerator = require("./ReducerFromReactJSDocs/ReducerFromReactJSDocs.bs.js");
var ReasonUsingJSUsingReason$NumeneraCharacterGenerator = require("./ReasonUsingJSUsingReason/ReasonUsingJSUsingReason.bs.js");

var style = document.createElement("style");

document.head.appendChild(style);

style.innerHTML = ExampleStyles$NumeneraCharacterGenerator.style;

function makeContainer(text) {
  var container = document.createElement("div");
  container.className = "container";
  var title = document.createElement("div");
  title.className = "containerTitle";
  title.innerText = text;
  var content = document.createElement("div");
  content.className = "containerContent";
  container.appendChild(title);
  container.appendChild(content);
  document.body.appendChild(container);
  return content;
}

ReactDom.render(React.createElement(CharacterGenerator$NumeneraCharacterGenerator.make, {}), makeContainer("Character Generator"));

ReactDom.render(React.createElement(BlinkingGreeting$NumeneraCharacterGenerator.make, {
          children: "Hello!"
        }), makeContainer("Blinking Greeting"));

ReactDom.render(React.createElement(ReducerFromReactJSDocs$NumeneraCharacterGenerator.make, {}), makeContainer("Reducer From ReactJS Docs"));

ReactDom.render(React.createElement(FetchedDogPictures$NumeneraCharacterGenerator.make, {}), makeContainer("Fetched Dog Pictures"));

ReactDom.render(React.createElement(ReasonUsingJSUsingReason$NumeneraCharacterGenerator.make, {}), makeContainer("Reason Using JS Using Reason"));

exports.style = style;
exports.makeContainer = makeContainer;
/* style Not a pure module */
