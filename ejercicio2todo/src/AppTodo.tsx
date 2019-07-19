import React from "react";
import "./App.css";
// import Card from "./components/card";
import TodoClass from "./components_class/Todo";

interface IState {
  texts: string[];
  inputValue: string;
}

//un componenete de react (react.components) y con el extend le digo nque le añadimos cosas. Si no se usa extend NO se pone super(props)
class AppTodo extends React.Component<any, IState> {
  //aqui ponemos any puesto que como es el padre NO se le pasan IProps.
  constructor(props: any) {
    //como le decimos arriba que pasamos any el props tiene q ser tmb any.
    super(props); //esto es así SIEMPRE.Llamo al constructor de React Component.

    this.state = {
      texts: [],
      inputValue: " "
    };

    this.updateInput = this.updateInput.bind(this);
    this.clickOnAdd = this.clickOnAdd.bind(this); //ésto lo tenemos q usar siempre que la funcion utilice el this dentro.
  }

  updateInput(event: React.ChangeEvent<HTMLInputElement>) {
    //ésta funcion la llamamos en el onChange.
    this.setState({ inputValue: event.target.value });
  }

  clickOnAdd() {
    //nuestra función xa q cnd le demos un click al botoón cambie el estado
    const texts = this.state.texts;
    texts.unshift(this.state.inputValue);  //ponemos el unshift xa que nos muestre lo primero lo ultimo que escribimos en el input
    this.setState({ texts, inputValue: "" }); //aquí le decimos que muestre e
  }

  deleteTodo(index: number) {
    const texts = this.state.texts;
    texts.splice(index, 1);
    this.setState({ texts });
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.inputValue}
          onChange={this.updateInput}
        />
        <button onClick={this.clickOnAdd}>Add</button>
        <div>
          {this.state.texts.map((text, index) => (
            <TodoClass
              key={text + index}
              text={text}
              delete={() => this.deleteTodo(index)}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default AppTodo;
