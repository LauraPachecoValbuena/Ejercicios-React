import React from "react";

const reducer = (state: number, action: string): number => {
  switch (action) {
    case "add":
      return state + 1;
    case "sub":
      return state - 1;
    case "reset":
      return 0;
  }
  return state;
};

const App: React.FC = () => {
  const [count, dispatchAction] = React.useReducer(reducer, 0);
  return (
    <div>
      <div>{count}</div>
      <div>
        <button onClick={() => dispatchAction("add")}>Add</button>
        <button onClick={() => dispatchAction("sub")}>Sub</button>
        <button onClick={() => dispatchAction("reset")}>Reset</button>
      </div>
    </div>
  );
};

export default App;
