import * as React from "react";
import Ej1 from "./ejercicios/ej1/c1";
import Ej1final from "./ejercicios/ej1final/c1";
import Ej2 from "./ejercicios/ej2/c1";
import Ej2final from "./ejercicios/ej2final/c1";
import Ej3 from "./ejercicios/ej3/c1";
import Ej3final from "./ejercicios/ej3final/c1";
import Ej4 from "./ejercicios/ej4/c1";
import Ej4final from "./ejercicios/ej4final/c1";
import Ej5 from "./ejercicios/ej5/c1";
import Ej5final from "./ejercicios/ej5final/c1";
import Ej6 from "./ejercicios/ej6/c1";
import Ej6final from "./ejercicios/ej6final/c1";
import Ej7 from "./ejercicios/ej7/c1";
import Ej7final from "./ejercicios/ej7final/c1";

import "./App.css";

class App extends React.Component {
  render() {
    const path = window.location.pathname;
    switch (path) {
      case "/1":
        return (
          <div className="Problem">
            <div>
              <Ej1 />
            </div>
            <div>
              <Ej1final />
            </div>
          </div>
        );
      case "/2":
        return (
          <div className="Problem">
            <div>
              <Ej2 />
            </div>
            <div>
              <Ej2final />
            </div>
          </div>
        );
      case "/3":
        return (
          <div className="Problem">
            <div>
              <Ej3 />
            </div>
            <div>
              <Ej3final />
            </div>
          </div>
        );
      case "/4":
        return (
          <div className="Problem">
            <div>
              <Ej4 />
            </div>
            <div>
              <Ej4final />
            </div>
          </div>
        );
      case "/5":
        return (
          <div className="Problem">
            <div>
              <Ej5 />
            </div>
            <div>
              <Ej5final />
            </div>
          </div>
        );
      case "/6":
        return (
          <div className="Problem">
            <div>
              <Ej6 />
            </div>
            <div>
              <Ej6final />
            </div>
          </div>
        );
      case "/7":
        return (
          <div className="Problem">
            <div>
              <Ej7 />
            </div>
            <div>
              <Ej7final />
            </div>
          </div>
        );
      default:
        return null;
    }
  }
}

export default App;
