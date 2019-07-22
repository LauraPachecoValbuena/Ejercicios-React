import React from "react";
import { IUser } from "../interfaceIuser";
import { RouteComponentProps, Redirect } from "react-router";
import { IGlobalState } from "../reducers/reducers";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as actions from "../actions";
import { IMyUser } from "../reducers/myUserReducer";

interface IPropsGlobal {
  users: IUser[];
  token: string;
  myUser: IMyUser;
  removeUser: (user_id: string) => void;
}

const UserInfo: React.FC<
  IPropsGlobal & RouteComponentProps<{ user_id: string }>
> = props => {
  const user = props.users.find(u => u._id === props.match.params.user_id);
  if (!user) {
    return <Redirect to="/" />;
  }

  const Delete = (user_id: string) => {
    const id = user_id;
    fetch("http://localhost:3000/api/users/" + user._id, {
      method: "DELETE",
       headers: {
         "Content-type": "application/json",
         Authorization: "Bearer " + props.token
       }
    }).then(response => {
      if (response.ok) {
        fetch("http://localhost:3000/api/users", {
          headers: {
            "Content-type": "application/json",
            Authorization: "Bearer " + props.token
          }
        }).then(response => {
          if (response.ok) {
            props.removeUser(user_id);
            props.history.push("/users");
          }
        })
      }
 
    });
  };
  
  return (
    <>
        <div className="card" style={{ width: "18rem" }}>
          <div key={user._id} className="card-body">
            <h5 className="card-title">{user.username}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{user.email}</h6>
            <p className="card-text">({user.isAdmin})</p>
            <a href="#" className="card-link">
              {/* <Link to={"/users/" + u._id} className="btn btn-info">
              Let's Go
            </Link> */}
              Edit
            </a>
            {props.myUser.isAdmin && (
            <Link to={"/users/" + user._id} className="btn btn-info" onClick={() => Delete (user._id)} >
              Delete
            </Link>
            )}
          </div>
        </div>
    </>
  );
};

const mapStateToProps = (state: IGlobalState) => ({
  users: state.users,
  token: state.token,
  myUser: state.myUser
});

const mapDitpatchToProps = {
  removeUser: actions.removeUser
};

export default connect(
  mapStateToProps,
  mapDitpatchToProps
  )(UserInfo);
