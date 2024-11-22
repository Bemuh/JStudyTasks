const { describe, it } = require('mocha');
const { expect } = require('chai');

const { person, student } = require('../src/classes.js');

describe('persona', () => {
  it('debería tener la propiedad firstName', () => {
    expect(person).to.have.property('firstName');
  });

  it('debería tener la propiedad lastName', () => {
    expect(person).to.have.property('lastName');
  });

  it('debería tener el método getFullName', () => {
    expect(person.getFullName()).to.equal(`${person.firstName} ${person.lastName}`);
  });

  it('instancia creada correctamente', () => {
    expect(person.firstName, "firstName no se asignó a Person").not.to.equal(undefined);
    expect(person.lastName, "lastName no se asignó a Person").not.to.equal(undefined);
  });
});

describe('estudiante', () => {
  it('debería tener la propiedad firstName', () => {
    expect(student).to.have.property('firstName');
  });

  it('debería tener la propiedad lastName', () => {
    expect(student).to.have.property('lastName');
  });

  it('debería tener la propiedad grade', () => {
    expect(student).to.have.property('grade');
  });

  it('debería tener el método getGrade', () => {
    expect(student.getGrade()).to.equal(student.grade);
  });

  it('debería tener el método getFullName', () => {
    expect(student.getFullName()).to.equal(`${student.firstName} ${student.lastName}`);
  });

  it('instancia creada correctamente', () => {
    expect(student.firstName, "firstName no se asignó a Student").not.to.equal(undefined);
    expect(student.lastName, "lastName no se asignó a Student").not.to.equal(undefined);
    expect(student.grade, "grade no se asignó a Student").not.to.equal(undefined);
  });
});
