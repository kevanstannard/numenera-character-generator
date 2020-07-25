open Character;
open Descriptor;
open Focus;
open Weapon;
open Esotery;
open Trick;

type t = {
  characterType: option(characterType),
  descriptorType: option(descriptorType),
  focusType: option(focusType),
  weapons: list(weaponType),
  esoteries: list(esotery),
  tricks: list(trick),
  extraStats: characterInfoStat,
  extraEdges: characterInfoEdge,
};

let defaultState = (): t => {
  characterType: None,
  descriptorType: None,
  focusType: None,
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
