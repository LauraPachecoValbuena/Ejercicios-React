import React from "react";
import C3 from "./c3";

class C2 extends React.Component {
  shouldComponentUpdate() {
    return false;
  }
  render() {
    return (
      <div className="Display">
        {this.props.number}
        <C3 />
      </div>
    );
  }
}

export default C2;
