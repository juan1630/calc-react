import React from 'react';
import { PropTypes } from 'prop-types';

// aplicamos el destrucuting de forma directa a los props
const Result = ({value} ) => {
// estamos aplicando el destrucutring de un objeto a medio de ejemplo
const person = {
  name:'Juan',
  id:1,
  nick:'Juancho'
}

let { name, id, nick } = person;
console.log( name , nick, id);
// const {  value } = props;

// la liberia prop types nos ayuda a validar los datos que se le envian al componente
  return (<div  className="App react-calculator" >
              {value}
        </div>)
}

// dentro de este objeto van los props que vamos a validar
Result.propTypes = {
  value: PropTypes.string.isRequired
  // nos aseguramos de que se mande la propiedad value
  // requerimos la propiedad por medio de isRequired
}

// ponemos por defecto el valor de esta propiedad
Result.defaultProps= {
  value:"0"
  //porps: "Hola"
  // etc
}

export default Result;

// imprimimos los valores que se envian del componente padre
// los parametros pasan los valores de un componente padre a un componente hijo
// los props son las propiedades que recibe el componente
