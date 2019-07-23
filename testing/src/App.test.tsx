import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render, fireEvent, findByText } from "@testing-library/react";

it("App contains text 'Hola'", () => {
  const { queryByText } = render(<App />);
  expect(queryByText("Hola")).not.toBeNull();
});

it("App contains text 'adios'", () => {
  const { queryByText } = render(<App />);
  expect(queryByText("adios")).not.toBeNull();
});

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });


