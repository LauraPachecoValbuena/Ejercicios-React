import React from 'react';
import "@testing-library/react/cleanup-after-each";
import ReactDOM from 'react-dom';
import App from './Counter';
import { render, fireEvent, findByText } from "@testing-library/react";
import Counter from './Counter';

// it("Pulsar boton + tiene que sumar +1 al contador", () => {
//   const { getByTestId } = render(<Counter />);
//   expect(getByTestId("add_button").textContent).toBe("1");
// });

it("Pulsar botón restar resta 1 si el contador es mayor que 1", () => {
  const { getByTestId } = render(<Counter />);
  getByTestId("add_button").click();
  const value = +getByTestId("count_span").innerText;
  getByTestId("sub_button").click();
  const newValue = +getByTestId("count_span").innerText;
  expect(newValue).toBe(value - 1);
 });

it("boton + suma 1", () => {
  const { getByTestId } = render(<Counter />);
  const initialValue = +getByTestId("count_span").innerText;
  getByTestId("add_button").click();
  const newValue = +getByTestId("count_span").innerText;
  expect(newValue).toBe(initialValue + 1);
});

it("Pulsar el botón para restar no resta si le contador está a 0", () => {
  const { getByTestId } = render(<Counter />);
  expect(getByTestId("count_span").textContent).toBe("0");
  const button = getByTestId("sub_button");
  button.click();
  expect(getByTestId("count_span").textContent).toBe("0");
});

it("Boton para sumar tine '+' como texto", () => {
  const { getByTestId } = render(<Counter />);
  expect(getByTestId("add_button").textContent).toBe("+");
});

it("Boton para restar tine '-' como texto", () => {
  const { getByTestId } = render(<Counter />);
  expect(getByTestId("sub_button").textContent).toBe("-");
});


it("Contador vale 0 inicialmente", () => {
  const { getByTestId } = render(<Counter />);
  expect(getByTestId("count_span").textContent).toBe("0");
});

// it("App contains text 'Hola'", () => {
//   const { queryByText } = render(<App />);
//   expect(queryByText("Hola")).not.toBeNull();
// });

// it("App contains text 'adios'", () => {
//   const { queryByText } = render(<App />);
//   expect(queryByText("adios")).not.toBeNull();
// });

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });


