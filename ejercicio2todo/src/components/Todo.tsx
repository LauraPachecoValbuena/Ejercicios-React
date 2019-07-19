import React from "react";


interface IProps {
    text: string;
    delete: () => void;

  }


const Todo: React.FC<IProps> = props => {
  React.useEffect(() => console.log(props.text), []);  //el array vacio [] le está diciendo q ejecute ese useEffect sólo la primera vez q se crea. seria lo mismo que el componente Will mount en las clases.
  // const print = () => {
  //   console.log(props.text);
  // }
  return ( 
    <div>
      {props.text}
      <button onClick={props.delete}>DELETE</button>
      {/* <button onClick={print}>PRINT</button> */}
    </div>
  );
};
    


export default Todo;