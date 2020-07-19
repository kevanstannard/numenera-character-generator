type t('a) = {
  slot: int,
  item: 'a,
};

type slotItems('a) = list(t('a));

let clearSlot = (slotItems: slotItems('a), slotToClear: int) =>
  slotItems->Belt.List.keep(({slot}) => slot !== slotToClear);

let setSlot = (slotItems: slotItems('a), slotToSet: int, item: 'a) =>
  slotItems->clearSlot(slotToSet)->Belt.List.add({slot: slotToSet, item});

let updateSlot = (slotItems: slotItems('a), slot: int, item: option('a)) => {
  switch (item) {
  | None => clearSlot(slotItems, slot)
  | Some(weaponType) => setSlot(slotItems, slot, weaponType)
  };
};

let toItems = (slotItems: slotItems('a)): list('a) =>
  slotItems->Belt.List.map(({item}) => item);

let makeSlots = (count: int) => Belt.List.makeBy(count, i => i + 1);
