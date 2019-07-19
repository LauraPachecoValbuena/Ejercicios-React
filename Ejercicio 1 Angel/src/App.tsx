import React from "react";
import "./App.css";
import Card from "./components/card";
//import CardClass from "./components_class/card";

interface IUser {
  name: string;
  text: string;
  imageURL: string;
}

interface IState {
  showFirstCard: boolean;
  showLastCard: boolean;
}

const users: Array<IUser> = [
  {
    name: "Angel Garcia",
    text: "Es muy reactivo",
    imageURL:
      "https://images.vexels.com/media/users/3/145908/preview2/52eabf633ca6414e60a7677b0b917d92-male-avatar-maker.jpg"
  },
  {
    name: "Jose Antonio",
    text: "El rojo más mola",
    imageURL:
      "https://st2.depositphotos.com/2703645/5669/v/950/depositphotos_56695985-stock-illustration-male-avatar.jpg"
  }
];

//un componenete de react (react.components) y con el extend le digo nque le añadimos cosas. Si no se usa extend NO se pone super(props)
class App extends React.Component<any, IState> {  //aqui ponemos any puesto que como es el padre NO se le pasan IProps.
  constructor(props: any) {  //como le decimos arriba que pasamos any el props tiene q ser tmb any.
    super(props);  //esto es así SIEMPRE.Llamo al constructor de React Component.

    this.state = {  //aquí le estamos declarando que el estado está en true.
      showLastCard: true,
      showFirstCard: true
    };

    this.clickOnButton = this.clickOnButton.bind(this);  //ésto lo tenemos q usar siempre que la funcion utilice el this dentro.
    this.clickOnFirstButton = this.clickOnFirstButton.bind(this);
  }

  clickOnButton() {  //nuestra función xa q cnd le demos un click al botoón cambie el estado
    this.setState({ showLastCard: !this.state.showLastCard });  //aquí le decimos que cambie el estado. Que muestra la ultima card si el estado es ditintoa  true.
  }

  clickOnFirstButton(){
    this.setState({ showFirstCard: !this.state.showFirstCard });
  }

  render() {
    return (
      <div style={{ width: "50%" }}>
        <button onClick={this.clickOnButton}>Toggle Last Card</button> {/* este es nuestro botón que en el onclick estamos llamando a la funcion de clickOnButton*/}
        <button onClick={this.clickOnFirstButton}>Toggle First Card</button>
        {users.map((user, i) => {
          if ((i === users.length - 1 && !this.state.showLastCard) || (i === 0 && !this.state.showFirstCard)) {
            return null;
          }
          return (
            <Card
              key={user.name}
              imageURL={user.imageURL}
              name={user.name}
              text={user.text}
              // remove={() => {  //esta función para eliminar una card del hijo está en el padre y se la vamos a pasar al hijo en el interface IProps
              //   if(i ===0){
              //     this.setState({ showFirstCard: false});
              //   }
              //   if(i === users.length -1){
              //     this.setState({ showLastCard: false});
              //   }
              // }}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
