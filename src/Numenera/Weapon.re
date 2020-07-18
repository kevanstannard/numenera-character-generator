type weaponSize =
  | LightWeapon
  | MediumWeapon
  | HeavyWeapon;

type weaponType =
  | Blowgun
  | Buzzer
  | Club
  | Dagger
  | DartThrower
  | ForearmBlade
  | Knife
  | PunchingDagger
  | Rapier
  | RazorRing
  | Sisk
  | Whip
  | Battleaxe
  | Bow
  | Broadsword
  | CrankCrossbow
  | Crossbow
  | Flail
  | Hammer
  | Javelin
  | Mace
  | Polearm
  | Quarterstaff
  | Spear
  | Verred
  | Yulk
  | Greataxe
  | Greatsword
  | HeavyCrossbow
  | Maul
  | SwordStaff;

type weaponSizeInfo = {
  weaponSize,
  id: string,
  name: string,
};

let weaponSizes = [LightWeapon, MediumWeapon, HeavyWeapon];

let getWeaponSizeInfo = (weaponSize: weaponSize) => {
  switch (weaponSize) {
  | LightWeapon => {
      weaponSize: LightWeapon,
      id: "light_weapon",
      name: "Light",
    }
  | MediumWeapon => {
      weaponSize: MediumWeapon,
      id: "medium_weapon",
      name: "Medium",
    }
  | HeavyWeapon => {
      weaponSize: HeavyWeapon,
      id: "heavy_weapon",
      name: "Heavy",
    }
  };
};

let weaponTypes = [
  Blowgun,
  Buzzer,
  Club,
  Dagger,
  DartThrower,
  ForearmBlade,
  Knife,
  PunchingDagger,
  Rapier,
  RazorRing,
  Sisk,
  Whip,
  Battleaxe,
  Bow,
  Broadsword,
  CrankCrossbow,
  Crossbow,
  Flail,
  Hammer,
  Javelin,
  Mace,
  Polearm,
  Quarterstaff,
  Spear,
  Verred,
  Yulk,
  Greataxe,
  Greatsword,
  HeavyCrossbow,
  Maul,
  SwordStaff,
];

type weaponInfo = {
  weaponType,
  weaponSize,
  id: string,
  name: string,
};

let getWeaponInfo = (weaponType: weaponType) => {
  switch (weaponType) {
  | Blowgun => {
      weaponType: Blowgun,
      weaponSize: LightWeapon,
      id: "Blowgun",
      name: "Blowgun",
    }

  | Buzzer => {
      weaponType: Buzzer,
      weaponSize: LightWeapon,
      id: "Buzzer",
      name: "Buzzer",
    }

  | Club => {
      weaponType: Club,
      weaponSize: LightWeapon,
      id: "Club",
      name: "Club",
    }

  | Dagger => {
      weaponType: Dagger,
      weaponSize: LightWeapon,
      id: "Dagger",
      name: "Dagger",
    }

  | DartThrower => {
      weaponType: DartThrower,
      weaponSize: LightWeapon,
      id: "DartThrower",
      name: "Dart thrower",
    }

  | ForearmBlade => {
      weaponType: ForearmBlade,
      weaponSize: LightWeapon,
      id: "ForearmBlade",
      name: "Forearm blade",
    }

  | Knife => {
      weaponType: Knife,
      weaponSize: LightWeapon,
      id: "Knife",
      name: "Knife",
    }

  | PunchingDagger => {
      weaponType: PunchingDagger,
      weaponSize: LightWeapon,
      id: "PunchingDagger",
      name: "Punching dagger",
    }

  | Rapier => {
      weaponType: Rapier,
      weaponSize: LightWeapon,
      id: "Rapier",
      name: "Rapier",
    }

  | RazorRing => {
      weaponType: RazorRing,
      weaponSize: LightWeapon,
      id: "RazorRing",
      name: "Razor ring",
    }

  | Sisk => {
      weaponType: Sisk,
      weaponSize: LightWeapon,
      id: "Sisk",
      name: "Sisk",
    }

  | Whip => {
      weaponType: Whip,
      weaponSize: LightWeapon,
      id: "Whip",
      name: "Whip",
    }

  | Battleaxe => {
      weaponType: Battleaxe,
      weaponSize: MediumWeapon,
      id: "Battleaxe",
      name: "Battleaxe",
    }

  | Bow => {weaponType: Bow, weaponSize: MediumWeapon, id: "bow", name: "Bow"}

  | Broadsword => {
      weaponType: Broadsword,
      weaponSize: MediumWeapon,
      id: "Broadsword",
      name: "Broadsword",
    }

  | CrankCrossbow => {
      weaponType: CrankCrossbow,
      weaponSize: MediumWeapon,
      id: "CrankCrossbow",
      name: "Crank crossbow",
    }

  | Crossbow => {
      weaponType: Crossbow,
      weaponSize: MediumWeapon,
      id: "Crossbow",
      name: "Crossbow",
    }

  | Flail => {
      weaponType: Flail,
      weaponSize: MediumWeapon,
      id: "Flail",
      name: "Flail",
    }

  | Hammer => {
      weaponType: Hammer,
      weaponSize: MediumWeapon,
      id: "Hammer",
      name: "Hammer",
    }

  | Javelin => {
      weaponType: Javelin,
      weaponSize: MediumWeapon,
      id: "Javelin",
      name: "Javelin",
    }

  | Mace => {
      weaponType: Mace,
      weaponSize: MediumWeapon,
      id: "Mace",
      name: "Mace",
    }

  | Polearm => {
      weaponType: Polearm,
      weaponSize: MediumWeapon,
      id: "Polearm",
      name: "Polearm",
    }

  | Quarterstaff => {
      weaponType: Quarterstaff,
      weaponSize: MediumWeapon,
      id: "Quarterstaff",
      name: "Quarterstaff",
    }

  | Spear => {
      weaponType: Spear,
      weaponSize: MediumWeapon,
      id: "Spear",
      name: "Spear",
    }

  | Verred => {
      weaponType: Verred,
      weaponSize: MediumWeapon,
      id: "Verred",
      name: "Verred",
    }

  | Yulk => {
      weaponType: Yulk,
      weaponSize: MediumWeapon,
      id: "Yulk",
      name: "Yulk",
    }

  | Greataxe => {
      weaponType: Greataxe,
      weaponSize: HeavyWeapon,
      id: "Greataxe",
      name: "Greataxe",
    }

  | Greatsword => {
      weaponType: Greatsword,
      weaponSize: HeavyWeapon,
      id: "Greatsword",
      name: "Greatsword",
    }

  | HeavyCrossbow => {
      weaponType: HeavyCrossbow,
      weaponSize: HeavyWeapon,
      id: "HeavyCrossbow",
      name: "Heavy crossbow",
    }

  | Maul => {
      weaponType: Maul,
      weaponSize: HeavyWeapon,
      id: "Maul",
      name: "Maul",
    }

  | SwordStaff => {
      weaponType: SwordStaff,
      weaponSize: HeavyWeapon,
      id: "SwordStaff",
      name: "Sword-staff",
    }
  };
};

let weaponInfos: list(weaponInfo) =
  Belt.List.map(weaponTypes, getWeaponInfo);

let stringToWeaponType = (id: string): option(weaponType) => {
  Belt.List.reduce(weaponInfos, None, (acc, weaponInfo) => {
    switch (acc) {
    | Some(weaponType) => Some(weaponType)
    | None => weaponInfo.id === id ? Some(weaponInfo.weaponType) : acc
    }
  });
};
