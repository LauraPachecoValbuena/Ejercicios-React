import React from "react";
import * as actions from "../actions";
import { connect } from "react-redux";

interface IProps {
  saveToken: (token: string) => void;
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
          props.saveToken(token); //aqui estoy llamando al saveToken de la interfaz IProps.
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
  saveToken: actions.saveToken
};

export default connect(
  null,
  mapDispatchToProps
)(Login);
