type characterType =
  | Glave
  | Nano
  | Jack;

type characterInfoEdge = {
  might: int,
  speed: int,
  intellect: int,
};

type characterInfoStat = {
  might: int,
  speed: int,
  intellect: int,
};

type characterInfo = {
  characterType,
  id: string,
  name: string,
  baseEffort: int,
  baseStat: characterInfoStat,
  baseEdge: characterInfoEdge,
  weaponSizes: list(Weapon.weaponSize),
  weaponCount: int,
  esoteriesCount: int,
  tricksCount: int,
};

let characterTypes: list(characterType) = [Glave, Nano, Jack];

let characterTypeToString = (characterType: characterType): string => {
  switch (characterType) {
  | Glave => "Glave"
  | Nano => "Nano"
  | Jack => "Jack"
  };
};

let getCharacterInfo = (characterType: characterType): characterInfo => {
  switch (characterType) {
  | Glave => {
      characterType: Glave,
      id: "Glave",
      name: characterTypeToString(Glave),
      baseEffort: 1,
      baseStat: {
        might: 11,
        speed: 10,
        intellect: 7,
      },
      baseEdge: {
        might: 1,
        speed: 1,
        intellect: 0,
      },
      weaponSizes: [LightWeapon, MediumWeapon, HeavyWeapon],
      weaponCount: 2,
      esoteriesCount: 0,
      tricksCount: 0,
    }
  | Nano => {
      characterType: Nano,
      id: "Nano",
      name: characterTypeToString(Nano),
      baseEffort: 1,
      baseStat: {
        might: 7,
        speed: 9,
        intellect: 12,
      },
      baseEdge: {
        might: 0,
        speed: 0,
        intellect: 1,
      },
      weaponSizes: [LightWeapon],
      weaponCount: 1,
      esoteriesCount: 2,
      tricksCount: 0,
    }
  | Jack => {
      characterType: Jack,
      id: "Jack",
      name: characterTypeToString(Jack),
      baseEffort: 1,
      baseStat: {
        might: 10,
        speed: 10,
        intellect: 10,
      },
      baseEdge: {
        might: 0,
        speed: 0,
        intellect: 0,
      },
      weaponSizes: [LightWeapon, MediumWeapon],
      weaponCount: 2,
      esoteriesCount: 0,
      tricksCount: 2,
    }
  };
};

let characterInfos: list(characterInfo) =
  Belt.List.map(characterTypes, getCharacterInfo);

let stringToCharacterType = (id: string): option(characterType) => {
  Belt.List.reduce(characterInfos, None, (acc, characterInfo) => {
    switch (acc) {
    | Some(characterType) => Some(characterType)
    | None =>
      characterInfo.id === id ? Some(characterInfo.characterType) : acc
    }
  });
};
