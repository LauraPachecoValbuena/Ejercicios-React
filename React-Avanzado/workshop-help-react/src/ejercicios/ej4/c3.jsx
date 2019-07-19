import React from "react";

class C3 extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = { dep: false };
  }

  // shouldComponentUpdate() {  No podemos usarlo con el Pure Component.
  //   if (!this.state.dep) {
  //     this.setState({ dep: true });
  //   }
  //   return true;
  // }

  render() {
    return <div className={`virus${this.state.dep ? " dep" : ""}`} />;
  }
}

export default C3;

//Pure Component con funciones.

import React from "react";

const C3 = React.memo(() => {  //este React.memo es xa convertir el componente en puro pero en funciones.
  const [dep, _setDep] = React.useState(false);
 
  return <div className={"virus" +(dep ? " dep" : "")} />;
 }, (prevProps, nextProps) => prevProps.ready !== nextProps.ready); //Podemos poner una función como segundo argumento
   //est función es para decidir cnd quiero actualizar mi componente.No es obligatoria.
 
 
 export default C3;
 C3.displayName="C3"; //esto es para Devtools no nos muestre simplemente "memo". Asi me muestra el componente.


