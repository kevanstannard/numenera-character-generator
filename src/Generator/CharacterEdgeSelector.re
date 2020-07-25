// open Numenera;

type state = {
  available: int,
  might: int,
  speed: int,
  intellect: int,
};

let maxAvailable: int = 1;

let calculateAvailable = (might, speed, intellect) =>
  maxAvailable - might - speed - intellect;

[@react.component]
let make =
    (
      ~edges: Character.characterInfoEdge,
      ~onUpdate: Character.characterInfoEdge => unit,
    ) => {
  let available =
    calculateAvailable(edges.might, edges.speed, edges.intellect);

  let onMightChange = (e: ReactEvent.Form.t): unit => {
    let newMight: int = int_of_string(e->ReactEvent.Form.target##value);
    let newAvailable =
      calculateAvailable(newMight, edges.speed, edges.intellect);
    if (newAvailable >= 0) {
      onUpdate({
        might: newMight,
        speed: edges.speed,
        intellect: edges.intellect,
      });
    };
  };

  let onSpeedChange = (e: ReactEvent.Form.t): unit => {
    let newSpeed: int = int_of_string(e->ReactEvent.Form.target##value);
    let newAvailable =
      calculateAvailable(edges.might, newSpeed, edges.intellect);
    if (newAvailable >= 0) {
      onUpdate({
        might: edges.might,
        speed: newSpeed,
        intellect: edges.intellect,
      });
    };
  };

  let onIntellectChange = (e: ReactEvent.Form.t): unit => {
    let newIntellect: int = int_of_string(e->ReactEvent.Form.target##value);
    let newAvailable =
      calculateAvailable(edges.might, edges.speed, newIntellect);
    if (newAvailable >= 0) {
      onUpdate({
        might: edges.might,
        speed: edges.speed,
        intellect: newIntellect,
      });
    };
  };

  <>
    <h2> {React.string("Edge")} </h2>
    <p> {React.string("Points available: " ++ string_of_int(available))} </p>
    <p>
      <label>
        {React.string("Might: ")}
        <input
          type_="number"
          min="0"
          max={string_of_int(maxAvailable)}
          value={string_of_int(edges.might)}
          onChange=onMightChange
        />
      </label>
    </p>
    <p>
      <label>
        {React.string("Speed: ")}
        <input
          type_="number"
          min="0"
          max={string_of_int(maxAvailable)}
          value={string_of_int(edges.speed)}
          onChange=onSpeedChange
        />
      </label>
    </p>
    <p>
      <label>
        {React.string("Intellect: ")}
        <input
          type_="number"
          min="0"
          max={string_of_int(maxAvailable)}
          value={string_of_int(edges.intellect)}
          onChange=onIntellectChange
        />
      </label>
    </p>
  </>;
};
