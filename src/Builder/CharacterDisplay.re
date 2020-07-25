type statDisplay = {
  total: string,
  reasons: list(string),
};

type edgeDisplay = {
  total: string,
  reasons: list(string),
};

let line = (x: string): string => x ++ "\n";

let lines = (xs: list(string)): string =>
  xs->Belt.List.reduce("", (acc, x) => acc ++ line(x));

let listJoin = (items: list(string), separator: string) =>
  Belt.List.reduce(items, "", (acc: string, item: string) => {
    Js.String.length(acc) === 0 ? item : acc ++ separator ++ item
  });

let characterTypeToDisplay =
    (characterType: option(Character.characterType)): string =>
  switch (characterType) {
  | None => ""
  | Some(characterType) => Character.characterTypeToString(characterType)
  };

let descriptorTypeToDisplay =
    (descriptorType: option(Descriptor.descriptorType)): string =>
  switch (descriptorType) {
  | None => ""
  | Some(descriptorType) => Descriptor.descriptorTypeToString(descriptorType)
  };

let focusTypeToDisplay = (focusType: option(Focus.focusType)): string =>
  switch (focusType) {
  | None => ""
  | Some(focusType) => Focus.focusTypeToString(focusType)
  };

let effortToDisplay = (effort: int) => string_of_int(effort);

let statValueToDisplay =
    (values: list(CharacterBuilder.statValue)): statDisplay => {
  let total = values->Belt.List.reduce(0, (acc, value) => acc + value.amount);
  let reasons: list(string) =
    values->Belt.List.reduce(
      [], (acc: list(string), value: CharacterBuilder.statValue) =>
      [value.reason ++ ": " ++ string_of_int(value.amount), ...acc]
    );
  {total: string_of_int(total), reasons};
};

let edgeValueToDisplay =
    (values: list(CharacterBuilder.edgeValue)): edgeDisplay => {
  let total = values->Belt.List.reduce(0, (acc, value) => acc + value.amount);
  let reasons: list(string) =
    values->Belt.List.reduce(
      [], (acc: list(string), value: CharacterBuilder.edgeValue) =>
      [value.reason ++ ": " ++ string_of_int(value.amount), ...acc]
    );
  {total: string_of_int(total), reasons};
};

[@react.component]
let make = (~character: CharacterBuilder.character) => {
  let mightDisplay = statValueToDisplay(character.might);
  let speedDisplay = statValueToDisplay(character.speed);
  let intellectDisplay = statValueToDisplay(character.intellect);

  let mightEdgeDisplay = edgeValueToDisplay(character.mightEdge);
  let speedEdgeDisplay = edgeValueToDisplay(character.speedEdge);
  let intellectEdgeDisplay = edgeValueToDisplay(character.intellectEdge);

  let content =
    line("CHARACTER TYPE")
    ++ line(characterTypeToDisplay(character.characterType))
    ++ line("")
    ++ line("DESCRIPTOR")
    ++ line(descriptorTypeToDisplay(character.descriptorType))
    ++ line("")
    ++ line("FOCUS")
    ++ line(focusTypeToDisplay(character.focusType))
    ++ line("")
    ++ line("EFFORT")
    ++ line(effortToDisplay(character.effort))
    ++ line("")
    ++ line("MIGHT")
    ++ line("Pool: " ++ mightDisplay.total)
    ++ line("Edge: " ++ mightEdgeDisplay.total)
    ++ line("")
    ++ line("SPEED")
    ++ line("Pool: " ++ speedDisplay.total)
    ++ line("Edge: " ++ speedEdgeDisplay.total)
    ++ line("")
    ++ line("INTELLECT")
    ++ line("Pool: " ++ intellectDisplay.total)
    ++ line("Edge: " ++ intellectEdgeDisplay.total)
    ++ line("");

  <pre> {React.string(content)} </pre>;
};
