import React from 'react';
import PropTypes from 'prop-types';
import Button from './button';

// para no escribir el return se ponen los () cuando es una sola linea

// dont repeat yourself

  const numbers = [1,2,3,4,5,6,7,8,9,0];


const renderButtons = onClickNumber => {
  const renderButton = number => ( <Button text={number.toString()}  clickHandler={onClickNumber} />)

 return  numbers.map( renderButton );
}

const Numbers = ({onClickNumber}) => (
  <section  className="numbers">
    {
      renderButtons(onClickNumber)
    }
  </section>);

//777 139 89 18

Numbers.propTypes={
  onClickNumber: PropTypes.func.isRequired
}

export default Numbers;
