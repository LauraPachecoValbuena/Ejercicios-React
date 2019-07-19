import React from "react";
import { Link } from 'react-router-dom';
//como en la app ya hemos importado el browserRouter y ahi le hemos metido nuestro componente page1 no hace falta volverlo a importar o poner.

const Page1: React.FC = () => {
    return (
    <div>
        Mi pagina 1 <Link to="/2">Ir a pagina 2</Link>
    </div>
    );
};

export default Page1;