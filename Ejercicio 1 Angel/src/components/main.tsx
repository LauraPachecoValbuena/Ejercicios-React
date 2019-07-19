import React from "react";

interface IProps {
  color: string;
  text?: string;
}

const Main: React.FC<IProps> = props => {
  return (
    <main
      style={{
        backgroundColor: props.color
      }}
    >
      {props.text ? props.text : <strong>NO HAY TEXTO</strong>}
    </main>
  );
};

export default Main;
