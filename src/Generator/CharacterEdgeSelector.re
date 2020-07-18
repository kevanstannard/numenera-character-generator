// open Numenera;

type state = {
  available: int,
  might: int,
  speed: int,
  intellect: int,
};

let maxAvailable: int = 1;

let initialState = () => {
  available: maxAvailable,
  might: 0,
  speed: 0,
  intellect: 0,
};

type action =
  | UpdateMight(int)
  | UpdateSpeed(int)
  | UpdateIntellect(int);

[@react.component]
let make = () => {
  let (state, dispatch) =
    React.useReducer(
      (state, action) =>
        switch (action) {
        | UpdateMight(newMight) =>
          let total = newMight + state.speed + state.intellect;
          let newState =
            total <= maxAvailable
              ? {...state, available: maxAvailable - total, might: newMight}
              : state;
          newState;
        | UpdateSpeed(newSpeed) =>
          let total = state.might + newSpeed + state.intellect;
          let newState =
            total <= maxAvailable
              ? {...state, available: maxAvailable - total, speed: newSpeed}
              : state;
          newState;
        | UpdateIntellect(newIntellect) =>
          let total = state.might + state.speed + newIntellect;
          let newState =
            total <= maxAvailable
              ? {
                ...state,
                available: maxAvailable - total,
                intellect: newIntellect,
              }
              : state;
          newState;
        },
      initialState(),
    );

  let onMightChange = (e: ReactEvent.Form.t): unit => {
    let value: string = e->ReactEvent.Form.target##value;
    dispatch(UpdateMight(int_of_string(value)));
  };

  let onSpeedChange = (e: ReactEvent.Form.t): unit => {
    let value: string = e->ReactEvent.Form.target##value;
    dispatch(UpdateSpeed(int_of_string(value)));
  };

  let onIntellectChange = (e: ReactEvent.Form.t): unit => {
    let value: string = e->ReactEvent.Form.target##value;
    dispatch(UpdateIntellect(int_of_string(value)));
  };

  <>
    <h2> {React.string("Edge")} </h2>
    <p>
      {React.string("Points available: " ++ string_of_int(state.available))}
    </p>
    <p>
      <label>
        {React.string("Might: ")}
        <input
          type_="number"
          min="0"
          max={string_of_int(maxAvailable)}
          value={string_of_int(state.might)}
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
          value={string_of_int(state.speed)}
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
          value={string_of_int(state.intellect)}
          onChange=onIntellectChange
        />
      </label>
    </p>
  </>;
};
