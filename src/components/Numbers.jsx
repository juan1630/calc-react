import React from 'react';
import PropTypes from 'prop-types';
import Button from './button';

// para no escribir el return se ponen los () cuando es una sola linea

// dont repeat yourself

const numbers = [ 7, 8, 9, 4, 5, 6, 1, 2 ,3, 0]

// PROPIEDAD KEY
// la propiedad key se usa cuando se generan listas de componentes dinamicos
//  Sirve para que react identifique cada elemento de la lista y cuales elemetnos cambian o se elimnan de la lista
// solo se debe de usar cuando los componentes son hermanos
// no usar el indice de la lista
const renderButtons = onClickNumber => {
    const renderButton = (number) => (
      <Button
      key={number}
      text={number.toString()}
      clickHandler={onClickNumber} />)

    return  numbers.map( renderButton );
}

const Numbers = ({onClickNumber}) => {
 return  <section  className="numbers">
    {
      renderButtons(onClickNumber)
    }
  </section>

};


Numbers.propTypes={
  onClickNumber:  PropTypes.func.isRequired
}

export default Numbers;
