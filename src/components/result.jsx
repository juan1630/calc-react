import React from 'react';


const Result = ( propiedades ) => {

  console.log( propiedades );

  return (<div  className="App react-calculator" >
              {propiedades.value}
        </div>)
}

export default Result;
            // imprimimos los valores que se envian del componente padre
// los parametros pasan los valores de un componente padre a un componente hijo
// los props son las propiedades que recibe el componente
