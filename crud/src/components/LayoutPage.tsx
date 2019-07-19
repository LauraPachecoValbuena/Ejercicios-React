import React from "react";
import Navbar from "./Navbar";
import ShowUsers from "./ShowUsers";
import UserInfo from "./UserInfo";
import { Route } from "react-router";

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
            <Route path="/users/:user_id" component={UserInfo} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LayoutPage;
