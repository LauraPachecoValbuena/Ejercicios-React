import React from "react";

interface IProps {
  imageURL: string;
  name: string;
  text: string;
}

const Card: React.FC<IProps> = props => {
  const [nClicks, setnClicks] = React.useState(0); 
  console.log('pasaba x aqui'); 
  //const clickOnImage = () => setnClicks(nClicks + 1); 
  const clickOnImage = () =>  {
    setnClicks(currentnClicks => currentnClicks + 1);
  };
  //es lo mismo que lo de arriba pero MEJOR. Puesto que currentnClicks me pone el valor de la variable actual.
  
  //const clickOnName = () => setnClicks(nClicks - 1);
  const clickOnName = () => {
    setnClicks(currentnClicks => currentnClicks - 1);
  };
  return (
    <div className="card">
      <div>
        <div style={{ float: "left" }}>
          <img
            alt="userImage"
            src={props.imageURL}
            className="img-thumbnail"
            style={{ width: 50 }}
            onClick={clickOnImage}
          />
        </div>
        <div onClick={clickOnName}>{props.name}</div> {/* aqui llamo a la constante que he declarado arriba (que es una función)  */}
      </div>
      <div className="card-body">{props.text}{nClicks}</div>
    </div>
  );
};

export default Card;
