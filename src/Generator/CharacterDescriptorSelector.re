open Descriptor;

[@react.component]
let make = (~onSelect: option(descriptorType) => unit) => {
  let onChange = (e: ReactEvent.Form.t): unit => {
    let value: string = e->ReactEvent.Form.target##value;
    let descriptorType: option(descriptorType) =
      stringToDescriptorType(value);
    onSelect(descriptorType);
  };
  <div>
    <h2> {React.string("Character Descriptor")} </h2>
    <select onChange>
      <option> {React.string("Choose your Descriptor")} </option>
      {descriptorInfos
       ->Belt.List.map(descriptorInfo => {
           <option key={descriptorInfo.id} value={descriptorInfo.id}>
             {React.string(descriptorInfo.name)}
           </option>
         })
       ->Belt.List.toArray
       ->React.array}
    </select>
  </div>;
};
