import React from "react";
import * as actions from "../actions";
import { connect } from "react-redux";
import jwt from "jsonwebtoken";
import { IMyUser } from "../reducers/myUserReducer";

interface IProps {
  saveToken: (token: string) => void;
  saveMyUser: (myUser: IMyUser) => void;
}

const Login: React.FC<IProps> = props => {
  const [username, setUsername] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

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
          localStorage.setItem("token", token);
          props.saveToken(token); //aqui estoy llamando al saveToken de la interfaz IProps.

          const decode = jwt.decode(token); //ésta es mi variable donde guardo el token descodificado.
          //el tipo de decode puede ser un string, null o un objeto.
          if (typeof decode !== "string" && decode !== null) {
            props.saveMyUser(decode);
            // console.log(decode);
            //en esta condición le estamos diciendo si el tipo de decode es iguala un string o es igual a null
          } //entonces ya nos queda sólo que sea un objeto, con lo cual será admin.
        });
      }
    });
  };

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
          </div>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  saveToken: actions.saveToken,
  saveMyUser: actions.saveMyUser
};

export default connect(
  null,
  mapDispatchToProps
)(Login);
