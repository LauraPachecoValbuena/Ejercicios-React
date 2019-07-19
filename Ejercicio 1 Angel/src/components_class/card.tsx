import React from "react";

interface IProps {
  imageURL: string;
  name: string;
  text: string;
  remove: () => void;
}

interface IState {
  nClicks: number;
}

class CardClass extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      nClicks: 0
    };

    this.clickOnImage = this.clickOnImage.bind(this);
    this.clickOnName = this.clickOnName.bind(this);

    console.log("constructor");
  }

  clickOnImage() {
    this.setState({ nClicks: this.state.nClicks + 1 });
  }

  clickOnName() {
    if (this.state.nClicks > 0) {
      this.setState({
        nClicks: this.state.nClicks - 1
      });
    }
  }

  componentDidMount() {
    console.log("componentDidMount "+this.props.name);
  }

  componentDidUpdate() {
    console.log("componentDidUpdate "+this.props.name);
  }

  componentWillUnmount() {
    console.log("componentWillUnmount "+this.props.name);
  }

  render() {
    console.log("render");
    return (
      <div className="card">
        <div>
          <div style={{ float: "left" }}>
            <img
              alt="userImage"
              src={this.props.imageURL}
              className="img-thumbnail"
              style={{ width: 50 }}
              onClick={this.clickOnImage}
            />
          </div>
          <div onClick={this.clickOnName}>{this.props.name}</div>
        </div>
        <div className="card-body">
          <div>{this.props.text}</div>
          <div>{this.state.nClicks}</div>
          <div>
            <button onClick={this.props.remove} >REMOVE</button>
            </div>
        </div>
      </div>
    );
  }
}

export default CardClass;
