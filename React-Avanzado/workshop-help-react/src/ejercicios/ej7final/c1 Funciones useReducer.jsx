import React from "react";
import C2 from "./c2";
import produce from "immer";
const reducer = (state, action) => {
  switch (action.type) {
    case "toggle":
      state[action.index] = !state[action.index];
      return [...state];
    default:
  }
  return state;
};
const reducerWithImmer = (state, action) =>
  produce(state, draft => {
    switch (action.type) {
      case "toggle":
        draft[action.index] = !draft[action.index];
        break;
      default:
    }
  });
const C1 = React.memo(() => {
  const [toggles, dispatchAction] = React.useReducer(reducer, [
    false,
    false,
    false
  ]);
  return (
    <div className="wrap">
      <button onClick={() => dispatchAction({ type: "toggle", index: 0 })}>
        Toggle first
      </button>
      <button onClick={() => dispatchAction({ type: "toggle", index: 1 })}>
        Toggle second
      </button>
      <button onClick={() => dispatchAction({ type: "toggle", index: 2 })}>
        Toggle third
      </button>
      <C2 toggles={toggles} />
    </div>
  );
});
export default C1;