open Trick;

open SlotItem;

module TrickSelector = {
  [@react.component]
  let make = (~label: string, ~onSelect: option(trick) => unit) => {
    let onChange = (e: ReactEvent.Form.t): unit => {
      let value: string = e->ReactEvent.Form.target##value;
      let trick: option(trick) = stringToTrick(value);
      onSelect(trick);
    };
    <p>
      <label>
        {React.string(label ++ ": ")}
        <select onChange>
          <option> {React.string("Choose a trick")} </option>
          {trickInfos
           ->Belt.List.map(trickInfo => {
               <option key={trickInfo.id} value={trickInfo.id}>
                 {React.string(trickInfo.name)}
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
let make = (~trickCount: int, ~onSelect: list(trick) => unit) => {
  let (selected, setSelected) = React.useState(_ => []);

  let onTrickSelect = (slot: int, trick: option(trick)): unit => {
    let newSelected = updateSlot(selected, slot, trick);
    setSelected(_ => newSelected);
    onSelect(toItems(newSelected));
  };

  <div>
    <h2> {React.string("Tricks of the Trade")} </h2>
    {makeSlots(trickCount)
     ->Belt.List.map(slot => {
         let label = "Trick #" ++ string_of_int(slot);
         let key = "trick-" ++ string_of_int(slot);
         <TrickSelector key label onSelect={onTrickSelect(slot)} />;
       })
     ->Belt.List.toArray
     ->React.array}
  </div>;
};
