type fightingMove =
  | Aggression
  | FleetOfFoot
  | ImpressiveDisplay
  | Misdirect
  | NoNeedForWeapons
  | TrainedWithoutArmour;

type fightingMoveInfo = {
  fightingMove,
  id: string,
  name: string,
};

let fightingMoves = [
  Aggression,
  FleetOfFoot,
  ImpressiveDisplay,
  Misdirect,
  NoNeedForWeapons,
  TrainedWithoutArmour,
];

let getFightingMoveInfo = (fightingMove): fightingMoveInfo => {
  switch (fightingMove) {
  | Aggression => {
      fightingMove: Aggression,
      id: "Aggression",
      name: "Aggression",
    }
  | FleetOfFoot => {
      fightingMove: FleetOfFoot,
      id: "FleetOfFoot",
      name: "Fleet of Foot",
    }
  | ImpressiveDisplay => {
      fightingMove: ImpressiveDisplay,
      id: "ImpressiveDisplay",
      name: "Impressive Display",
    }
  | Misdirect => {fightingMove: Misdirect, id: "Misdirect", name: "Misdirect"}
  | NoNeedForWeapons => {
      fightingMove: NoNeedForWeapons,
      id: "NoNeedForWeapons",
      name: "No Need for Weapons",
    }
  | TrainedWithoutArmour => {
      fightingMove: TrainedWithoutArmour,
      id: "TrainedWithoutArmour",
      name: "Trained Without Armour",
    }
  };
};

let fightingMoveInfos = fightingMoves->Belt.List.map(getFightingMoveInfo);
