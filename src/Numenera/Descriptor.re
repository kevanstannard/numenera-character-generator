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
  | Charming => {descriptorType: Charming, id: "Charming", name: "Charming"}
  | Clever => {descriptorType: Clever, id: "Clever", name: "Clever"}
  | Graceful => {descriptorType: Graceful, id: "Graceful", name: "Graceful"}
  | Intelligent => {
      descriptorType: Intelligent,
      id: "Intelligent",
      name: "Intelligent",
    }
  | Learned => {descriptorType: Learned, id: "Learned", name: "Learned"}
  | MysticalMechanical => {
      descriptorType: MysticalMechanical,
      id: "MysticalMechanical",
      name: "Mystical/Mechanical",
    }
  | Rugged => {descriptorType: Rugged, id: "Rugged", name: "Rugged"}
  | Stealthy => {descriptorType: Stealthy, id: "Stealthy", name: "Stealthy"}
  | Strong => {descriptorType: Strong, id: "Strong", name: "Strong"}
  | StrongWilled => {
      descriptorType: StrongWilled,
      id: "StrongWilled",
      name: "Strong Willed",
    }
  | Swift => {descriptorType: Swift, id: "Swift", name: "Swift"}
  | Tough => {descriptorType: Tough, id: "Tough", name: "Tough"}
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
