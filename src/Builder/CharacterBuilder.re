open Character;

let build =
    (state: CharacterGeneratorState.t): option(CharacterBuilderType.t) => {
  switch (state.characterType) {
  | None => None
  | Some(characterType) =>
    let characterInfo = getCharacterInfo(characterType);
    let result: CharacterBuilderType.t = {characterType: characterInfo.name};
    Some(result);
  };
};
