import React, { useEffect } from "react";
import jwt from "jsonwebtoken"; //tng q instalarme npm install jsonwebtoken @types/jsonwebtoken e importarlo xa la función amIAdmin.
import "./App.css";
import Login from "./components/Login";
import LoginClass from "./components_class/LoginClass";
import { IUser } from "./interfaces";
import Table from "./components/Table";
import TableClass from "./components_class/TableClass";
import { connect } from "react-redux";
import * as actions from "./actions";
import { IGlobalState } from "./reducers/reducers";

interface IProps {}

interface IPropsGlobal {
  token: string;
  users: IUser[];
  setUsers: (users: IUser[]) => void;
}

const App: React.FC<IProps & IPropsGlobal> = props => {
  // const [users, setUsers] = React.useState<IUser[]>([]);

  const getUsers = (token: string) => {
    if (token) {
      fetch("http://localhost:3000/api/users", {
        headers: {
          "Content-type": "application/json",
          Authorization: "Bearer " + token
        }
      }).then(response => {
        if (response.ok) {
          response.json().then(users => {
            props.setUsers(users);
          });
        }
      });
    }
  };

  //usamos el hook useEffect xa que una vez q actualice el dom nos muestre los usuarios una vez tenga el token.
  useEffect(() => {
    if (props.token) {
      getUsers(props.token);
    }
  }, [props.token]);

  //me creo una funcion para saber si la persona que se logea sea admin o no.
  const amIAdmin = () => {
    const decode = jwt.decode(props.token); //ésta es mi variable donde guardo el token descodificado.
    //el tipo de decode puede ser un string, null o un objeto.
    if (typeof decode === "string" || decode === null) {
      //en esta condición le estamos diciendo si el tipo de decode es iguala un string o es igual a null
      return false; //devuelve falso = No es admin.
    }
    return decode.isAdmin; //entonces ya nos queda sólo que sea un objeto, con lo cual será admin.
  };

  const isAdmin = amIAdmin(); //declaro la const isAdmin donde guardo el valor de la función amIAdmin para NO tener que llamar a la función dos veces y q se ejecute dos veces. sino que llamamos a la variable.

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-6 html">
          <Login />
        </div>
        <br />
        {/* ésta es la condición para que pinte al table si es mayor que
                cero la longitud. es decir q ue no la muestre si no estás
                logeado. */}
        {props.users.length > 0 && (
          <div className="tablaUsuarios">
            {/*Dejamos aquí este div de la tabla xa q podamos reeutilizarlo.  */}
            <Table isAdmin={isAdmin} />
          </div>
        )}
        {/* <div className="col-6 html">
          <LoginClass />
        </div> */}
        {/* <br />
        {users.length > 0 && ( //ésta es la condición para que pinte al table si es mayor que cero la longitud. es decir q ue no la muestre si no estás logeado.
          <div className="tablaUsuarios">
            <TableClass users={users} isAdmin={isAdmin} />
          </div>
        )} */}
        {/* <br />
        {props.myFavoriteNumber}
        <button onClick={() => props.updateNumber(8)}>CLICK</button>
        <button onClick={() => props.increaseNumber()}>+</button>
        <button onClick={() => props.reduceNumber()}>-</button>
        <button onClick={() => props.resetNumber()}>reset</button> */}
      </div>
    </div>
  );
};

//ésto es xa conectarnos a redux desde éste componente. De manera que lo voy a recibir en las props.
const mapStateToProps = (state: IGlobalState) => ({
  users: state.users,
  token: state.token
}); //connecta el store con la intefaz, navegador
const mapDispachToProps = {
  //   updateNumber: actions.updateNumber,
  //   increaseNumber: actions.increaseNumber,
  //   reduceNumber: actions.reduceNumber,
  //   resetNumber: actions.resetNumber
  setUsers: actions.setUsers
}; // este conecta la ui con el action, le envia las acciones.

export default connect(
  mapStateToProps,
  mapDispachToProps
)(App);
