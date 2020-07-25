open Focus;

[@react.component]
let make = (~onSelect: option(focusType) => unit) => {
  let onChange = (e: ReactEvent.Form.t): unit => {
    let value: string = e->ReactEvent.Form.target##value;
    let focusType: option(focusType) = stringToFocusType(value);
    onSelect(focusType);
  };
  <div>
    <h2> {React.string("Character Focus")} </h2>
    <select onChange>
      <option> {React.string("Choose your Focus")} </option>
      {focusInfos
       ->Belt.List.map(focusInfo => {
           <option key={focusInfo.id} value={focusInfo.id}>
             {React.string(focusInfo.name)}
           </option>
         })
       ->Belt.List.toArray
       ->React.array}
    </select>
  </div>;
};
