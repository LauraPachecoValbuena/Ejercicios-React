import React from "react";
import { fib } from "./functions";

const App: React.FC = () => {
  const [n, setN] = React.useState(0);
  const [n2, setN2] = React.useState(0);

  const value = React.useMemo(() => fib(n), [n]);

  const add = React.useCallback(() => setN(n => n + 1), []);
  const sub = React.useCallback(() => setN(n => (n > 1 ? n - 1 : 0)), []);

  const add2 = React.useCallback(() => setN2(n => n + 1), []);
  const sub2 = React.useCallback(() => setN2(n => (n > 1 ? n - 1 : 0)), []);

  return (
    <div>
      <div>
        <div>{n}</div>
        <div>
          <button onClick={add}>Add</button>
        </div>
        <div>
          <button onClick={sub}>Sub</button>
        </div>
        <div>Resultado: {value}</div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <div>
        <div>{n2}</div>
        <div>
          <button onClick={add2}>Add</button>
        </div>
        <div>
          <button onClick={sub2}>Sub</button>
        </div>
      </div>
    </div>
  );
};

export default App;
