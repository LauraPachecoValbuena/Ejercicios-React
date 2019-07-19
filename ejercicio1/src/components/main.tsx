import React from "react";

//aquí estamos definiendo nuestro componente. Las propiedades que va a tener.
interface IProps {  
  color: string;
  text?: string;   //con ? detrás de text con éste simbolo ? ele estamos indicando que NO es obligatorio. Solo el color es obligatorio.
}

const Main: React.FC<IProps> = props => { // props = propiedad. Tenemos que ponewr any xq hay que indicarle que le va a llegar cualquier cosa=any.
  return (
    <main
      style={{
        backgroundColor: props.color  // le estamso indicando propiedad.color
      }}
    >
        {props.text ? props.text : " ___"}  {/* como le hemos dicho que NO es obligatorio pasar un texto si no le pasamos nada, no nos pinta ningun color.xq no existira ese div. */}
                                             {/* si queremos que pinte el color o le metemos las comillas con algo vacio o le metemos un texto concreto. Si no le ponemos NADA no pintará ningún color */}
    </main>
  );
};

export default Main;
