/*  eslint no-eval: 0*/
// importacion

import React, { useState } from 'react';
import Result from './components/result';

import MathOperations from './components/MathOperations';
import Functions from './components/functions';
import Numbers from './components/Numbers';

import words from 'lodash.words';
//
// siempre se pone primero los componentes y despues el css
import './App.css'

// generacion del componente

// funcion de flecha o arrow function
const App = () => {
  // cuerpo de la funcion

  // inciamos con el manejo de los hooks
  // valor inicial del estado
const [stack, setStack] = useState("");
const items = words(stack,/[^-^+^+^/]+/g );
//      es verdadero ? es verdaderos ? resultadoVerdaderos : resultadoFalso
const value = items.length > 0  ? items[items.length -1] : "0";
// nos devuelva un array de los numeros que se ingresan
// array destructuring
// en stack vamos acumulando los numeros
  //importamos de React

  // hacemos una concatenacin de strings
  return (<main>
     <Result value={value} />
     <Numbers onClickNumber={ numbers => setStack(`${stack} ${numbers}`)  } />
     <MathOperations onclickOperation={operation =>{
        setStack(`${stack} ${operation}`);
     }  }
        onClickEqual={ equal => {
          setStack(eval(stack).toString());
        }  }/>

      <div className="functions" >
        <Functions onContentClear={ clear =>  setStack("") } onDelete={ deleted => {
          if( stack.length > 0 ){
            const newStack = stack.substring(0, stack.length - 1);
            setStack(newStack);
          }else {
            return
          }
        }  }  />
      </div>
    </main>);
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
