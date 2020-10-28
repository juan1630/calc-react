import React from 'react';
import ReactDOM from 'react-dom';
// estas dos librerias se complementan react dom hace que funcione en el navegador

// cuando es un archivo de forma local se pone de la siguiente manera
import App from './App'
// importamos el componente que vamos a estar usando en esta pagina

ReactDOM.render( <App/> , document.getElementById('root'));
//  este metodo renderiza la aplicacion
// para ello le pasamos el putno de acceso de la aplicacion
