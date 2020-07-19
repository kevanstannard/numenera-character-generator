open Character;
open Descriptor;
open Focus;
open Weapon;
open Esotery;
open Trick;

type t = {
  characterType: option(characterType),
  characterDescriptor: option(descriptorType),
  characterFocus: option(focusType),
  weapons: list(weaponType),
  esoteries: list(esotery),
  tricks: list(trick),
};

let defaultState = (): t => {
  characterType: None,
  characterDescriptor: None,
  characterFocus: None,
  weapons: [],
  esoteries: [],
  tricks: [],
};
