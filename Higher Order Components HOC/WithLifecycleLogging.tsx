import React from "react";

const WithLifecycleLogging = (WrappedComponent: any) => {
  return class extends React.Component {
    componentWillMount() {
      console.log("componentWillMount");
    }
    componentDidMount() {
      console.log("componentDidMount");
    }
    render() {
      // Wraps the input component in a container, without mutating it. Good!
      return <WrappedComponent {...this.props} />;
    }
  };
};

export default WithLifecycleLogging;
