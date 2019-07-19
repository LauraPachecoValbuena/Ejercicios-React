import React from "react";
import "./App.css";
import Login from "./components/Login";
import { IGlobalState } from "./reducers/reducers";
import { connect } from "react-redux";
import Cities from "./components/Cities";
import CityInfo from "./components/CityInfo";

interface IPropsGlobal {
  token: string;
}

const App: React.FC<IPropsGlobal> = props => {
  return (
    <div className="container">
      {!props.token && <Login />}
      {props.token && <Cities />}
      {<CityInfo />}
    </div>
  );
};
const mapStateToProps = (state: IGlobalState) => ({
  token: state.token
});

export default connect(mapStateToProps)(App);
