import React from "react";
import C2 from "./c2";

class C1 extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      toggles: [false, false, false]
    };
  }

  toggle(index) {
    const aux = this.state.toggles;
    aux[index] = !aux[index];
    this.setState({ toggles: aux });
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
