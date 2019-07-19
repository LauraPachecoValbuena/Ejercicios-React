import * as React from "react";
import C3 from "./c3";
import C2 from "./c2";

class C1 extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="container__display">
          <C2 />
        </div>
        <div className="container__virus">
          <C3 />
        </div>
        <div style={{ clear: "both" }} />
      </div>
    );
  }
}

export default C1;
