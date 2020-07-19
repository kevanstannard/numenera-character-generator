type trick =
  | TrainedInArmour
  | CreateDeadlyPoison
  | CritterCompanion
  | FaceMorph
  | FleetOfFoot
  | LateInspiration
  | LinkSenses
  | PhasedPocket
  | Vanish;

type trickInfo = {
  trick,
  id: string,
  name: string,
};

let tricks = [
  TrainedInArmour,
  CreateDeadlyPoison,
  CritterCompanion,
  FaceMorph,
  FleetOfFoot,
  LateInspiration,
  LinkSenses,
  PhasedPocket,
  Vanish,
];

let getTrickInfo = (trick): trickInfo => {
  switch (trick) {
  | TrainedInArmour => {
      trick: TrainedInArmour,
      id: "TrainedInArmour",
      name: "Trained in Armour",
    }
  | CreateDeadlyPoison => {
      trick: CreateDeadlyPoison,
      id: "CreateDeadlyPoison",
      name: "Create Deadly Poison",
    }
  | CritterCompanion => {
      trick: CritterCompanion,
      id: "CritterCompanion",
      name: "Critter Companion",
    }
  | FaceMorph => {trick: FaceMorph, id: "FaceMorph", name: "Face Morph"}
  | FleetOfFoot => {
      trick: FleetOfFoot,
      id: "FleetOfFoot",
      name: "Fleet of Foot",
    }
  | LateInspiration => {
      trick: LateInspiration,
      id: "LateInspiration",
      name: "Late Inspiration",
    }
  | LinkSenses => {trick: LinkSenses, id: "LinkSenses", name: "Link Senses"}
  | PhasedPocket => {
      trick: PhasedPocket,
      id: "PhasedPocket",
      name: "Phased Pocket",
    }
  | Vanish => {trick: Vanish, id: "Vanish", name: "Vanish"}
  };
};

let trickInfos = tricks->Belt.List.map(getTrickInfo);

let stringToTrick = (id: string): option(trick) => {
  Belt.List.reduce(trickInfos, None, (acc, trickInfo) => {
    switch (acc) {
    | Some(trick) => Some(trick)
    | None => trickInfo.id === id ? Some(trickInfo.trick) : acc
    }
  });
};
