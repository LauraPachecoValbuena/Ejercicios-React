import React from "react";
import "./App.css";
import Login from "./components/Login";
import LoginClass from "./components_class/LoginClass";

const App: React.FC = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-6 html">
          <Login />
        </div>
        <div className="col-6 html">
          <LoginClass />
        </div>
      </div>
    </div>
  );
};

export default App;
