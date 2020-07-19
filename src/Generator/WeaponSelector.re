open Weapon;
open SlotItem;

let initialState = () => [];

[@react.component]
let make =
    (
      ~weaponCount: int,
      ~weaponSizes: list(weaponSize),
      ~onSelect: list(weaponType) => unit,
    ) => {
  let (selectedWeapons, setSelectedWeapons) =
    React.useState(_ => initialState());

  let onChange = (slot: int, e: ReactEvent.Form.t): unit => {
    let value: string = e->ReactEvent.Form.target##value;
    let weaponType: option(weaponType) = stringToWeaponType(value);
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

  let availableWeapons =
    weaponSizes
    ->Belt.List.map(weaponSize =>
        Belt.List.keep(weaponInfos, weaponInfo =>
          weaponInfo.weaponSize === weaponSize
        )
      )
    ->Belt.List.flatten;

  let weaponSlots = Belt.List.makeBy(weaponCount, i => i + 1);

  <div>
    <h2> {React.string("Weapons")} </h2>
    <p> {React.string("Weapon sizes: " ++ weaponSizeNames)} </p>
    {weaponSlots
     ->Belt.List.map(weaponSlot => {
         let label = "Weapon #" ++ string_of_int(weaponSlot);
         let key = "weapon-" ++ string_of_int(weaponSlot);
         <p key>
           <label>
             {React.string(label ++ ": ")}
             <select onChange={onChange(weaponSlot)}>
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
       })
     ->Belt.List.toArray
     ->React.array}
  </div>;
};
