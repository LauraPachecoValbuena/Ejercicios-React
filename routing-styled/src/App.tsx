import React, { useEffect } from "react";
/** @jsx jsx */

import { css, jsx } from "@emotion/core";
import jwt from "jsonwebtoken";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import LayoutPage from "./components/LayoutPage";

const App: React.FC = () => {
  const [token, setToken] = React.useState("");
  const [username, setUsername] = React.useState<string>("");

  const saveToken = (token: string) => {
    setToken(token);
  };

  useEffect(() => {
    if (token) {
      const decode = jwt.decode(token);
      if (typeof decode !== "string" && decode !== null) {
        setUsername(decode.username);
      }
    }
  }, [token]);

  useEffect(() => console.log(username), [username]);

  return (
    <BrowserRouter>
      {!token && <LoginPage saveToken={saveToken} />}
      {token && <LayoutPage username={username} />}
      <Redirect to="/" />
    </BrowserRouter>
  );
};

export default App;
