open Esotery;

open SlotItem;

module EsoterySelector = {
  [@react.component]
  let make = (~label: string, ~onSelect: option(esotery) => unit) => {
    let onChange = (e: ReactEvent.Form.t): unit => {
      let value: string = e->ReactEvent.Form.target##value;
      let esotery: option(esotery) = stringToEsotery(value);
      onSelect(esotery);
    };
    <p>
      <label>
        {React.string(label ++ ": ")}
        <select onChange>
          <option> {React.string("Choose an esotery")} </option>
          {esoteryInfos
           ->Belt.List.map(esoteryInfo => {
               <option key={esoteryInfo.id} value={esoteryInfo.id}>
                 {React.string(esoteryInfo.name)}
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
let make = (~esoteryCount: int, ~onSelect: list(esotery) => unit) => {
  let (selectedWeapons, setSelectedWeapons) = React.useState(_ => []);

  let onEsoterySelect = (slot: int, esotery: option(esotery)): unit => {
    let newSelectedWeapons = updateSlot(selectedWeapons, slot, esotery);
    setSelectedWeapons(_ => newSelectedWeapons);
    onSelect(toItems(newSelectedWeapons));
  };

  <div>
    <h2> {React.string("Esoteries")} </h2>
    {makeSlots(esoteryCount)
     ->Belt.List.map(slot => {
         let label = "Esotery #" ++ string_of_int(slot);
         let key = "esotery-" ++ string_of_int(slot);
         <EsoterySelector key label onSelect={onEsoterySelect(slot)} />;
       })
     ->Belt.List.toArray
     ->React.array}
  </div>;
};
