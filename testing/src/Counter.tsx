import React, { useState } from "react";
import "./App.css";

const Counter: React.FC = () => {
  const [count, setCount] = useState(0);
  const add = () => setCount(c => c + 1);
  const sub = () => setCount(c => (c > 0 ? c - 1 : 0));
  return (
    <div>
      <div>
        <button data-testid="sub_button" onClick={sub}>
          -
        </button>
        <button data-testid="add_button" onClick={add}>
          +
        </button>
      </div>
      <div>
        <span data-testid="count_span">{count}</span>
      </div>
    </div>
  );
};

export default Counter;
