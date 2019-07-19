import React from "react";
import * as actions from "../actions";
import { IGlobalState } from "../reducers/reducers";
import { IMyUser } from "../reducers/myUserReducer";
import { connect } from "react-redux";

interface IPropsGlobal {
  myUser: IMyUser;
  saveToken: (token: string) => void;
}

const Navbar: React.FC<IPropsGlobal> = props => {
  const logOut = () => {
    props.saveToken("");
    localStorage.removeItem("token");
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
        <a className="navbar-brand ">{props.myUser.username}</a>
        <form className="form-inline">
          <button
            className="btn btn-outline-info my-2 my-sm-0"
            type="submit"
            onClick={logOut}
          >
            Logout
          </button>
        </form>
      </nav>
    </div>
  );
};

const mapStateToProps = (state: IGlobalState) => ({
  myUser: state.myUser
});

const mapDispatchToProps = {
  saveToken: actions.saveToken
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
