import React from "react";

interface IProps {
  text: string;
  name: string;
  image: string;
}

const Card: React.FC<IProps> = props => {
    const click = () => {  //definimos la funcion click que lo que va hacer es pintar x consola el props.name.
        console.log(props.name);
    };
  return (
    <div 
      className="card"
      style={{
        width: "18rem"
      }}
    >
      <img
        className="card-img-top"
        src={props.image}
        alt="Card image cap"
        onClick={click} //aquí estamos llamando a la función click xa que pinte x consola el props.name de cada card.
    
      />
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">
          {props.text}
        </p>
        <a href="#" className="btn btn-outline-info">
          Vamos!!
        </a>
      </div>
    </div>
  );
};

export default Card;
