import React, { useEffect } from "react";
import { IUser } from "../interfaceIuser";
import { RouteComponentProps, Redirect } from "react-router";
import { IMyUser } from "../reducers/myUserReducer";
import * as actions from "../actions";
import { IGlobalState } from "../reducers/reducers";
import { connect } from "react-redux";

interface IPropsGlobal {
  users: IUser[];
  token: string;
  myUser: IMyUser;
  editUser: (user_id: string, user: IUser) => void;
}

const EditUser: React.FC<
  IPropsGlobal & RouteComponentProps<{ user_id: string }>
> = props => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [isAdmin, setIsAdmin] = React.useState(false);

  const updateUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.currentTarget.value);
  };

  const updatePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value);
  };

  const updateEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.currentTarget.value);
  };

  const updateIsAdmin = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsAdmin(event.currentTarget.checked);
  };

  const user = props.users.find(u => u._id === props.match.params.user_id);

  useEffect(() => {
    if (user) {
      setUsername(user.username);
      setEmail(user.email);
      setIsAdmin(user.isAdmin);
    }
  }, [user]);

  if (!user) {
    return null;
  }

  const Edit = (user_id: string) => {
    // const id = user_id;
    fetch("http://localhost:3000/api/users/" + user._id, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + props.token
      },
      body: JSON.stringify({
        username: username,
        password: password,
        email: email,
        isAdmin: isAdmin
      })
    }).then(response => {
      if (response.ok) {
        response.json().then(u => {
			
          props.editUser(user_id, u);
          props.history.push("/users/" + user._id);
        });
      }
    });
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-6">
          <div className="form-group" id="formEdit">
            <h3>Datos</h3>
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
              data-testid="password_input"
              type="password"
              id="password"
              placeholder=""
              className="form-control"
              value={password}
              onChange={updatePassword}
            />
            <br />
            <h4>Email</h4>
            <input
              type="text"
              id="email"
              placeholder=""
              className="form-control"
              value={email}
              onChange={updateEmail}
            />
            <br />
            {props.myUser.isAdmin && (
              <div className=" form-group form-check">
                <h4>Administrador</h4>
                <input
                  type="checkbox"
                  className="form-control"
                  checked={isAdmin}
                  onChange={updateIsAdmin}
                />
                <br />
              </div>
            )}
            <button
              type="submit"
              className="btn btn-outline-info"
              onClick={() => Edit(user._id)}
            >
              Guardar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: IGlobalState) => ({
  users: state.users,
  token: state.token,
  myUser: state.myUser
});

const mapDitpatchToProps = {
  editUser: actions.editUser
};

export default connect(
  mapStateToProps,
  mapDitpatchToProps
)(EditUser);
