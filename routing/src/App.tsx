import React from 'react';
import Page1 from './Page1';
import Page2 from './Page2';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';


const App: React.FC = () => {
  return (
    <div>
      <BrowserRouter> 
      <Switch>  {/* El switch te restringe la condición y te muestra sólo el primero que se cumpla. se sulen pponer los más especificos primeros y los mas generales dsp. Es como un IF */}
        <Route path="/1" exact component={Page1} />  {/*Le pinemos el exact para que sólo nos muestre /1 en el path. Es un boolean q x defecto es true */}
        <Route path="/2" exact component={Page2} />
        {/* <Route path="/users/:userId?"  component={Page2} /> Le ponemos el ? dsp del :userId para no pillarnos las manos porque peuede ser que le llegue el Id o no y asi no peta si no le llega */}
        <Redirect to="/1" /> {/*El redirect evita que si no cumple alguna de estas dos condiciones de los route me redirige a la pagina 1. Se suelen poner DENTRO del Switch*/}
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
