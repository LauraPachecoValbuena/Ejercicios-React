//CON FUNCIONES:

import React from "react";
const App: React.FC = () => {
  const mySpanRef = React.useRef<HTMLSpanElement>(null);
  React.useLayoutEffect(() => {
    console.log(mySpanRef.current);
  });
  React.useEffect(() => console.log("hi"));
  return <span ref={mySpanRef}>hola</span>;
};
export default App;

//PASADO A CLASES:

import React from "react";

class App extends React.Component {
  private mySpanRef: React.RefObject<HTMLSpanElement>;
  constructor(props: {}) {
    super(props);

    this.mySpanRef = React.createRef<HTMLSpanElement>();
  }

  componentDidMount() {
    console.log(this.mySpanRef.current);
  }

  render() {
    return <span ref={this.mySpanRef}>hola</span>;
  }
}
