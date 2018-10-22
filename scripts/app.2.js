/*  global ReactDOM */
/* console.log('Aplicación en ejecución') */
/*
var template = <p>¡Hola Mundo!</p>
var appRoot = document.getElementById('app')
ReactDOM.render(template, appRoot) */

'use strict'

/* global ReactDOM */
console.log('Aplicación en ejecución')

var template = React.createElement(
  'p',
  null,
  '\xA1Hola Mundo!'
)
var appRoot = document.getElementById('app')
ReactDOM.render(template, appRoot)
