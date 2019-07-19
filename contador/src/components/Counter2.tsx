import React from "react";

const Counter2: React.FC = () => {
  const [count, setCount] = React.useState(0);
  const [isRunning, setIsRunning] = React.useState(false);
  const [timeoutId, setTimeoutId] = React.useState<number>();

  React.useEffect(() => {
    if (isRunning) {
      window.clearTimeout(timeoutId); // RESET CASE
      const id = window.setTimeout(() => setCount(c => c + 1), 1000);
      setTimeoutId(id);
    }
  }, [count, isRunning]);

  const play = () => setIsRunning(true);

  const stop = () => {
    window.clearTimeout(timeoutId);
    setTimeoutId(undefined);
    setIsRunning(false);
  };

  const reset = () => setCount(0);

  return (
    <div>
      {count}
      <button onClick={play}>Play</button>
      <button onClick={stop}>Stop</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Counter2;
