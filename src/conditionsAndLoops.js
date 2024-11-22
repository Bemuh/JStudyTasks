// Condiciones en JavaScript:

/** Tarea: 1
 * El sistema recibe dos parámetros x e y.
 * Implementa la lógica donde z sea igual a la suma de x e y en caso de que y sea menor que 10
 * o la multiplicación en caso de que sea mayor o igual a 10.
 * El resultado se asigna a las variables z1 y z2 respectivamente.
 * Tarea A - if else - z1 : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else
 * Tarea B - operador ternario - z2: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
 */
function taskA(x, y) {
  let z1;
  // COLOCA TU CÓDIGO ENTRE ESTA LÍNEA:Ç

  // Y ESTA
  return z1;
}

function taskB(x, y) {
  let z2;
  // COLOCA TU CÓDIGO ENTRE ESTA LÍNEA:

  // Y ESTA
  return z2;
}

/** Tarea: 2
 * El sistema recibe 3 parámetros: operator, alpha, beta.
 * Operator puede tener 4 valores posibles: "add", "subtract", "multiply", "divide".
 * Implementa la lógica para que el sistema realice la operación adecuada basada en el parámetro operator.
 * Asigna el resultado a la variable task2.
 * Pista: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch
 */

function calc(operator, alpha, beta) {
  let task2;
  // COLOCA TU CÓDIGO ENTRE ESTA LÍNEA:

  // Y ESTA:
  return task2;
}

/**
 * Tarea: 3
 * Escribe la lógica para calcular la cantidad de descuento
 * considerando el monto 'ransom'.
 * Las reglas son las siguientes:
 * - 0    - 350:  0
 * - 351  - 1350: 15
 * - 1351 - 2700: 30
 * - 2701 - 6500: 45
 * Asigna el resultado a la variable 'discount'.
 */

function calculateDiscount(ransom) {
  let discount;
  // COLOCA TU CÓDIGO ENTRE ESTA LÍNEA:

  // Y ESTA:
  return discount;
}

// Bucles en JavaScript:

/** Tarea: 1
 * Implementa el algoritmo factorial utilizando operadores for, while, y do..while.
 * Asigna el resultado a la variable correspondiente.
 * for -> forFactorial: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for
 * while -> whileFactorial: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while
 * do..while -> doFactorial: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/do...while
 */
 let forFactorial, whileFactorial, doFactorial;
 const n = 10; // 10! = 3628800
 
 /** Tarea: 2
  * Devuelve la cadena concatenada de un array de subcadenas.
  * Asigna el resultado a la variable 'str'.
  * Pista: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
  */
 let str = '';
 const substr = ['I', ' love', ' JS'];

 /** Tarea: 3
  * Calcula el ingreso total de una persona.
  * Asigna el resultado a la variable 'totalIncome'.
  * Pista: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
  */
 let totalIncome = 0;


module.exports = {
  taskA,
  taskB,
  calc,
  calculateDiscount,
  forFactorial,
  whileFactorial,
  doFactorial,
  str,
  totalIncome,
};
