import React from "react";

const useClickCounter = (initialNumber: number) => {
  const [clicks, setClicks] = React.useState(initialNumber);

  const click = () => setClicks(c => c + 1);

  React.useEffect(() => {
    document.addEventListener("click", click);
    return () => document.removeEventListener("click", click);
  }, []);

  return clicks;
};

export default useClickCounter;
