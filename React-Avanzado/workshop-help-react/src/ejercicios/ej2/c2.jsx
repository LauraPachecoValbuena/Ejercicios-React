import React from "react";

class C2 extends React.Component {


  shouldComponentUpdate() {
  
    return false;
  }
  render() {
    return <div className="Display">{this.props.number}</div>;
  }
}

export default C2;
