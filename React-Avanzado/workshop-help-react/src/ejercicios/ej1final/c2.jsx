import React from "react";

class C2 extends React.Component {
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
      <div className="Display">
        <div>
          <button type="button" onClick={this.sub}>
            -
          </button>
          <button type="button" onClick={this.add}>
            +
          </button>
        </div>
        {this.state.count}
      </div>
    );
  }
}

export default C2;
