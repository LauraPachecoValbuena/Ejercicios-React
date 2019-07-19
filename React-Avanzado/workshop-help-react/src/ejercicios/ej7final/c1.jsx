import React from "react";
import C2 from "./c2";

import produce from "immer";

class C1 extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      toggles: [false, false, false]
    };
  }

  toggle(index) {
    const newState = produce(this.state, draftState => {
      draftState.toggles[index] = !draftState.toggles[index];
    });
    this.setState(newState);
  }

  render() {
    return (
      <div className="wrap">
        <button onClick={() => this.toggle(0)}>Toggle first</button>
        <button onClick={() => this.toggle(1)}>Toggle second</button>
        <button onClick={() => this.toggle(2)}>Toggle third</button>
        <C2 toggles={this.state.toggles} />
      </div>
    );
  }
}

export default C1;
