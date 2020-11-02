import React from 'react';
import PropTypes from 'prop-types';

import './Button.css';

// componete

const Button = ({type, text, clickHandler}) => (<button className={type}
  onClick={ ()=> clickHandler(text) }>
  <span>{ text }</span>
  </button>);
// de esta forma asociamos el evento click y disparamos el evento

// objeto de la validacion
Button.propTypes = {
    type: PropTypes.string,
    text:PropTypes.string.isRequired,
    clickHandler: PropTypes.func.isRequired
}

export default Button;
