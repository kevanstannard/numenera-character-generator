'use strict';

var Character$NumeneraCharacterGenerator = require("../Numenera/Character.bs.js");

function build(state) {
  var characterType = state.characterType;
  if (characterType === undefined) {
    return ;
  }
  var characterInfo = Character$NumeneraCharacterGenerator.getCharacterInfo(characterType);
  return {
          characterType: characterInfo.name
        };
}

exports.build = build;
/* Character-NumeneraCharacterGenerator Not a pure module */
