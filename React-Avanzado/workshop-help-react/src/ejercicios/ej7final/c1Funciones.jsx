import React from "react";
import C2 from "./c2";

import produce from "immer";

const C1 = React.memo(() => {
    const [toggles, setToggles] = React.useState([false,false,false]);

    const toggle = index => {
        toggles[index] = !toggles[index];
        setToggles([...toggles]);
    };

    const toggle2 = index => {
        const newToggles = produce(toggles, draft => {
            draft[index] = !draft[index];
        });
        setToggles(newToggles);
    };

    return (
        <div className="wrap">
          <button onClick={() => toggle(0)}>Toggle first</button>
          <button onClick={() => toggle(1)}>Toggle second</button>
          <button onClick={() => toggle(2)}>Toggle third</button>
          <C2 toggles={toggles} />
        </div>
    );
          
});

export default C1;