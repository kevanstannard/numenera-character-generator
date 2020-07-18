'use strict';

var Belt_List = require("bs-platform/lib/js/belt_List.js");

var focusTypes = {
  hd: /* BearsAHaloOfFire */0,
  tl: {
    hd: /* CommandsMentalPowers */1,
    tl: {
      hd: /* ControlsBeasts */2,
      tl: {
        hd: /* ControlsGravity */3,
        tl: {
          hd: /* CraftsIllusions */4,
          tl: {
            hd: /* EmploysMagnetism */5,
            tl: {
              hd: /* Entertains */6,
              tl: {
                hd: /* ExistsPartiallyOutOfPhase */7,
                tl: {
                  hd: /* ExploresDarkPlaces */8,
                  tl: {
                    hd: /* FightsWithPanache */9,
                    tl: {
                      hd: /* FocusesMindOverMatter */10,
                      tl: {
                        hd: /* FusesFleshAndSteel */11,
                        tl: {
                          hd: /* HowlsAtTheMoon */12,
                          tl: {
                            hd: /* Hunts */13,
                            tl: {
                              hd: /* LivesInTheWilderness */14,
                              tl: {
                                hd: /* MastersDefense */15,
                                tl: {
                                  hd: /* MastersWeaponry */16,
                                  tl: {
                                    hd: /* Murders */17,
                                    tl: {
                                      hd: /* Rages */18,
                                      tl: {
                                        hd: /* RidesTheLightening */19,
                                        tl: {
                                          hd: /* SpeaksWithASilverTongue */20,
                                          tl: {
                                            hd: /* TalksToMachines */21,
                                            tl: {
                                              hd: /* WearsASheenOfIce */22,
                                              tl: {
                                                hd: /* WieldsPowerWithPrecision */23,
                                                tl: {
                                                  hd: /* WieldsTwoWeaponsAtOnce */24,
                                                  tl: {
                                                    hd: /* WorksTheBackAlleys */25,
                                                    tl: {
                                                      hd: /* WorksMiracles */26,
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
};

function getFocusInfo(focusType) {
  switch (focusType) {
    case /* BearsAHaloOfFire */0 :
        return {
                focusType: /* BearsAHaloOfFire */0,
                id: "bears_a_halo_of_fire",
                name: "Bears a Halo of Fire"
              };
    case /* CommandsMentalPowers */1 :
        return {
                focusType: /* CommandsMentalPowers */1,
                id: "commands_mental_powers",
                name: "Commands Mental powers"
              };
    case /* ControlsBeasts */2 :
        return {
                focusType: /* ControlsBeasts */2,
                id: "controls_beasts",
                name: "Controls Beasts"
              };
    case /* ControlsGravity */3 :
        return {
                focusType: /* ControlsGravity */3,
                id: "controls_gravity",
                name: "Controls Gravity"
              };
    case /* CraftsIllusions */4 :
        return {
                focusType: /* CraftsIllusions */4,
                id: "crafts_illusions",
                name: "Crafts Illusions"
              };
    case /* EmploysMagnetism */5 :
        return {
                focusType: /* EmploysMagnetism */5,
                id: "employs_magnetism",
                name: "Employs Magnetism"
              };
    case /* Entertains */6 :
        return {
                focusType: /* Entertains */6,
                id: "entertains",
                name: "Entertains"
              };
    case /* ExistsPartiallyOutOfPhase */7 :
        return {
                focusType: /* ExistsPartiallyOutOfPhase */7,
                id: "exists_partially_out_of_phase",
                name: "Exists Partially Out of Phase"
              };
    case /* ExploresDarkPlaces */8 :
        return {
                focusType: /* ExploresDarkPlaces */8,
                id: "exlores_dark_places",
                name: "Explores Dark Places"
              };
    case /* FightsWithPanache */9 :
        return {
                focusType: /* FightsWithPanache */9,
                id: "fights_with_panache",
                name: "Fights with Panache"
              };
    case /* FocusesMindOverMatter */10 :
        return {
                focusType: /* FocusesMindOverMatter */10,
                id: "focuses_mind_over_matter",
                name: "Focuses Mind Over Matter"
              };
    case /* FusesFleshAndSteel */11 :
        return {
                focusType: /* FusesFleshAndSteel */11,
                id: "fuses_flesh_and_steel",
                name: "Fuses Flesh and Steel"
              };
    case /* HowlsAtTheMoon */12 :
        return {
                focusType: /* HowlsAtTheMoon */12,
                id: "howls_at_the_moon",
                name: "Howls at the Moon"
              };
    case /* Hunts */13 :
        return {
                focusType: /* Hunts */13,
                id: "hunts",
                name: "Hunts"
              };
    case /* LivesInTheWilderness */14 :
        return {
                focusType: /* LivesInTheWilderness */14,
                id: "lives_in_the_wilderness",
                name: "Lives in the Wilderness"
              };
    case /* MastersDefense */15 :
        return {
                focusType: /* MastersDefense */15,
                id: "masters_defense",
                name: "Masters Defense"
              };
    case /* MastersWeaponry */16 :
        return {
                focusType: /* MastersWeaponry */16,
                id: "masters_weaponry",
                name: "Masters Weaponry"
              };
    case /* Murders */17 :
        return {
                focusType: /* Murders */17,
                id: "murders",
                name: "Muders"
              };
    case /* Rages */18 :
        return {
                focusType: /* Rages */18,
                id: "rages",
                name: "Rages"
              };
    case /* RidesTheLightening */19 :
        return {
                focusType: /* RidesTheLightening */19,
                id: "rides_the_lightening",
                name: "Rides the Lightening"
              };
    case /* SpeaksWithASilverTongue */20 :
        return {
                focusType: /* SpeaksWithASilverTongue */20,
                id: "speaks_with_a_silver_tongue",
                name: "Speaks with a Silver Tongue"
              };
    case /* TalksToMachines */21 :
        return {
                focusType: /* TalksToMachines */21,
                id: "talks_to_machines",
                name: "Talks to Machines"
              };
    case /* WearsASheenOfIce */22 :
        return {
                focusType: /* WearsASheenOfIce */22,
                id: "wears_a_sheen_of_ice",
                name: "Wears a Sheen of Ice"
              };
    case /* WieldsPowerWithPrecision */23 :
        return {
                focusType: /* WieldsPowerWithPrecision */23,
                id: "wields_power_with_precision",
                name: "Wields Power with Precision"
              };
    case /* WieldsTwoWeaponsAtOnce */24 :
        return {
                focusType: /* WieldsTwoWeaponsAtOnce */24,
                id: "wields_two_weapons_at_once",
                name: "Wields Two Weapons at Once"
              };
    case /* WorksTheBackAlleys */25 :
        return {
                focusType: /* WorksTheBackAlleys */25,
                id: "works_the_back_alleys",
                name: "Works the Back Alleys"
              };
    case /* WorksMiracles */26 :
        return {
                focusType: /* WorksMiracles */26,
                id: "works_miracles",
                name: "Works Miracles"
              };
    
  }
}

var focusInfos = Belt_List.map(focusTypes, getFocusInfo);

function stringToFocusType(id) {
  return Belt_List.reduce(focusInfos, undefined, (function (acc, focusInfo) {
                if (acc !== undefined) {
                  return acc;
                } else if (focusInfo.id === id) {
                  return focusInfo.focusType;
                } else {
                  return acc;
                }
              }));
}

exports.focusTypes = focusTypes;
exports.getFocusInfo = getFocusInfo;
exports.focusInfos = focusInfos;
exports.stringToFocusType = stringToFocusType;
/* focusInfos Not a pure module */
