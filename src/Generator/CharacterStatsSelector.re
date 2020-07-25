type state = {
  available: int,
  might: int,
  speed: int,
  intellect: int,
};

let maxAvailable = 6;

let calculateAvailable = (might, speed, intellect) =>
  maxAvailable - might - speed - intellect;

[@react.component]
let make =
    (
      ~stats: Character.characterInfoStat,
      ~onUpdate: Character.characterInfoStat => unit,
    ) => {
  let available =
    calculateAvailable(stats.might, stats.speed, stats.intellect);

  let onMightChange = (e: ReactEvent.Form.t): unit => {
    let newMight: int = int_of_string(e->ReactEvent.Form.target##value);
    let newAvailable =
      calculateAvailable(newMight, stats.speed, stats.intellect);
    if (newAvailable >= 0) {
      onUpdate({
        might: newMight,
        speed: stats.speed,
        intellect: stats.intellect,
      });
    };
  };

  let onSpeedChange = (e: ReactEvent.Form.t): unit => {
    let newSpeed: int = int_of_string(e->ReactEvent.Form.target##value);
    let newAvailable =
      calculateAvailable(stats.might, newSpeed, stats.intellect);
    if (newAvailable >= 0) {
      onUpdate({
        might: stats.might,
        speed: newSpeed,
        intellect: stats.intellect,
      });
    };
  };

  let onIntellectChange = (e: ReactEvent.Form.t): unit => {
    let newIntellect: int = int_of_string(e->ReactEvent.Form.target##value);
    let newAvailable =
      calculateAvailable(stats.might, stats.speed, newIntellect);
    if (newAvailable >= 0) {
      onUpdate({
        might: stats.might,
        speed: stats.speed,
        intellect: newIntellect,
      });
    };
  };

  <>
    <h2> {React.string("Extra Stats")} </h2>
    <p> {React.string("Points available: " ++ string_of_int(available))} </p>
    <p>
      <label>
        {React.string("Might: ")}
        <input
          type_="number"
          min="0"
          max="6"
          value={string_of_int(stats.might)}
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
          max="6"
          value={string_of_int(stats.speed)}
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
          max="6"
          value={string_of_int(stats.intellect)}
          onChange=onIntellectChange
        />
      </label>
    </p>
  </>;
};
