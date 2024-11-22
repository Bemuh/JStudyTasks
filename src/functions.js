/**
 * Materiales de aprendizaje:
 * Declaración de funciones: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function
 * Expresión de funciones: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function
 * Funciones flecha: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
 */

/**
 * Escribe una función que sume dos números.
 * @example
 * console.log(sum(1, 3)) // 4
 * console.log(sum(-1, 1)) // 0
 */
function sum(a, b) {
    
}

/**
 * Escribe una función que devuelva firstName y lastName de un objeto dado que contiene firstName y lastName.
 * @example
 * const person = {
 *    firstName: "John",
 *    lastName: "Dou"
 * }
 * console.log(getFullName(person)) // John Dou
 */
function getFullName(object) {

}

/**
 * Escribe una función que verifique si un número es impar.
 * Devuelve true si es impar, false si es par.
 * @example
 * console.log(isOdd(2)) // false
 * console.log(isOdd(3)) // true
 * Pista: intenta usar el operador Remainder: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder
 */
function isOdd(n) {

}

/**
 * Escribe una función que devuelva la palabra más corta del array dado.
 * @example
 * console.log(getShortest(["one", "three", "four"])) // one
 */
function getShortest(wordArray) {

}

/**
 * Escribe una función que devuelva la palabra "google" con el número dado de símbolos "o".
 * @example
 * console.log(getGoogle(5)) // gooooogle
 */
function getGoogle(n) {

}

/**
 * Escribe una función que devuelva un objeto basado en la información dada.
 * (Los parámetros pueden ser nulos, así que, por favor, usa valores predeterminados).
 * @example
 * getUser("John", "Dou", 42) debería devolver:
 * {
 *    firstName: "John",
 *    lastName: "Dou",
 *    age: 42
 * }
 */
function getUser(firstName, lastName, age) {

}


/**
 * Escribe una función que calcule la distancia total recorrida.
 * El recorrido está representado como un array de objetos con los campos distance y direction.
 * Ejemplo: [{direction: "Kiyv - Minsk", distance: 567}, {direction: "Kiyv - Paris", distance: 2402}]
 * @example
 * const travel = [{direction: "Kiyv - Minsk", distance: 567}, {direction: "Kiyv - Paris", distance: 2402}];
 * console.log(getTotalPath(travel)) // 2969
 */

function getTotalPath(path) {

}

/**
 * Escribe una función que calcule un precio final considerando la cantidad
 * reducida por un porcentaje de descuento (pista: necesitas usar un Closure aquí).
 * Closures en JS: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
 * @example
 * const discount10 = discountFunction(10);
 * console.log(discount10(90)); // 81
 * console.log(discount10(100)); // 90
 */

function discountFunction(percentage) {

}

/**
 * Escribe los métodos dentro del objeto dado que:
 * 1. Imprima las claves del objeto en consola (usa el ciclo for..in).
 * 2. Devuelva la cadena 'My name is John Doe, and I am 25 years old. My best friend is Daniel',
 * refiriéndose a los datos almacenados en el objeto. La cadena debe construirse usando las propiedades del objeto.
 */

const myObject = {

};

module.exports = {
    sum,
    getFullName,
    isOdd,
    getShortest,
    getGoogle,
    getUser,
    getTotalPath,
    discountFunction,
    myObject,
};
