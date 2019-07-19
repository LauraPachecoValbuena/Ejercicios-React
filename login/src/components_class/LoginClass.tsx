import React from "react";
import jwt from "jsonwebtoken";
import { IUser } from "../interfaces";
import TableClass from "./TableClass";

interface IState {
  username: string;
  password: string;
  token: string;
  users: IUser[];
}

class LoginClass extends React.Component<any, IState> {
  constructor(props: any) {
    super(props);

    this.state = {
      username: "",
      password: "",
      token: "",
      users: []
    };

    this.updateUsername = this.updateUsername.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
  }

  updateUsername(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ username: event.target.value });
  }

  updatePassword(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ password: event.target.value });
  }

  getToken = () => {
    fetch("http://localhost:3000/api/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user: this.state.username,
        password: this.state.password
      })
    }).then(res => {
      if (res.ok) {
        res.text().then(token => {
          this.setState({ token: token });
          this.getUsers(token);
        });
      }
    });
  };

  getUsers = (token: string) => {
    fetch("http://localhost:3000/api/users", {
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + token
      }
    }).then(response => {
      if (response.ok) {
        response.json().then(users => {
          this.setState({ users: users });
        });
      }
    });
  };

  amIAdmin = () => {
    const decode = jwt.decode(this.state.token);
    if (typeof decode === "string" || decode === null) {
      return false;
    }
    return decode.isAdmin;
  };

  render() {
    const isAdmin = this.amIAdmin();
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-6">
            <div className="form-group" id="login">
              <h3>Login Class</h3>
              <br />
              <h4>Usuario</h4>
              <input
                type="text"
                id="username"
                placeholder=""
                className="form-control"
                value={this.state.username}
                onChange={this.updateUsername}
              />
              <br />
              <h4>Contraseña</h4>
              <input
                type="password"
                id="password"
                placeholder=""
                className="form-control"
                value={this.state.password}
                onChange={this.updatePassword}
              />
              <br />
              <button
                type="submit"
                className="btn btn-outline-info"
                onClick={this.getToken}
              >
                Sign in
              </button>
              <br />
              {this.state.users.length > 0 && ( //ésta es la condición para que pinte al table si es mayor que cero la longitud. es decir q ue no la muestre si no estás logeado.
              <div className="tablaUsuarios">
                <TableClass users= {this.state.users} isAdmin= {isAdmin} />
               
                  {/* <table className="table table-hover">
                    <thead>
                      <tr id="cabeceraTabla">
                        <th scope="col">Name</th>
                        {isAdmin && <th scope="col">Email</th>}
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.users.map(u => (
                        <tr key={u._id}>
                          <td>{u.username}</td>
                          {isAdmin && <td>{u.email}</td>}
                        </tr>
                      ))}
                    </tbody>
                  </table> */}
        
              </div>
              )}{" "}
              {/* Asi estamos finalizando la condición*/}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginClass;
