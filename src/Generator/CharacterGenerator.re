open Character;
open Descriptor;
open Focus;
open Weapon;
open Esotery;
open Trick;

type attribute =
  | CharacterType(characterType);

type state = {
  characterType: option(characterType),
  characterDescriptor: option(descriptorType),
  characterFocus: option(focusType),
  weapons: list(weaponType),
  esoteries: list(esotery),
  tricks: list(trick),
};

type actions =
  | SetCharacterType(option(characterType))
  | SetCharacterDescriptor(option(descriptorType))
  | SetCharacterFocus(option(focusType))
  | SetWeapons(list(weaponType))
  | SetEsoteries(list(esotery))
  | SetTricks(list(trick));

type formSection =
  | CollectCharacterType
  | CollectCharacterDescriptor
  | CollectCharacterFocus
  | CollectCharacterStats
  | CollectCharacterEdge
  | CollectWeapons
  | CollectEsoteries
  | CollectTricks;

let formSections = [
  CollectCharacterType,
  CollectCharacterDescriptor,
  CollectCharacterFocus,
  CollectCharacterStats,
  CollectCharacterEdge,
  CollectWeapons,
  CollectEsoteries,
  CollectTricks,
];

let isCharacterTypeSelected = state =>
  Belt.Option.isSome(state.characterType);

let isCharacterType = (state: state, characterType: characterType) => {
  switch (state.characterType) {
  | None => false
  | Some(currentCharacterType) => currentCharacterType === characterType
  };
};

let hasEsoteries = (state: state) => {
  switch (state.characterType) {
  | None => false
  | Some(characterType) =>
    let characterInfo = getCharacterInfo(characterType);
    characterInfo.esoteriesCount > 0;
  };
};

let hasTricks = (state: state) => {
  switch (state.characterType) {
  | None => false
  | Some(characterType) =>
    let characterInfo = getCharacterInfo(characterType);
    characterInfo.tricksCount > 0;
  };
};

let formSectionIsVisible = (state: state, formSection: formSection) => {
  switch (formSection) {
  | CollectCharacterType => true
  | CollectCharacterDescriptor => true
  | CollectCharacterFocus => true
  | CollectCharacterStats => true
  | CollectCharacterEdge => isCharacterType(state, Jack)
  | CollectWeapons => isCharacterTypeSelected(state)
  | CollectEsoteries => hasEsoteries(state)
  | CollectTricks => hasTricks(state)
  };
};

let defaultState = (): state => {
  characterType: None,
  characterDescriptor: None,
  characterFocus: None,
  weapons: [],
  esoteries: [],
  tricks: [],
};

[@react.component]
let make = () => {
  let (state, dispatch) =
    React.useReducer(
      (state, action) =>
        switch (action) {
        | SetCharacterType(characterType) => {...state, characterType}
        | SetCharacterDescriptor(characterDescriptor) => {
            ...state,
            characterDescriptor,
          }
        | SetCharacterFocus(characterFocus) => {...state, characterFocus}
        | SetWeapons(weapons) => {...state, weapons}
        | SetEsoteries(esoteries) => {...state, esoteries}
        | SetTricks(tricks) => {...state, tricks}
        },
      defaultState(),
    );

  Js.log(state);

  let determineVisibleFormSections = (): list(formSection) => {
    formSections
    ->Belt.List.reduce([], (acc, formSection) => {
        formSectionIsVisible(state, formSection)
          ? [formSection, ...acc] : acc
      })
    ->Belt.List.reverse;
  };

  let formSectionEls =
    determineVisibleFormSections()
    ->Belt.List.reduce(
        [],
        (acc, formSection) => {
          let el =
            switch (formSection) {
            | CollectCharacterType =>
              <CharacterTypeSelector
                key="CharacterTypeSelector"
                onSelect={characterType => {
                  dispatch(SetCharacterType(characterType))
                }}
              />
            | CollectCharacterDescriptor =>
              <CharacterDescriptorSelector
                key="CharacterDescriptorSelector"
                onSelect={characterDescriptor => {
                  dispatch(SetCharacterDescriptor(characterDescriptor))
                }}
              />
            | CollectCharacterFocus =>
              <CharacterFocusSelector
                key="CharacterFocusSelector"
                onSelect={characterFocus => {
                  dispatch(SetCharacterFocus(characterFocus))
                }}
              />
            | CollectCharacterStats =>
              <CharacterStatsSelector key="CharacterStatsSelector" />
            | CollectCharacterEdge =>
              <CharacterEdgeSelector key="CharacterEdgeSelector" />
            | CollectWeapons =>
              let characterInfo =
                switch (state.characterType) {
                | None => None
                | Some(characterType) =>
                  Some(getCharacterInfo(characterType))
                };
              switch (characterInfo) {
              | None => React.null
              | Some(characterInfo) =>
                <WeaponsSelector
                  key="WeaponsSelector"
                  weaponCount={characterInfo.weaponCount}
                  weaponSizes={characterInfo.weaponSizes}
                  onSelect={weaponTypes => {
                    dispatch(SetWeapons(weaponTypes))
                  }}
                />
              };
            | CollectEsoteries =>
              let characterInfo =
                switch (state.characterType) {
                | None => None
                | Some(characterType) =>
                  Some(getCharacterInfo(characterType))
                };
              switch (characterInfo) {
              | None => React.null
              | Some(characterInfo) =>
                <EsoteriesSelector
                  key="EsoteriesSelector"
                  esoteryCount={characterInfo.esoteriesCount}
                  onSelect={esoteries => {dispatch(SetEsoteries(esoteries))}}
                />
              };
            | CollectTricks =>
              let characterInfo =
                switch (state.characterType) {
                | None => None
                | Some(characterType) =>
                  Some(getCharacterInfo(characterType))
                };
              switch (characterInfo) {
              | None => React.null
              | Some(characterInfo) =>
                <TricksSelector
                  key="TricksSelector"
                  trickCount={characterInfo.tricksCount}
                  onSelect={tricks => {dispatch(SetTricks(tricks))}}
                />
              };
            };

          [el, ...acc];
        },
      )
    ->Belt.List.reverse
    ->Belt.List.toArray
    ->React.array;

  <div className="container">
    <h1> {React.string("Numenera Character Generator")} </h1>
    <div className="row">
      <div className="col-sm-6"> formSectionEls </div>
      <div className="col-sm-6"> {React.string("Output goes here")} </div>
    </div>
  </div>;
};
