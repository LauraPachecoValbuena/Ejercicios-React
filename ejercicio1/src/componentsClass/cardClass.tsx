import React from "react";
import { ReactComponent } from "*.svg";
import { write } from "fs";


interface IProps {
  text: string;
  name: string;
  image: string;
}

interface IState {
  nClicks: number;
}

class CardClass extends React.Component<IProps, IState> {  //aqui le pasamos como si fuesen parámetros las dos interfaces IProps e IState. Que están declaradas arriba.
  constructor(props: IProps) {
    super(props); //Llamo al constructor de la clase que esxtiendo.

    this.state = { //aquí estamos inicializando el constructor IState.ésto es un contador para que pinte en cada card los clicks que hagamos sobr el profile.
      nClicks: 0
    };

    this.clickOnImage = this.clickOnImage.bind(this);
    this.clickOnName = this.clickOnName.bind(this);
  }
  clickOnImage() {  //aquí estamos declarando la funcion clickOnImage para que cnd pinches en la imagen te pinte en consola el nombre de esa persona de la card.
    this.setState({ nClicks: this.state.nClicks + 1 });
  }
  clickOnName() {  //aquí declaramos otra función clickOnName para que cnd pinches sobre el nombre vaya restando uno del contador.
    this.setState({ nClicks: this.state.nClicks - 1 });
  }
  render() {
    return (
      <div
        className="card"
        style={{
          width: "18rem"
        }}
      >
        <img className="card-img-top" src={this.props.image} alt="Card image cap" onClick={this.clickOnImage} />  {/*aquí estamos llamando a la funcion que hemos declarado arriba del render */}
        <div className="card-body">
          <h5 className="card-title" onClick={this.clickOnName} >{this.props.name}</h5> { /* aqui llamamos a la funcion de q cnd le pinches sobre el nombre te reste 1 en el contador  */}
          <p className="card-text">{this.props.text}</p>
          <p className="card-text">{this.state.nClicks}</p> {/*aquí le estamos llamando al contador para que pinte el numero de veces que se hace click */}
          <a href="#" className="btn btn-outline-info">
            Vamos!!
          </a>
        </div>
      </div>
    );
  }
}

export default CardClass;
