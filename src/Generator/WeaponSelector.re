open Weapon;
open SlotItem;

module SingleWeaponSelector = {
  [@react.component]
  let make =
      (
        ~label: string,
        ~availableWeapons: list(weaponInfo),
        ~onSelect: option(weaponType) => unit,
      ) => {
    let onChange = (e: ReactEvent.Form.t): unit => {
      let value: string = e->ReactEvent.Form.target##value;
      let weaponType: option(weaponType) = stringToWeaponType(value);
      onSelect(weaponType);
    };
    <p>
      <label>
        {React.string(label ++ ": ")}
        <select onChange>
          <option> {React.string("Choose a weapon")} </option>
          {availableWeapons
           ->Belt.List.map(weaponInfo => {
               <option key={weaponInfo.id} value={weaponInfo.id}>
                 {React.string(weaponInfo.name)}
               </option>
             })
           ->Belt.List.toArray
           ->React.array}
        </select>
      </label>
    </p>;
  };
};

[@react.component]
let make =
    (
      ~weaponCount: int,
      ~weaponSizes: list(weaponSize),
      ~onSelect: list(weaponType) => unit,
    ) => {
  let (selectedWeapons, setSelectedWeapons) = React.useState(_ => []);

  let onWeaponSelect = (slot: int, weaponType: option(weaponType)): unit => {
    let newSelectedWeapons = updateSlot(selectedWeapons, slot, weaponType);
    setSelectedWeapons(_ => newSelectedWeapons);
    onSelect(toItems(newSelectedWeapons));
  };

  let weaponSizeNames =
    Belt.List.length(weaponSizes) === 0
      ? "None"
      : Belt.List.reduce(
          weaponSizes,
          "",
          (acc, weaponSize) => {
            let name = getWeaponSizeInfo(weaponSize).name;
            String.length(acc) === 0 ? name : acc ++ ", " ++ name;
          },
        );

  let availableWeapons = weaponInfosFiltered(weaponSizes);

  <div>
    <h2> {React.string("Weapons")} </h2>
    <p> {React.string("Weapon sizes: " ++ weaponSizeNames)} </p>
    {makeSlots(weaponCount)
     ->Belt.List.map(slot => {
         let label = "Weapon #" ++ string_of_int(slot);
         let key = "weapon-" ++ string_of_int(slot);
         <SingleWeaponSelector
           key
           label
           availableWeapons
           onSelect={onWeaponSelect(slot)}
         />;
       })
     ->Belt.List.toArray
     ->React.array}
  </div>;
};
