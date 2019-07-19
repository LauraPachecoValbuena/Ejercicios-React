import React from "react";

interface IProps {
  text: string;
  delete: () => void;
}

class TodoClass extends React.Component<IProps> {
  render() {
    return (
      <div className="mb-3">
        <div>{this.props.text}</div>
        <button onClick={this.props.delete} className="btn btn-outline-secondary" type="button">
          DELETE
        </button>
      </div>
    );
  }
}

export default TodoClass;
