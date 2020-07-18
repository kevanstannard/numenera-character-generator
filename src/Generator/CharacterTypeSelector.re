open Character;

[@react.component]
let make = (~onSelect: option(characterType) => unit) => {
  let onChange = (e: ReactEvent.Form.t): unit => {
    let value: string = e->ReactEvent.Form.target##value;
    let characterType: option(characterType) = stringToCharacterType(value);
    onSelect(characterType);
  };

  <div>
    <h2> {React.string("Character Type")} </h2>
    <select onChange>
      <option> {React.string("Choose your character type")} </option>
      {characterInfos
       ->Belt.List.map(characterInfo => {
           <option key={characterInfo.id} value={characterInfo.id}>
             {React.string(characterInfo.name)}
           </option>
         })
       ->Belt.List.toArray
       ->React.array}
    </select>
  </div>;
};
