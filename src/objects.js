/**
 * Objetos en JS: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
 * Crea un objeto person con las propiedades firstName y lastName.
 * Implementa el método getFullName que devuelve el nombre completo.
 */
const person = {

}; // coloca tu objeto aquí

/**
 * Crea un objeto student que tenga la propiedad grade y el método getGrade.
 * Configura person como prototipo de student.
 */
const student = {

}; // coloca tu objeto aquí
Object.setPrototypeOf(student, person);

/**
 * Crea una nueva instancia de student usando Object.create.
 */
const student2 = value; // coloca tu objeto aquí

module.exports = {
  person,
  student,
  student2,
};
