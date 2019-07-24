import React, { useState } from 'react';


const App: React.FC = () => {
  const [file, setFile] = useState();
  
  const send = () => {
    const data = new FormData();
    data.append("file", file);  //aquí estamos añaniendo 
    fetch("http://localhost/upload", { method: "POST", body: data });
  };

  const handleFileUpload = (event: any) => {
    setFile(event.target.files[0]);  //desde el setFile guardop el archivo q subimos en la const file de arriba.
  };

  return (
    <div>
      <input type="file" onChange={handleFileUpload} />
      <button onClick={send}>Enviar</button>

    </div>
  );
};

export default App;
