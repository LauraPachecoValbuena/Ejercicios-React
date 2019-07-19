import React from "react";
import Navbar from "./Navbar";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import { BrowserRouter, Switch, Route } from "react-router-dom";

interface IProps {
  username: string;
}

const LayoutPage: React.FC<IProps> = props => {
  const username = props.username;
  return (
    <div>
        <Navbar username={username} />
      <Switch>
        <Route path="/1" exact component={Page1} />
        <Route path="/2" exact component={Page2} />
        <Route path="/3" exact component={Page3} />
      </Switch>
    </div>
  );
};

export default LayoutPage;
