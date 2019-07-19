import React from "react";

const C2 = React.memo(props => {
    return (
        <div className="wrap">
            {props.toggles.map((v, i) => (
          <div key={i}>{"" + v}</div>
          ))}
        </div>
    );
});

export default C2;