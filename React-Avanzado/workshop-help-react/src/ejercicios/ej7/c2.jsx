import React from "react";

class C2 extends React.PureComponent {
  render() {
    return (
      <div className="wrap">
        {this.props.toggles.map((v, i) => (
          <div key={i}>{"" + v}</div>
        ))}
      </div>
    );
  }
}

export default C2;
