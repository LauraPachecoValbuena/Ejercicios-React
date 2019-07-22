import React from "react";
import { IUser } from "../interfaceIuser";
import { RouteComponentProps, Redirect } from "react-router";
import { IGlobalState } from "../reducers/reducers";
import { connect } from "react-redux";

interface IPropsGlobal {
  users: IUser[];
}

const UserInfo: React.FC<
  IPropsGlobal & RouteComponentProps<{ user_id: string }>
> = props => {
  const user = props.users.find(u => u._id === props.match.params.user_id);
  if (!user) {
    return <Redirect to="/" />;
  }
  return <div>
  {user.username}
  </div>;
};

const mapStateToProps = (state: IGlobalState) => ({
  users: state.users
});

export default connect(mapStateToProps)(UserInfo);
