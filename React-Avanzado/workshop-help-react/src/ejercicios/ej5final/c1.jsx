import * as React from "react";
import C2 from "./c2";
import C3 from "./c3";

class C1 extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = { count: 0 };
  }

  sub = () => {
    this.setState({ count: this.state.count > 0 ? this.state.count - 1 : 0 });
  };

  add = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div className="container">
        <div className="container__buttons">
          <button type="button" onClick={this.sub}>
            -
          </button>
          <button type="button" onClick={this.add}>
            +
          </button>
        </div>
        <div className="container__display">
          <C2 number={this.state.count} />
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
