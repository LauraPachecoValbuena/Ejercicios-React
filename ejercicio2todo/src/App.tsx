import React from "react";
import "./App.css";
import Todo from "./components/Todo";

const App: React.FC = () => {
  const [texts, setTexts] = React.useState<string[]>([]); //aqui le especificamos que va a ser un array de string. porque sino se lo especifico puede ser un array de numeros, numeros +string, etc...
  const [inputValue, setInputValue] = React.useState("");

  const updateInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.currentTarget.value);
  };

  const createTodo = () => {
    if (inputValue.length > 0 && !texts.includes(inputValue)) {
      //si el valor del inputValue no está metido en el texto. Asi le estamos diciendo que los texto sean únicos. Es como declarar una especie de id o valor unico.
      setTexts([...texts, inputValue]); //así pone primero lo primero que metemos en el input.
      //setTexts([inputValue, ...texts]);  //asi lo ultimo que escribimos en el input lo va a poner primero.
      setInputValue("");
    }
  };

  const deleteTodo = (index: number) => {
    texts.splice(index, 1);
    setTexts([...texts]); //aqui estamos clonando el array text. Para que React compare el array text y éste clon.se da cuenta que este clon es un objeto nuevo y actualiza (puesto que NO compara los valores internos sino la referencia y como son dos objetos distintos actualiza). Hay que clonarlo para que reciba un objeto nuevo.
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={updateInput} />
      <button onClick={createTodo}>Add</button>
      {texts.map((t, i) => (
        <Todo
          // key={t + i}  //se utiliza cnd utilizamos el map. el texto + índice. Le ayuda a react a ser más especificoa  la hora de buscar dentro del bucle.
          key={t} //le quitamos el indice xa si eliminamos un indice nos crea un array nuevo y nos va a dar fallos.
          text={t}
          delete={() => deleteTodo(i)}
        />
      ))}
    </div>
  );
};

export default App;
