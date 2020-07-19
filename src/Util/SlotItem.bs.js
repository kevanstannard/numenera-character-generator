'use strict';

var Belt_List = require("bs-platform/lib/js/belt_List.js");
var Caml_option = require("bs-platform/lib/js/caml_option.js");

function clearSlot(slotItems, slotToClear) {
  return Belt_List.keep(slotItems, (function (param) {
                return param.slot !== slotToClear;
              }));
}

function setSlot(slotItems, slotToSet, item) {
  return Belt_List.add(clearSlot(slotItems, slotToSet), {
              slot: slotToSet,
              item: item
            });
}

function updateSlot(slotItems, slot, item) {
  if (item !== undefined) {
    return setSlot(slotItems, slot, Caml_option.valFromOption(item));
  } else {
    return clearSlot(slotItems, slot);
  }
}

function toItems(slotItems) {
  return Belt_List.map(slotItems, (function (param) {
                return param.item;
              }));
}

exports.clearSlot = clearSlot;
exports.setSlot = setSlot;
exports.updateSlot = updateSlot;
exports.toItems = toItems;
/* No side effect */
