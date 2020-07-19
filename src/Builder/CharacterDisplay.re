[@react.component]
let make = (~character: option(CharacterBuilderType.t)) => {
  switch (character) {
  | None => React.null
  | Some(character) => <h1> {React.string(character.characterType)} </h1>
  };
};
