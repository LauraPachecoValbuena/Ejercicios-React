import React, { useEffect } from "react";
import jwt from "jsonwebtoken"; //tng q instalarme npm install jsonwebtoken @types/jsonwebtoken e importarlo xa la función amIAdmin.
import "./App.css";
import Login from "./components/Login";
import LoginClass from "./components_class/LoginClass";
import { IUser } from "./interfaces";
import Table from "./components/Table";
import TableClass from "./components_class/TableClass";

const App: React.FC = () => {
  const [token, setToken] = React.useState("");
  const [users, setUsers] = React.useState<IUser[]>([]);

  //esta función que tiene el padre es xa guardar el token que genera el hijo. Para pasar este funcion al hijo la paso como propiedad.
  const saveToken = (token: string) => {
    setToken(token);
  };

  const getUsers = (token: string) => {
    if (token){
    fetch("http://localhost:3000/api/users", {
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + token
      }
    }).then(response => {
      if (response.ok) {
        response.json().then(users => {
          setUsers(users);
        });
      }
    });
  }
  };

 //usamos el hook useEffect xa que una vez q actualice el dom nos muestre los usuarios una vez tenga el token.
  useEffect(() => {
    getUsers(token);
  });


    //me creo una funcion para saber si la persona que se logea sea admin o no.
    const amIAdmin = () => {
      const decode = jwt.decode(token); //ésta es mi variable donde guardo el token descodificado.
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
          <Login saveToken={saveToken} />
        </div>
        <br />
            {/* ésta es la condición para que pinte al table si es mayor que
                cero la longitud. es decir q ue no la muestre si no estás
                logeado. */}
            {users.length > 0 && (
              <div className="tablaUsuarios">
                {" "}
                {/*Dejamos aquí este div de la tabla xa q podamos reeutilizarlo.  */}
                <Table users={users} isAdmin={isAdmin} />
              </div>
            )}
        <div className="col-6 html">
          <LoginClass />
        </div>
        <br />
              {this.state.users.length > 0 && ( //ésta es la condición para que pinte al table si es mayor que cero la longitud. es decir q ue no la muestre si no estás logeado.
              <div className="tablaUsuarios">
                <TableClass users= {this.state.users} isAdmin= {isAdmin} />        
              </div>
              )}{" "}
              {/* Asi estamos finalizando la condición*/}

      </div>
    </div>
  );
};

export default App;
