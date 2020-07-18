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
      id: "blowgun",
      name: "Blowgun",
    }

  | Buzzer => {
      weaponType: Buzzer,
      weaponSize: LightWeapon,
      id: "buzzer",
      name: "Buzzer",
    }

  | Club => {
      weaponType: Club,
      weaponSize: LightWeapon,
      id: "club",
      name: "Club",
    }

  | Dagger => {
      weaponType: Dagger,
      weaponSize: LightWeapon,
      id: "dagger",
      name: "Dagger",
    }

  | DartThrower => {
      weaponType: DartThrower,
      weaponSize: LightWeapon,
      id: "dart_thrower",
      name: "Dart thrower",
    }

  | ForearmBlade => {
      weaponType: ForearmBlade,
      weaponSize: LightWeapon,
      id: "forearm_blade",
      name: "Forearm blade",
    }

  | Knife => {
      weaponType: Knife,
      weaponSize: LightWeapon,
      id: "knife",
      name: "Knife",
    }

  | PunchingDagger => {
      weaponType: PunchingDagger,
      weaponSize: LightWeapon,
      id: "punching_dagger",
      name: "Punching dagger",
    }

  | Rapier => {
      weaponType: Rapier,
      weaponSize: LightWeapon,
      id: "rapier",
      name: "Rapier",
    }

  | RazorRing => {
      weaponType: RazorRing,
      weaponSize: LightWeapon,
      id: "razor_ring",
      name: "Razor ring",
    }

  | Sisk => {
      weaponType: Sisk,
      weaponSize: LightWeapon,
      id: "sisk",
      name: "Sisk",
    }

  | Whip => {
      weaponType: Whip,
      weaponSize: LightWeapon,
      id: "whip",
      name: "Whip",
    }

  | Battleaxe => {
      weaponType: Battleaxe,
      weaponSize: MediumWeapon,
      id: "battleaxe",
      name: "Battleaxe",
    }

  | Bow => {weaponType: Bow, weaponSize: MediumWeapon, id: "bow", name: "Bow"}

  | Broadsword => {
      weaponType: Broadsword,
      weaponSize: MediumWeapon,
      id: "broadsword",
      name: "Broadsword",
    }

  | CrankCrossbow => {
      weaponType: CrankCrossbow,
      weaponSize: MediumWeapon,
      id: "crank_crossbow",
      name: "Crank crossbow",
    }

  | Crossbow => {
      weaponType: Crossbow,
      weaponSize: MediumWeapon,
      id: "crossbow",
      name: "Crossbow",
    }

  | Flail => {
      weaponType: Flail,
      weaponSize: MediumWeapon,
      id: "flail",
      name: "Flail",
    }

  | Hammer => {
      weaponType: Hammer,
      weaponSize: MediumWeapon,
      id: "hammer",
      name: "Hammer",
    }

  | Javelin => {
      weaponType: Javelin,
      weaponSize: MediumWeapon,
      id: "javelin",
      name: "Javelin",
    }

  | Mace => {
      weaponType: Mace,
      weaponSize: MediumWeapon,
      id: "mace",
      name: "Mace",
    }

  | Polearm => {
      weaponType: Polearm,
      weaponSize: MediumWeapon,
      id: "polearm",
      name: "Polearm",
    }

  | Quarterstaff => {
      weaponType: Quarterstaff,
      weaponSize: MediumWeapon,
      id: "quarterstaff",
      name: "Quarterstaff",
    }

  | Spear => {
      weaponType: Spear,
      weaponSize: MediumWeapon,
      id: "spear",
      name: "Spear",
    }

  | Verred => {
      weaponType: Verred,
      weaponSize: MediumWeapon,
      id: "verred",
      name: "Verred",
    }

  | Yulk => {
      weaponType: Yulk,
      weaponSize: MediumWeapon,
      id: "yulk",
      name: "Yulk",
    }

  | Greataxe => {
      weaponType: Greataxe,
      weaponSize: HeavyWeapon,
      id: "greataxe",
      name: "Greataxe",
    }

  | Greatsword => {
      weaponType: Greatsword,
      weaponSize: HeavyWeapon,
      id: "greatsword",
      name: "Greatsword",
    }

  | HeavyCrossbow => {
      weaponType: HeavyCrossbow,
      weaponSize: HeavyWeapon,
      id: "heavy_crossbow",
      name: "Heavy crossbow",
    }

  | Maul => {
      weaponType: Maul,
      weaponSize: HeavyWeapon,
      id: "maul",
      name: "Maul",
    }

  | SwordStaff => {
      weaponType: SwordStaff,
      weaponSize: HeavyWeapon,
      id: "sword_staff",
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
