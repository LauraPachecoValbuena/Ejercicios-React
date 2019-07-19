import React from "react";
import jwt from "jsonwebtoken"; //tng q instalarme npm install jsonwebtoken @types/jsonwebtoken e importarlo xa la función amIAdmin.
import { IUser } from '../interfaces';
import Table from "./Table";

const Login: React.FC = () => {
  const [username, setUsername] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [token, setToken] = React.useState<string>("");
  const [users, setUsers] = React.useState<IUser[]>([]);

  const updateUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.currentTarget.value);
  };

  const updatePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value);
  };

  const getToken = () => {
    fetch("http://localhost:3000/api/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user: username,
        password: password
      })
    }).then(res => {
      if (res.ok) {
        res.text().then(token => {
          setToken(token); //en un principio está vacio. hasta que se logea alguien.
          getUsers(token);
        });
      }
    });
  };

  const getUsers = (token: string) => {
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
  };

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
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-6">
          <div className="form-group" id="login">
            <h3>Login</h3>
            <br />
            <h4>Usuario</h4>
            <input
              type="text"
              id="username"
              placeholder=""
              className="form-control"
              value={username}
              onChange={updateUsername}
            />
            <br />
            <h4>Contraseña</h4>
            <input
              type="password"
              id="password"
              placeholder=""
              className="form-control"
              value={password}
              onChange={updatePassword}
            />
            <br />
            <button
              type="submit"
              className="btn btn-outline-info"
              onClick={getToken}
            >
              Sign in
            </button>
            <br />
            {/* ésta es la condición para que pinte al table si es mayor que
                cero la longitud. es decir q ue no la muestre si no estás
                logeado. */}
            {users.length > 0 && (
              <div className="tablaUsuarios">  {/*Dejamos aquí este div de la tabla xa q podamos reeutilizarlo.  */}
                <Table users= {users} isAdmin= {isAdmin} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
