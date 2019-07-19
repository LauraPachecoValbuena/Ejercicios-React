import React, { useEffect } from "react";
import { IUser } from "../interfaceIuser";
import { IGlobalState } from "../reducers/reducers";
import * as actions from "../actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

interface IPropsGlobal {
  token: string;
  users: IUser[];
  setUsers: (users: []) => void;
}

const ShowUsers: React.FC<IPropsGlobal> = props => {
  const getUsers = () => {
    if (props.token) {
      fetch("http://localhost:3000/api/users", {
        headers: {
          "Content-type": "application/json",
          Authorization: "Bearer " + props.token
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

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      {props.users.map(u => (
        <div key={u._id} className="card text-center">
          <div className="card-body">
            <h5 className="card-title">{u.username}</h5>
            <p className="card-text">({u.email})</p>
            <Link to={"/users/" + u._id} className="btn btn-info">
              Let's Go
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

const mapStateToProps = (state: IGlobalState) => ({
  token: state.token,
  users: state.users
});

const mapDispachToProps = {
  setUsers: actions.setUsers
};

export default connect(
  mapStateToProps,
  mapDispachToProps
)(ShowUsers);
