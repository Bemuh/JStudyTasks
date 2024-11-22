const { describe, it } = require('mocha');
const { expect } = require('chai');

const { person, student, student2 } = require('../src/objects.js');

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

  it('debería tener persona como prototipo', () => {
    const prototype = Object.getPrototypeOf(student);
    expect(prototype, `el objeto "persona" no es prototipo de "estudiante"`).to.equal(person);
  });
});

describe('estudiante2', () => {
  it('debería tener la propiedad grade', () => {
    expect(student2).to.have.property('grade');
  });

  it('debería tener el método getGrade', () => {
    expect(student2.getGrade()).to.equal(student2.grade);
  });
});
