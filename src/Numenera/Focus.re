type focusType =
  | BearsAHaloOfFire
  | CommandsMentalPowers
  | ControlsBeasts
  | ControlsGravity
  | CraftsIllusions
  | EmploysMagnetism
  | Entertains
  | ExistsPartiallyOutOfPhase
  | ExploresDarkPlaces
  | FightsWithPanache
  | FocusesMindOverMatter
  | FusesFleshAndSteel
  | HowlsAtTheMoon
  | Hunts
  | LivesInTheWilderness
  | MastersDefense
  | MastersWeaponry
  | Murders
  | Rages
  | RidesTheLightening
  | SpeaksWithASilverTongue
  | TalksToMachines
  | WearsASheenOfIce
  | WieldsPowerWithPrecision
  | WieldsTwoWeaponsAtOnce
  | WorksTheBackAlleys
  | WorksMiracles;

type focusInfo = {
  focusType,
  id: string,
  name: string,
};

let focusTypes: list(focusType) = [
  BearsAHaloOfFire,
  CommandsMentalPowers,
  ControlsBeasts,
  ControlsGravity,
  CraftsIllusions,
  EmploysMagnetism,
  Entertains,
  ExistsPartiallyOutOfPhase,
  ExploresDarkPlaces,
  FightsWithPanache,
  FocusesMindOverMatter,
  FusesFleshAndSteel,
  HowlsAtTheMoon,
  Hunts,
  LivesInTheWilderness,
  MastersDefense,
  MastersWeaponry,
  Murders,
  Rages,
  RidesTheLightening,
  SpeaksWithASilverTongue,
  TalksToMachines,
  WearsASheenOfIce,
  WieldsPowerWithPrecision,
  WieldsTwoWeaponsAtOnce,
  WorksTheBackAlleys,
  WorksMiracles,
];

let getFocusInfo = (focusType: focusType): focusInfo => {
  switch (focusType) {
  | BearsAHaloOfFire => {
      focusType: BearsAHaloOfFire,
      id: "bears_a_halo_of_fire",
      name: "Bears a Halo of Fire",
    }
  | CommandsMentalPowers => {
      focusType: CommandsMentalPowers,
      id: "commands_mental_powers",
      name: "Commands Mental powers",
    }
  | ControlsBeasts => {
      focusType: ControlsBeasts,
      id: "controls_beasts",
      name: "Controls Beasts",
    }
  | ControlsGravity => {
      focusType: ControlsGravity,
      id: "controls_gravity",
      name: "Controls Gravity",
    }
  | CraftsIllusions => {
      focusType: CraftsIllusions,
      id: "crafts_illusions",
      name: "Crafts Illusions",
    }
  | EmploysMagnetism => {
      focusType: EmploysMagnetism,
      id: "employs_magnetism",
      name: "Employs Magnetism",
    }
  | Entertains => {
      focusType: Entertains,
      id: "entertains",
      name: "Entertains",
    }
  | ExistsPartiallyOutOfPhase => {
      focusType: ExistsPartiallyOutOfPhase,
      id: "exists_partially_out_of_phase",
      name: "Exists Partially Out of Phase",
    }
  | ExploresDarkPlaces => {
      focusType: ExploresDarkPlaces,
      id: "exlores_dark_places",
      name: "Explores Dark Places",
    }
  | FightsWithPanache => {
      focusType: FightsWithPanache,
      id: "fights_with_panache",
      name: "Fights with Panache",
    }
  | FocusesMindOverMatter => {
      focusType: FocusesMindOverMatter,
      id: "focuses_mind_over_matter",
      name: "Focuses Mind Over Matter",
    }
  | FusesFleshAndSteel => {
      focusType: FusesFleshAndSteel,
      id: "fuses_flesh_and_steel",
      name: "Fuses Flesh and Steel",
    }
  | HowlsAtTheMoon => {
      focusType: HowlsAtTheMoon,
      id: "howls_at_the_moon",
      name: "Howls at the Moon",
    }
  | Hunts => {focusType: Hunts, id: "hunts", name: "Hunts"}
  | LivesInTheWilderness => {
      focusType: LivesInTheWilderness,
      id: "lives_in_the_wilderness",
      name: "Lives in the Wilderness",
    }
  | MastersDefense => {
      focusType: MastersDefense,
      id: "masters_defense",
      name: "Masters Defense",
    }
  | MastersWeaponry => {
      focusType: MastersWeaponry,
      id: "masters_weaponry",
      name: "Masters Weaponry",
    }
  | Murders => {focusType: Murders, id: "murders", name: "Muders"}
  | Rages => {focusType: Rages, id: "rages", name: "Rages"}
  | RidesTheLightening => {
      focusType: RidesTheLightening,
      id: "rides_the_lightening",
      name: "Rides the Lightening",
    }
  | SpeaksWithASilverTongue => {
      focusType: SpeaksWithASilverTongue,
      id: "speaks_with_a_silver_tongue",
      name: "Speaks with a Silver Tongue",
    }
  | TalksToMachines => {
      focusType: TalksToMachines,
      id: "talks_to_machines",
      name: "Talks to Machines",
    }
  | WearsASheenOfIce => {
      focusType: WearsASheenOfIce,
      id: "wears_a_sheen_of_ice",
      name: "Wears a Sheen of Ice",
    }
  | WieldsPowerWithPrecision => {
      focusType: WieldsPowerWithPrecision,
      id: "wields_power_with_precision",
      name: "Wields Power with Precision",
    }
  | WieldsTwoWeaponsAtOnce => {
      focusType: WieldsTwoWeaponsAtOnce,
      id: "wields_two_weapons_at_once",
      name: "Wields Two Weapons at Once",
    }
  | WorksTheBackAlleys => {
      focusType: WorksTheBackAlleys,
      id: "works_the_back_alleys",
      name: "Works the Back Alleys",
    }
  | WorksMiracles => {
      focusType: WorksMiracles,
      id: "works_miracles",
      name: "Works Miracles",
    }
  };
};

let focusInfos: list(focusInfo) = Belt.List.map(focusTypes, getFocusInfo);

let stringToFocusType = (id: string): option(focusType) => {
  Belt.List.reduce(focusInfos, None, (acc, focusInfo) => {
    switch (acc) {
    | Some(focusType) => Some(focusType)
    | None => focusInfo.id === id ? Some(focusInfo.focusType) : acc
    }
  });
};
