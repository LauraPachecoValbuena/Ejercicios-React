import React from 'react';
import "@testing-library/react/cleanup-after-each";
import { render, fireEvent } from "@testing-library/react";
import App from './App';
import LoginPage from './components/LoginPage';
import { createStore } from 'redux';
import { reducers } from './reducers/reducers';
import { devToolsEnhancer } from 'redux-devtools-extension';
import { Provider } from 'react-redux';


// it("El botón de iniciar sesión no funciona hasta que el input de la contraseña", () => {
//   const { getByTestId } = render(<LoginPage />);
//   const password_input = getByTestId("password_input");
//   fireEvent.change(password_input, { target: { value: "Laura"} });
// })
const store = createStore(reducers, devToolsEnhancer({}));

it("El botón de Sigin no funciona hasta que el input del password esté relleno con texto", () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <LoginPage />
    </Provider>
  );
  const password_input = getByTestId("password_input");
  fireEvent.change(password_input, { target: { value: ""} });
  // expect(getByTestId("password_input").toBe("1234"))
})
