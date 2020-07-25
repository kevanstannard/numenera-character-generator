type descriptorType =
  | Charming
  | Clever
  | Graceful
  | Intelligent
  | Learned
  | MysticalMechanical
  | Rugged
  | Stealthy
  | Strong
  | StrongWilled
  | Swift
  | Tough;

type descriptorInfo = {
  descriptorType,
  id: string,
  name: string,
};

let descriptorTypeToString = (descriptorType): string => {
  switch (descriptorType) {
  | Charming => "Charming"
  | Clever => "Clever"
  | Graceful => "Graceful"
  | Intelligent => "Intelligent"
  | Learned => "Learned"
  | MysticalMechanical => "Mystical/Mechanical"
  | Rugged => "Rugged"
  | Stealthy => "Stealthy"
  | Strong => "Strong"
  | StrongWilled => "Strong willed"
  | Swift => "Swift"
  | Tough => "Tough"
  };
};

let descriptorTypes: list(descriptorType) = [
  Charming,
  Clever,
  Graceful,
  Intelligent,
  Learned,
  MysticalMechanical,
  Rugged,
  Stealthy,
  Strong,
  StrongWilled,
  Swift,
  Tough,
];

let getDescriptorInfo = descriptorType => {
  switch (descriptorType) {
  | Charming => {
      descriptorType: Charming,
      id: "Charming",
      name: descriptorTypeToString(Charming),
    }
  | Clever => {
      descriptorType: Clever,
      id: "Clever",
      name: descriptorTypeToString(Clever),
    }
  | Graceful => {
      descriptorType: Graceful,
      id: "Graceful",
      name: descriptorTypeToString(Graceful),
    }
  | Intelligent => {
      descriptorType: Intelligent,
      id: "Intelligent",
      name: descriptorTypeToString(Intelligent),
    }
  | Learned => {
      descriptorType: Learned,
      id: "Learned",
      name: descriptorTypeToString(Learned),
    }
  | MysticalMechanical => {
      descriptorType: MysticalMechanical,
      id: "MysticalMechanical",
      name: descriptorTypeToString(MysticalMechanical),
    }
  | Rugged => {
      descriptorType: Rugged,
      id: "Rugged",
      name: descriptorTypeToString(Rugged),
    }
  | Stealthy => {
      descriptorType: Stealthy,
      id: "Stealthy",
      name: descriptorTypeToString(Stealthy),
    }
  | Strong => {
      descriptorType: Strong,
      id: "Strong",
      name: descriptorTypeToString(Strong),
    }
  | StrongWilled => {
      descriptorType: StrongWilled,
      id: "StrongWilled",
      name: descriptorTypeToString(StrongWilled),
    }
  | Swift => {
      descriptorType: Swift,
      id: "Swift",
      name: descriptorTypeToString(Swift),
    }
  | Tough => {
      descriptorType: Tough,
      id: "Tough",
      name: descriptorTypeToString(Tough),
    }
  };
};

let descriptorInfos: list(descriptorInfo) =
  Belt.List.map(descriptorTypes, getDescriptorInfo);

let stringToDescriptorType = (id: string): option(descriptorType) => {
  Belt.List.reduce(descriptorInfos, None, (acc, descriptorInfo) => {
    switch (acc) {
    | Some(descriptorType) => Some(descriptorType)
    | None =>
      descriptorInfo.id === id ? Some(descriptorInfo.descriptorType) : acc
    }
  });
};
