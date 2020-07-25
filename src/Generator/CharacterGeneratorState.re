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
  extraStats: characterInfoStat,
  extraEdges: characterInfoEdge,
};

let defaultState = (): t => {
  characterType: None,
  characterDescriptor: None,
  characterFocus: None,
  weapons: [],
  esoteries: [],
  tricks: [],
  extraStats: {
    might: 0,
    speed: 0,
    intellect: 0,
  },
  extraEdges: {
    might: 0,
    speed: 0,
    intellect: 0,
  },
};
