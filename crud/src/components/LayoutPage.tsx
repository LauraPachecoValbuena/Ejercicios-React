import React from "react";
import Navbar from "./Navbar";
import ShowUsers from "./ShowUsers";
import UserInfo from "./UserInfo";
import { Route, Switch } from "react-router";
import EditUser from "./EditUser";
import AddUser from "./AddUser";

const LayoutPage: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <div className="col-5">
            <ShowUsers />
          </div>
          <div className="col-5">
            <Switch>
            <Route path="/users/add" exact component={AddUser} />
            <Route path="/users/:user_id" exact component={UserInfo} />
            <Route path="/users/edit/:user_id" exact component={EditUser} />
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LayoutPage;
