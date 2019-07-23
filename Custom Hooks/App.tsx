import React from "react";
import useClickCounter from "./useClickCounter";

const App: React.FC = () => {
  const clicks = useClickCounter(0);
  const clicks2 = useClickCounter(20);
  return <div>{clicks} {clicks2}</div>;
};

export default App;
