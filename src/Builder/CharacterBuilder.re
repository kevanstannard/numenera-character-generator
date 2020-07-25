type statValue = {
  amount: int,
  reason: string,
};

type edgeValue = {
  amount: int,
  reason: string,
};

type character = {
  characterType: option(Character.characterType),
  descriptorType: option(Descriptor.descriptorType),
  focusType: option(Focus.focusType),
  effort: int,
  might: list(statValue),
  speed: list(statValue),
  intellect: list(statValue),
  mightEdge: list(edgeValue),
  speedEdge: list(edgeValue),
  intellectEdge: list(edgeValue),
};

let initialCharacter = (): character => {
  {
    characterType: None,
    descriptorType: None,
    focusType: None,
    effort: 0,
    might: [],
    speed: [],
    intellect: [],
    mightEdge: [],
    speedEdge: [],
    intellectEdge: [],
  };
};

let setCharacterType =
    (character: character, state: CharacterGeneratorState.t): character => {
  ...character,
  characterType: state.characterType,
};

let setDescriptorType =
    (character: character, state: CharacterGeneratorState.t): character => {
  ...character,
  descriptorType: state.descriptorType,
};

let setFocusType =
    (character: character, state: CharacterGeneratorState.t): character => {
  ...character,
  focusType: state.focusType,
};

let addEffort = (character: character, effort: int): character =>
  effort > 0 ? {...character, effort} : character;

let addMight = (character: character, amount: int, reason: string): character =>
  amount > 0
    ? {
      ...character,
      might: Belt.List.add(character.might, {amount, reason}),
    }
    : character;

let addSpeed = (character: character, amount: int, reason: string): character =>
  amount > 0
    ? {
      ...character,
      speed: Belt.List.add(character.speed, {amount, reason}),
    }
    : character;

let addIntellect =
    (character: character, amount: int, reason: string): character =>
  amount > 0
    ? {
      ...character,
      intellect: Belt.List.add(character.intellect, {amount, reason}),
    }
    : character;

let addBaseStats = (character: character, state: CharacterGeneratorState.t) => {
  switch (state.characterType) {
  | None => character
  | Some(characterType) =>
    let reason = "Base";
    let characterInfo = Character.getCharacterInfo(characterType);
    let {might, speed, intellect}: Character.characterInfoStat =
      characterInfo.baseStat;
    character
    ->addMight(might, reason)
    ->addSpeed(speed, reason)
    ->addIntellect(intellect, reason);
  };
};

let addExtraStats = (character: character, state: CharacterGeneratorState.t) => {
  let reason = "Extra";
  let {might, speed, intellect}: Character.characterInfoStat =
    state.extraStats;
  character
  ->addMight(might, reason)
  ->addSpeed(speed, reason)
  ->addIntellect(intellect, reason);
};

let addMightEdge =
    (character: character, amount: int, reason: string): character =>
  amount > 0
    ? {
      ...character,
      mightEdge: Belt.List.add(character.mightEdge, {amount, reason}),
    }
    : character;

let addSpeedEdge =
    (character: character, amount: int, reason: string): character =>
  amount > 0
    ? {
      ...character,
      speedEdge: Belt.List.add(character.speedEdge, {amount, reason}),
    }
    : character;

let addIntellectEdge =
    (character: character, amount: int, reason: string): character =>
  amount > 0
    ? {
      ...character,
      intellectEdge:
        Belt.List.add(character.intellectEdge, {amount, reason}),
    }
    : character;

let addBaseEdges = (character: character, state: CharacterGeneratorState.t) => {
  switch (state.characterType) {
  | None => character
  | Some(characterType) =>
    let reason = "Base";
    let characterInfo = Character.getCharacterInfo(characterType);
    let {might, speed, intellect}: Character.characterInfoEdge =
      characterInfo.baseEdge;
    character
    ->addMightEdge(might, reason)
    ->addSpeedEdge(speed, reason)
    ->addIntellectEdge(intellect, reason);
  };
};

let addExtraEdges = (character: character, state: CharacterGeneratorState.t) => {
  let reason = "Extra";
  let {might, speed, intellect}: Character.characterInfoEdge =
    state.extraEdges;
  character
  ->addMightEdge(might, reason)
  ->addSpeedEdge(speed, reason)
  ->addIntellectEdge(intellect, reason);
};

let build = (state: CharacterGeneratorState.t): character => {
  initialCharacter()
  ->setCharacterType(state)
  ->setDescriptorType(state)
  ->setFocusType(state)
  ->addEffort(1)
  ->addBaseStats(state)
  ->addExtraStats(state)
  ->addBaseEdges(state)
  ->addExtraEdges(state);
};
