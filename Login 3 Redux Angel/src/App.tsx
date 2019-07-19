import React from "react";
import "./App.css";
import { connect } from "react-redux";
import * as actions from "./actions";
import { setNumber } from './actions';
import { IGlobalState } from "./reducers/reducers";

interface IProps {} //ésta son las que vienen del padre.

interface IPropsGlobal {  //éstas son las que vienen de manera global (están en valueReducer)
  value: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
  setNumber: (n: number) => void;

}


const App: React.FC<IProps & IPropsGlobal> = props => {
  return (
    <div className="App">
      {props.value}
      <button onClick={props.increment}>+</button>
      <button onClick={props.decrement}>-</button>
      <button onClick={props.reset}>reset</button>
      <button onClick={()=>props.setNumber(50)}>50</button>  { /* aqui le tenemos que poner la funcion flecha y el valor de 50 puesto que es un valor fijo. */}
      <button onClick={()=>props.setNumber(100)}>100</button>
    </div>
  );
};

const mapStateToProps = (state: IGlobalState) => ({
  value: state.value  //aqui en vez de que me devuelva todo el state. le digo que me devuelva solo el objeto value y NO todo.
});
const mapDispatchToProps = {
  increment: actions.increment,
  decrement: actions.decrement,
  reset: actions.reset,
  setNumber: actions.setNumber
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
