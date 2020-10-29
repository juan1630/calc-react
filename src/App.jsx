// importacion
import React from 'react';
import Result from './components/result';
import './App.css'



// generacion del componente

// funcion de flecha o arrow function
const App = () => {

  // cuerpo de la funcion
  return (  <Result  value={0}  /> );
}

// para enviar un valor de tipo string se envia por ""
// si es otro tipo de valor es por medio de {}
// el patron solid se tarata de asignar una unica responsabilidad a un componente
// para que nos va a servir el componente y para que creamos el componente
// no se debe de poner toda la logica dentro de un solo componente
export default App;

// exortacion de la funcion que contiene el componente que hemos creado
