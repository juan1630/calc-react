// importacion
import React from 'react';
import Result from './components/result';
import Button from './components/button';
import MathOperations from './components/MathOperations';
import Functions from './components/functions';

// siempre se pone primero los componentes y despues el css
import './App.css'



// generacion del componente

// funcion de flecha o arrow function
const App = () => {

const textHandlerFunction = text => {
     console.log("Button ", text);
  }
  // cuerpo de la funcion
  return (  <main>
     <Result value={"0"} />
     <div className="numbers" >
           <Button  text={"1"}  clickHandler={ textHandlerFunction }  />
           <Button  text={"2"}  clickHandler={ textHandlerFunction } />
           <Button  text={"3"}  clickHandler={ textHandlerFunction } />
           <Button  text={"4"}  clickHandler={ textHandlerFunction } />
           <Button  text={"5"}  clickHandler={ textHandlerFunction } />
           <Button  text={"6"}  clickHandler={ textHandlerFunction } />
           <Button  text={"7"}  clickHandler={ textHandlerFunction } />
           <Button  text={"8"}  clickHandler={ textHandlerFunction } />
           <Button  text={"9"}  clickHandler={ textHandlerFunction } />
           <Button  className="buttonCero" text={"0"}  clickHandler={ textHandlerFunction } />
     </div>
     <MathOperations onclickOperation={operation => console.log("Operation:", operation) }
        onClickEqual={ equal => console.log('Equal event', equal)  }
      />

      <div className="functions" >
        <Functions onContentClear={ clear => console.log('limpiando', clear) } onDelete={ deleted => console.log('Borrando', deleted)  }  />
      </div>
    </main>

  );
  // se debn de cerrar todas las etiquetas
  // si no le paso nigun parametro por medio de propTypes no da nigun error

}

// para enviar un valor de tipo string se envia por ""
// si es otro tipo de valor es por medio de {}
// el patron solid se tarata de asignar una unica responsabilidad a un componente
// para que nos va a servir el componente y para que creamos el componente
// no se debe de poner toda la logica dentro de un solo componente
export default App;

// exortacion de la funcion que contiene el componente que hemos creado
