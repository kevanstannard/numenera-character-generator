open Character;
open Descriptor;
open Focus;

type attribute =
  | CharacterType(characterType);

type state = {
  characterType: option(characterType),
  characterDescriptor: option(descriptorType),
  characterFocus: option(focusType),
  weapons: list(Weapon.weaponType),
};

type actions =
  | SetCharacterType(option(characterType))
  | SetCharacterDescriptor(option(descriptorType))
  | SetCharacterFocus(option(focusType))
  | SetWeapons(list(Weapon.weaponType));

type formSection =
  | CollectCharacterType
  | CollectCharacterDescriptor
  | CollectCharacterFocus
  | CollectCharacterStats
  | CollectCharacterEdge
  | CollectWeapons;

let formSections = [
  CollectCharacterType,
  CollectCharacterDescriptor,
  CollectCharacterFocus,
  CollectCharacterStats,
  CollectCharacterEdge,
  CollectWeapons,
];

let isCharacterTypeSelected = state =>
  Belt.Option.isSome(state.characterType);

let isJack = state => {
  switch (state.characterType) {
  | None => false
  | Some(characterType) => characterType === Jack
  };
};

let formSectionIsVisible = (state: state, formSection: formSection) => {
  switch (formSection) {
  | CollectCharacterType => true
  | CollectCharacterDescriptor => true
  | CollectCharacterFocus => true
  | CollectCharacterStats => true
  | CollectCharacterEdge => isJack(state)
  | CollectWeapons => isCharacterTypeSelected(state)
  };
};

let defaultState = (): state => {
  characterType: None,
  characterDescriptor: None,
  characterFocus: None,
  weapons: [],
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
                <WeaponSelector
                  key="WeaponSelector"
                  weaponCount={characterInfo.weaponCount}
                  weaponSizes={characterInfo.weaponSizes}
                  onSelect={weaponTypes => {
                    dispatch(SetWeapons(weaponTypes))
                  }}
                />
              };
            };
          [el, ...acc];
        },
      )
    ->Belt.List.reverse
    ->Belt.List.toArray
    ->React.array;

  <div>
    <h1> {React.string("Numenera Character Generator")} </h1>
    formSectionEls
  </div>;
};
