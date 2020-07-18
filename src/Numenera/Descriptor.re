type descriptorType =
  | Charming
  | Celver
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
  Celver,
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
  | Charming => {descriptorType: Charming, id: "charming", name: "Charming"}
  | Celver => {descriptorType: Celver, id: "clever", name: "Clever"}
  | Graceful => {descriptorType: Graceful, id: "graceful", name: "Graceful"}
  | Intelligent => {
      descriptorType: Intelligent,
      id: "intelligent",
      name: "Intelligent",
    }
  | Learned => {descriptorType: Learned, id: "learned", name: "Learned"}
  | MysticalMechanical => {
      descriptorType: MysticalMechanical,
      id: "mystical_mechanical",
      name: "Mystical/Mechanical",
    }
  | Rugged => {descriptorType: Rugged, id: "rugged", name: "Rugged"}
  | Stealthy => {descriptorType: Stealthy, id: "stealthy", name: "Stealthy"}
  | Strong => {descriptorType: Strong, id: "strong", name: "Strong"}
  | StrongWilled => {
      descriptorType: StrongWilled,
      id: "strong_willed",
      name: "Strong Willed",
    }
  | Swift => {descriptorType: Swift, id: "swift", name: "Swift"}
  | Tough => {descriptorType: Tough, id: "tough", name: "Tough"}
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
