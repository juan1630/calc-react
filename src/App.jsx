// importacion
import React, { useState } from 'react';
import Result from './components/result';

import MathOperations from './components/MathOperations';
import Functions from './components/functions';
import Numbers from './components/Numbers';

// siempre se pone primero los componentes y despues el css
import './App.css'

// generacion del componente

// funcion de flecha o arrow function
const App = () => {
  // cuerpo de la funcion

  // inciamos con el manejo de los hooks
  // valor inicial del estado
const [stack, setStack] = useState("");
// array destructuring

  //importamos de React
  return (  <main>
     <Result value={stack} />
     <Numbers onClickNumber={ numbers => setStack(numbers)  } />
     <MathOperations onclickOperation={operation => console.log("Operation:", operation) }
        onClickEqual={ equal => console.log('Equal event', equal)  }/>

      <div className="functions" >
        <Functions onContentClear={ clear => console.log('limpiando', clear) } onDelete={ deleted => console.log('Borrando', deleted)  }  />
      </div>
    </main>

  );
  // se deben de cerrar todas las etiquetas
  // si no le paso nigun parametro por medio de propTypes no da nigun error

}

// para enviar un valor de tipo string se envia por ""
// si es otro tipo de valor es por medio de {}
// el patron solid se tarata de asignar una unica responsabilidad a un componente
// para que nos va a servir el componente y para que creamos el componente
// no se debe de poner toda la logica dentro de un solo componente
export default App;

// exortacion de la funcion que contiene el componente que hemos creado
