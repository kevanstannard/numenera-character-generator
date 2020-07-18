type esotery =
  | HedgeMagic
  | Onslaught
  | Push
  | Scan
  | Ward;

type esoteryInfo = {
  esotery,
  id: string,
  name: string,
};

let esoteries = [HedgeMagic, Onslaught, Push, Scan, Ward];

let getEsoteryInfo = (esotery): esoteryInfo => {
  switch (esotery) {
  | HedgeMagic => {esotery: HedgeMagic, id: "HedgeMagic", name: "Hedge Magic"}
  | Onslaught => {esotery: Onslaught, id: "Onslaught", name: "Onslaught"}
  | Push => {esotery: Push, id: "Push", name: "Push"}
  | Scan => {esotery: Scan, id: "Scan", name: "Scan"}
  | Ward => {esotery: Ward, id: "Ward", name: "Ward"}
  };
};

let esoteryInfos = esoteries->Belt.List.map(getEsoteryInfo);
