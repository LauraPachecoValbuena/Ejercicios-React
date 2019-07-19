import React from "react";
import C2 from "./c2";

class C1 extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      toggles: [false, false, false]
    };
  }

  toggle(index) {
    const aux = this.state.toggles;
    aux[index] = !aux[index];
     /*let newArray;
    newArray = [...aux];
    //mas formas de hacerlo. que llevan a lo mismo.
    newArray = [].concat(aux);
    newArray = aux.map(a => a);
    newArray = Object.assign([],aux);*/
    this.setState({ toggles: [...aux] });  //SPREAD OPERATOR ésto [...aux] lo que hace es crearte un nuevo array con lo mismo que la const aux. como ya es un nuevo array tiene nueva referencia. Ya no es el mismo.
  }

  render() {
    return (
      <div className="wrap">
        <button onClick={() => this.toggle(0)}>Toggle first</button>
        <button onClick={() => this.toggle(1)}>Toggle second</button>
        <button onClick={() => this.toggle(2)}>Toggle third</button>
        <C2 toggles={this.state.toggles} />
      </div>
    );
  }
}

export default C1;
