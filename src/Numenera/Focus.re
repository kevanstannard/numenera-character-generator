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
      id: "BearsAHaloOfFire",
      name: "Bears a Halo of Fire",
    }
  | CommandsMentalPowers => {
      focusType: CommandsMentalPowers,
      id: "CommandsMentalPowers",
      name: "Commands Mental powers",
    }
  | ControlsBeasts => {
      focusType: ControlsBeasts,
      id: "ControlsBeasts",
      name: "Controls Beasts",
    }
  | ControlsGravity => {
      focusType: ControlsGravity,
      id: "ControlsGravity",
      name: "Controls Gravity",
    }
  | CraftsIllusions => {
      focusType: CraftsIllusions,
      id: "CraftsIllusions",
      name: "Crafts Illusions",
    }
  | EmploysMagnetism => {
      focusType: EmploysMagnetism,
      id: "EmploysMagnetism",
      name: "Employs Magnetism",
    }
  | Entertains => {
      focusType: Entertains,
      id: "Entertains",
      name: "Entertains",
    }
  | ExistsPartiallyOutOfPhase => {
      focusType: ExistsPartiallyOutOfPhase,
      id: "ExistsPartiallyOutOfPhase",
      name: "Exists Partially Out of Phase",
    }
  | ExploresDarkPlaces => {
      focusType: ExploresDarkPlaces,
      id: "ExploresDarkPlaces",
      name: "Explores Dark Places",
    }
  | FightsWithPanache => {
      focusType: FightsWithPanache,
      id: "FightsWithPanache",
      name: "Fights with Panache",
    }
  | FocusesMindOverMatter => {
      focusType: FocusesMindOverMatter,
      id: "FocusesMindOverMatter",
      name: "Focuses Mind Over Matter",
    }
  | FusesFleshAndSteel => {
      focusType: FusesFleshAndSteel,
      id: "FusesFleshAndSteel",
      name: "Fuses Flesh and Steel",
    }
  | HowlsAtTheMoon => {
      focusType: HowlsAtTheMoon,
      id: "HowlsAtTheMoon",
      name: "Howls at the Moon",
    }
  | Hunts => {focusType: Hunts, id: "Hunts", name: "Hunts"}
  | LivesInTheWilderness => {
      focusType: LivesInTheWilderness,
      id: "LivesInTheWilderness",
      name: "Lives in the Wilderness",
    }
  | MastersDefense => {
      focusType: MastersDefense,
      id: "MastersDefense",
      name: "Masters Defense",
    }
  | MastersWeaponry => {
      focusType: MastersWeaponry,
      id: "MastersWeaponry",
      name: "Masters Weaponry",
    }
  | Murders => {focusType: Murders, id: "Murders", name: "Muders"}
  | Rages => {focusType: Rages, id: "Rages", name: "Rages"}
  | RidesTheLightening => {
      focusType: RidesTheLightening,
      id: "RidesTheLightening",
      name: "Rides the Lightening",
    }
  | SpeaksWithASilverTongue => {
      focusType: SpeaksWithASilverTongue,
      id: "SpeaksWithASilverTongue",
      name: "Speaks with a Silver Tongue",
    }
  | TalksToMachines => {
      focusType: TalksToMachines,
      id: "TalksToMachines",
      name: "Talks to Machines",
    }
  | WearsASheenOfIce => {
      focusType: WearsASheenOfIce,
      id: "WearsASheenOfIce",
      name: "Wears a Sheen of Ice",
    }
  | WieldsPowerWithPrecision => {
      focusType: WieldsPowerWithPrecision,
      id: "WieldsPowerWithPrecision",
      name: "Wields Power with Precision",
    }
  | WieldsTwoWeaponsAtOnce => {
      focusType: WieldsTwoWeaponsAtOnce,
      id: "WieldsTwoWeaponsAtOnce",
      name: "Wields Two Weapons at Once",
    }
  | WorksTheBackAlleys => {
      focusType: WorksTheBackAlleys,
      id: "WorksTheBackAlleys",
      name: "Works the Back Alleys",
    }
  | WorksMiracles => {
      focusType: WorksMiracles,
      id: "WorksMiracles",
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
