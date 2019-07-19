import React from 'react';
/** @jsx jsx */ /** éwsto tiene q estar siempre aqui si voy a utilizar el css en el div xa darl el estilo*/
import { css, jsx } from "@emotion/core";
import { Redbutton, Bluebutton, Button, Button1 } from './styledComponents';

const lauraCSS = css`
background-color: black;
color: white;
&:hover{
  color: blue;
}
`;


const App: React.FC = () => {
  return (
    <div css={lauraCSS}>
      Hello World!!
      <Button isRed>vamos</Button>
      <Button1 background="green">Pincha</Button1>
      <Redbutton>Click here</Redbutton>
      <Bluebutton>Let`s go</Bluebutton>
    </div>
  );
};

// EXACTAMENTE LO MISMO QUE ARRIBA PERO OTRA MANERA DE HACERLO
// const App: React.FC = () => {
//   return (
//     <div 
//     css={css`
//     background-color: red;
//     color: white;
//     `}
//     >
//       Hello World!!
//       </div>
//   );
// };

export default App;
