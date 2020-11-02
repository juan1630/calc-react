import React from 'react';
import PropTypes from 'prop-types';
import Button from './button';

const MathOperations = ({onclickOperation, onClickEqual}) => (
  <section  className="mathOperations" >
      <Button text="+" clickHandler={onclickOperation} />
      <Button text="-" clickHandler={onclickOperation}/>
      <Button text="*" clickHandler={onclickOperation}/>
      <Button text="/" clickHandler={onclickOperation}/>
      <Button text="=" clickHandler={onClickEqual}/>
  </section>
)

MathOperations.propTypes = {
  onclickOperation:PropTypes.func.isRequired,
  onClickEqual: PropTypes.func.isRequired
}

export default MathOperations;
