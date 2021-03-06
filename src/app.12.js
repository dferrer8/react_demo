/* global ReactDOM */

console.log('Aplicación en ejecución')

let count = 0
const addOne = () => {
  console.log('addOne')
}

const template = (
  <div>
    <h1>Count: {count}</h1>
    <button onClick={addOne}>+1</button>
    <button onClick={minusOne}>-1</button>
    <button onClick={reset}>reset</button>
  </div>
)

const appRoot = document.getElementById('app')

ReactDOM.render(template, appRoot)