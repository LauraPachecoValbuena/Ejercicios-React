import React from "react";

class C3 extends React.Component {
  constructor(props) {
    super(props);

    this.state = { dep: false };
  }

  shouldComponentUpdate() {
    if (!this.state.dep) {
      this.setState({ dep: true });
    }
    return true;
  }

  render() {
    return <div className={`virus${this.state.dep ? " dep" : ""}`} />;
  }
}

export default C3;
