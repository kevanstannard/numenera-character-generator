'use strict';

var Belt_List = require("bs-platform/lib/js/belt_List.js");

function getWeaponSizeInfo(weaponSize) {
  switch (weaponSize) {
    case /* LightWeapon */0 :
        return {
                weaponSize: /* LightWeapon */0,
                id: "LightWeapon",
                name: "Light"
              };
    case /* MediumWeapon */1 :
        return {
                weaponSize: /* MediumWeapon */1,
                id: "MediumWeapon",
                name: "Medium"
              };
    case /* HeavyWeapon */2 :
        return {
                weaponSize: /* HeavyWeapon */2,
                id: "HeavyWeapon",
                name: "Heavy"
              };
    
  }
}

var weaponTypes = {
  hd: /* Blowgun */0,
  tl: {
    hd: /* Buzzer */1,
    tl: {
      hd: /* Club */2,
      tl: {
        hd: /* Dagger */3,
        tl: {
          hd: /* DartThrower */4,
          tl: {
            hd: /* ForearmBlade */5,
            tl: {
              hd: /* Knife */6,
              tl: {
                hd: /* PunchingDagger */7,
                tl: {
                  hd: /* Rapier */8,
                  tl: {
                    hd: /* RazorRing */9,
                    tl: {
                      hd: /* Sisk */10,
                      tl: {
                        hd: /* Whip */11,
                        tl: {
                          hd: /* Battleaxe */12,
                          tl: {
                            hd: /* Bow */13,
                            tl: {
                              hd: /* Broadsword */14,
                              tl: {
                                hd: /* CrankCrossbow */15,
                                tl: {
                                  hd: /* Crossbow */16,
                                  tl: {
                                    hd: /* Flail */17,
                                    tl: {
                                      hd: /* Hammer */18,
                                      tl: {
                                        hd: /* Javelin */19,
                                        tl: {
                                          hd: /* Mace */20,
                                          tl: {
                                            hd: /* Polearm */21,
                                            tl: {
                                              hd: /* Quarterstaff */22,
                                              tl: {
                                                hd: /* Spear */23,
                                                tl: {
                                                  hd: /* Verred */24,
                                                  tl: {
                                                    hd: /* Yulk */25,
                                                    tl: {
                                                      hd: /* Greataxe */26,
                                                      tl: {
                                                        hd: /* Greatsword */27,
                                                        tl: {
                                                          hd: /* HeavyCrossbow */28,
                                                          tl: {
                                                            hd: /* Maul */29,
                                                            tl: {
                                                              hd: /* SwordStaff */30,
                                                              tl: /* [] */0
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
};

function getWeaponInfo(weaponType) {
  switch (weaponType) {
    case /* Blowgun */0 :
        return {
                weaponType: /* Blowgun */0,
                weaponSize: /* LightWeapon */0,
                id: "Blowgun",
                name: "Blowgun"
              };
    case /* Buzzer */1 :
        return {
                weaponType: /* Buzzer */1,
                weaponSize: /* LightWeapon */0,
                id: "Buzzer",
                name: "Buzzer"
              };
    case /* Club */2 :
        return {
                weaponType: /* Club */2,
                weaponSize: /* LightWeapon */0,
                id: "Club",
                name: "Club"
              };
    case /* Dagger */3 :
        return {
                weaponType: /* Dagger */3,
                weaponSize: /* LightWeapon */0,
                id: "Dagger",
                name: "Dagger"
              };
    case /* DartThrower */4 :
        return {
                weaponType: /* DartThrower */4,
                weaponSize: /* LightWeapon */0,
                id: "DartThrower",
                name: "Dart thrower"
              };
    case /* ForearmBlade */5 :
        return {
                weaponType: /* ForearmBlade */5,
                weaponSize: /* LightWeapon */0,
                id: "ForearmBlade",
                name: "Forearm blade"
              };
    case /* Knife */6 :
        return {
                weaponType: /* Knife */6,
                weaponSize: /* LightWeapon */0,
                id: "Knife",
                name: "Knife"
              };
    case /* PunchingDagger */7 :
        return {
                weaponType: /* PunchingDagger */7,
                weaponSize: /* LightWeapon */0,
                id: "PunchingDagger",
                name: "Punching dagger"
              };
    case /* Rapier */8 :
        return {
                weaponType: /* Rapier */8,
                weaponSize: /* LightWeapon */0,
                id: "Rapier",
                name: "Rapier"
              };
    case /* RazorRing */9 :
        return {
                weaponType: /* RazorRing */9,
                weaponSize: /* LightWeapon */0,
                id: "RazorRing",
                name: "Razor ring"
              };
    case /* Sisk */10 :
        return {
                weaponType: /* Sisk */10,
                weaponSize: /* LightWeapon */0,
                id: "Sisk",
                name: "Sisk"
              };
    case /* Whip */11 :
        return {
                weaponType: /* Whip */11,
                weaponSize: /* LightWeapon */0,
                id: "Whip",
                name: "Whip"
              };
    case /* Battleaxe */12 :
        return {
                weaponType: /* Battleaxe */12,
                weaponSize: /* MediumWeapon */1,
                id: "Battleaxe",
                name: "Battleaxe"
              };
    case /* Bow */13 :
        return {
                weaponType: /* Bow */13,
                weaponSize: /* MediumWeapon */1,
                id: "bow",
                name: "Bow"
              };
    case /* Broadsword */14 :
        return {
                weaponType: /* Broadsword */14,
                weaponSize: /* MediumWeapon */1,
                id: "Broadsword",
                name: "Broadsword"
              };
    case /* CrankCrossbow */15 :
        return {
                weaponType: /* CrankCrossbow */15,
                weaponSize: /* MediumWeapon */1,
                id: "CrankCrossbow",
                name: "Crank crossbow"
              };
    case /* Crossbow */16 :
        return {
                weaponType: /* Crossbow */16,
                weaponSize: /* MediumWeapon */1,
                id: "Crossbow",
                name: "Crossbow"
              };
    case /* Flail */17 :
        return {
                weaponType: /* Flail */17,
                weaponSize: /* MediumWeapon */1,
                id: "Flail",
                name: "Flail"
              };
    case /* Hammer */18 :
        return {
                weaponType: /* Hammer */18,
                weaponSize: /* MediumWeapon */1,
                id: "Hammer",
                name: "Hammer"
              };
    case /* Javelin */19 :
        return {
                weaponType: /* Javelin */19,
                weaponSize: /* MediumWeapon */1,
                id: "Javelin",
                name: "Javelin"
              };
    case /* Mace */20 :
        return {
                weaponType: /* Mace */20,
                weaponSize: /* MediumWeapon */1,
                id: "Mace",
                name: "Mace"
              };
    case /* Polearm */21 :
        return {
                weaponType: /* Polearm */21,
                weaponSize: /* MediumWeapon */1,
                id: "Polearm",
                name: "Polearm"
              };
    case /* Quarterstaff */22 :
        return {
                weaponType: /* Quarterstaff */22,
                weaponSize: /* MediumWeapon */1,
                id: "Quarterstaff",
                name: "Quarterstaff"
              };
    case /* Spear */23 :
        return {
                weaponType: /* Spear */23,
                weaponSize: /* MediumWeapon */1,
                id: "Spear",
                name: "Spear"
              };
    case /* Verred */24 :
        return {
                weaponType: /* Verred */24,
                weaponSize: /* MediumWeapon */1,
                id: "Verred",
                name: "Verred"
              };
    case /* Yulk */25 :
        return {
                weaponType: /* Yulk */25,
                weaponSize: /* MediumWeapon */1,
                id: "Yulk",
                name: "Yulk"
              };
    case /* Greataxe */26 :
        return {
                weaponType: /* Greataxe */26,
                weaponSize: /* HeavyWeapon */2,
                id: "Greataxe",
                name: "Greataxe"
              };
    case /* Greatsword */27 :
        return {
                weaponType: /* Greatsword */27,
                weaponSize: /* HeavyWeapon */2,
                id: "Greatsword",
                name: "Greatsword"
              };
    case /* HeavyCrossbow */28 :
        return {
                weaponType: /* HeavyCrossbow */28,
                weaponSize: /* HeavyWeapon */2,
                id: "HeavyCrossbow",
                name: "Heavy crossbow"
              };
    case /* Maul */29 :
        return {
                weaponType: /* Maul */29,
                weaponSize: /* HeavyWeapon */2,
                id: "Maul",
                name: "Maul"
              };
    case /* SwordStaff */30 :
        return {
                weaponType: /* SwordStaff */30,
                weaponSize: /* HeavyWeapon */2,
                id: "SwordStaff",
                name: "Sword-staff"
              };
    
  }
}

var weaponInfos = Belt_List.map(weaponTypes, getWeaponInfo);

function stringToWeaponType(id) {
  return Belt_List.reduce(weaponInfos, undefined, (function (acc, weaponInfo) {
                if (acc !== undefined) {
                  return acc;
                } else if (weaponInfo.id === id) {
                  return weaponInfo.weaponType;
                } else {
                  return acc;
                }
              }));
}

var weaponSizes = {
  hd: /* LightWeapon */0,
  tl: {
    hd: /* MediumWeapon */1,
    tl: {
      hd: /* HeavyWeapon */2,
      tl: /* [] */0
    }
  }
};

exports.weaponSizes = weaponSizes;
exports.getWeaponSizeInfo = getWeaponSizeInfo;
exports.weaponTypes = weaponTypes;
exports.getWeaponInfo = getWeaponInfo;
exports.weaponInfos = weaponInfos;
exports.stringToWeaponType = stringToWeaponType;
/* weaponInfos Not a pure module */
