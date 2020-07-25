'use strict';

var Belt_List = require("bs-platform/lib/js/belt_List.js");

function focusTypeToString(focusType) {
  switch (focusType) {
    case /* BearsAHaloOfFire */0 :
        return "Bears a Halo of Fire";
    case /* CommandsMentalPowers */1 :
        return "Commands Mental Powers";
    case /* ControlsBeasts */2 :
        return "Controls Beasts";
    case /* ControlsGravity */3 :
        return "Controls Gravity";
    case /* CraftsIllusions */4 :
        return "Crafts Illusions";
    case /* EmploysMagnetism */5 :
        return "Employs Magnetism";
    case /* Entertains */6 :
        return "Entertains";
    case /* ExistsPartiallyOutOfPhase */7 :
        return "Exists Partially Out Of Phase";
    case /* ExploresDarkPlaces */8 :
        return "Explores Dark Places";
    case /* FightsWithPanache */9 :
        return "Fights With Panache";
    case /* FocusesMindOverMatter */10 :
        return "Focuses Mind Over Matter";
    case /* FusesFleshAndSteel */11 :
        return "Fuses Flesh and Steel";
    case /* HowlsAtTheMoon */12 :
        return "Howls at the Moon";
    case /* Hunts */13 :
        return "Hunts";
    case /* LivesInTheWilderness */14 :
        return "Lives in the Wilderness";
    case /* MastersDefense */15 :
        return "Masters Defense";
    case /* MastersWeaponry */16 :
        return "Masters Weaponry";
    case /* Murders */17 :
        return "Murders";
    case /* Rages */18 :
        return "Rages";
    case /* RidesTheLightening */19 :
        return "Rides The Lightening";
    case /* SpeaksWithASilverTongue */20 :
        return "Speaks with a Silver Tongue";
    case /* TalksToMachines */21 :
        return "Talks to Machines";
    case /* WearsASheenOfIce */22 :
        return "Wears a Sheen of Ice";
    case /* WieldsPowerWithPrecision */23 :
        return "Wields Power With Precision";
    case /* WieldsTwoWeaponsAtOnce */24 :
        return "Wields Two Weapons at Once";
    case /* WorksTheBackAlleys */25 :
        return "Works the Back Alleys";
    case /* WorksMiracles */26 :
        return "Works Miracles";
    
  }
}

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
                id: "BearsAHaloOfFire",
                name: "Bears a Halo of Fire"
              };
    case /* CommandsMentalPowers */1 :
        return {
                focusType: /* CommandsMentalPowers */1,
                id: "CommandsMentalPowers",
                name: "Commands Mental powers"
              };
    case /* ControlsBeasts */2 :
        return {
                focusType: /* ControlsBeasts */2,
                id: "ControlsBeasts",
                name: "Controls Beasts"
              };
    case /* ControlsGravity */3 :
        return {
                focusType: /* ControlsGravity */3,
                id: "ControlsGravity",
                name: "Controls Gravity"
              };
    case /* CraftsIllusions */4 :
        return {
                focusType: /* CraftsIllusions */4,
                id: "CraftsIllusions",
                name: "Crafts Illusions"
              };
    case /* EmploysMagnetism */5 :
        return {
                focusType: /* EmploysMagnetism */5,
                id: "EmploysMagnetism",
                name: "Employs Magnetism"
              };
    case /* Entertains */6 :
        return {
                focusType: /* Entertains */6,
                id: "Entertains",
                name: "Entertains"
              };
    case /* ExistsPartiallyOutOfPhase */7 :
        return {
                focusType: /* ExistsPartiallyOutOfPhase */7,
                id: "ExistsPartiallyOutOfPhase",
                name: "Exists Partially Out of Phase"
              };
    case /* ExploresDarkPlaces */8 :
        return {
                focusType: /* ExploresDarkPlaces */8,
                id: "ExploresDarkPlaces",
                name: "Explores Dark Places"
              };
    case /* FightsWithPanache */9 :
        return {
                focusType: /* FightsWithPanache */9,
                id: "FightsWithPanache",
                name: "Fights with Panache"
              };
    case /* FocusesMindOverMatter */10 :
        return {
                focusType: /* FocusesMindOverMatter */10,
                id: "FocusesMindOverMatter",
                name: "Focuses Mind Over Matter"
              };
    case /* FusesFleshAndSteel */11 :
        return {
                focusType: /* FusesFleshAndSteel */11,
                id: "FusesFleshAndSteel",
                name: "Fuses Flesh and Steel"
              };
    case /* HowlsAtTheMoon */12 :
        return {
                focusType: /* HowlsAtTheMoon */12,
                id: "HowlsAtTheMoon",
                name: "Howls at the Moon"
              };
    case /* Hunts */13 :
        return {
                focusType: /* Hunts */13,
                id: "Hunts",
                name: "Hunts"
              };
    case /* LivesInTheWilderness */14 :
        return {
                focusType: /* LivesInTheWilderness */14,
                id: "LivesInTheWilderness",
                name: "Lives in the Wilderness"
              };
    case /* MastersDefense */15 :
        return {
                focusType: /* MastersDefense */15,
                id: "MastersDefense",
                name: "Masters Defense"
              };
    case /* MastersWeaponry */16 :
        return {
                focusType: /* MastersWeaponry */16,
                id: "MastersWeaponry",
                name: "Masters Weaponry"
              };
    case /* Murders */17 :
        return {
                focusType: /* Murders */17,
                id: "Murders",
                name: "Muders"
              };
    case /* Rages */18 :
        return {
                focusType: /* Rages */18,
                id: "Rages",
                name: "Rages"
              };
    case /* RidesTheLightening */19 :
        return {
                focusType: /* RidesTheLightening */19,
                id: "RidesTheLightening",
                name: "Rides the Lightening"
              };
    case /* SpeaksWithASilverTongue */20 :
        return {
                focusType: /* SpeaksWithASilverTongue */20,
                id: "SpeaksWithASilverTongue",
                name: "Speaks with a Silver Tongue"
              };
    case /* TalksToMachines */21 :
        return {
                focusType: /* TalksToMachines */21,
                id: "TalksToMachines",
                name: "Talks to Machines"
              };
    case /* WearsASheenOfIce */22 :
        return {
                focusType: /* WearsASheenOfIce */22,
                id: "WearsASheenOfIce",
                name: "Wears a Sheen of Ice"
              };
    case /* WieldsPowerWithPrecision */23 :
        return {
                focusType: /* WieldsPowerWithPrecision */23,
                id: "WieldsPowerWithPrecision",
                name: "Wields Power with Precision"
              };
    case /* WieldsTwoWeaponsAtOnce */24 :
        return {
                focusType: /* WieldsTwoWeaponsAtOnce */24,
                id: "WieldsTwoWeaponsAtOnce",
                name: "Wields Two Weapons at Once"
              };
    case /* WorksTheBackAlleys */25 :
        return {
                focusType: /* WorksTheBackAlleys */25,
                id: "WorksTheBackAlleys",
                name: "Works the Back Alleys"
              };
    case /* WorksMiracles */26 :
        return {
                focusType: /* WorksMiracles */26,
                id: "WorksMiracles",
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

exports.focusTypeToString = focusTypeToString;
exports.focusTypes = focusTypes;
exports.getFocusInfo = getFocusInfo;
exports.focusInfos = focusInfos;
exports.stringToFocusType = stringToFocusType;
/* focusInfos Not a pure module */
