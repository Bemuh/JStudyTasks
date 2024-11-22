const { expect } = require('chai');

const { taskA, taskB, calc, calculateDiscount, forFactorial, whileFactorial, doFactorial, str, totalIncome } = require('../src/conditionsAndLoops');

describe('Conjunto de Pruebas para Condiciones', () => {
  describe('Tarea 1 - y < 10', () => {
    it('z1 debería ser igual al valor esperado', () => {
      expect(taskA(3, 7), 'x = 3; y = 7 → 3 + 7 debería ser igual a 10').to.equal(10);
      expect(taskA(8, 15), 'x = 8; y = 15 → 8 * 15 debería ser igual a 120').to.equal(120);
      expect(taskA(20, 10), 'x = 20; y = 10 → 20 * 10 debería ser igual a 200').to.equal(200);
    });
  
    it('z2 debería ser igual al valor esperado', () => {
      expect(taskB(3, 7), 'x = 3; y = 7 → 3 + 7 debería ser igual a 10').to.equal(10);
      expect(taskB(8, 15), 'x = 8; y = 15 → 8 * 15 debería ser igual a 120').to.equal(120);
      expect(taskB(20, 10), 'x = 20; y = 10 → 20 * 10 debería ser igual a 200').to.equal(200);
    });
  });
  
  describe('Tarea 2 - Calculadora', () => {
    it('task2 debería ser igual al valor esperado', () => {
      expect(calc('add', 6, 2), '6 + 2 debería ser igual a 8').to.equal(8);
      expect(calc('subtract', 5, 3), '5 - 3 debería ser igual a 2').to.equal(2);
      expect(calc('multiply', 3, 2), '3 * 2 debería ser igual a 6').to.equal(6);
      expect(calc('divide', 4, 2), '4 / 2 debería ser igual a 2').to.equal(2);
    });
  });
  
  describe('Tarea 3 - Descuento', () => {
    it('El descuento debería ser igual al valor esperado', () => {
      expect(calculateDiscount(10), 'Un monto de 10 debería producir un descuento del 0%').to.equal(0);
      expect(calculateDiscount(350), 'Un monto de 350 debería producir un descuento del 0%').to.equal(0);
      expect(calculateDiscount(351), 'Un monto de 351 debería producir un descuento del 15%').to.equal(15);
      expect(calculateDiscount(400), 'Un monto de 400 debería producir un descuento del 15%').to.equal(15);
      expect(calculateDiscount(1350), 'Un monto de 1350 debería producir un descuento del 15%').to.equal(15);
      expect(calculateDiscount(1351), 'Un monto de 1351 debería producir un descuento del 30%').to.equal(30);
      expect(calculateDiscount(2000), 'Un monto de 2000 debería producir un descuento del 30%').to.equal(30);
      expect(calculateDiscount(2700), 'Un monto de 2700 debería producir un descuento del 30%').to.equal(30);
      expect(calculateDiscount(2701), 'Un monto de 2701 debería producir un descuento del 45%').to.equal(45);
      expect(calculateDiscount(6000), 'Un monto de 6000 debería producir un descuento del 45%').to.equal(45);
    });
  });
});

describe('Conjunto de Pruebas para Bucles', () => {
  describe('Tarea 1', () => {
    it('Factorial usando for', () => {
      expect(forFactorial).to.equal(3628800);
    });
  
    it('Factorial usando while', () => {
      expect(whileFactorial).to.equal(3628800);
    });
  
    it('Factorial usando do-while', () => {
      expect(doFactorial).to.equal(3628800);
    });
  });
  
  describe('Tarea 2', () => {
    it('Concatenación de cadena', () => {
      expect(str).to.equal('I love JS');
    });
  });
  
  describe('Tarea 3', () => {
    it('Ingreso total', () => {
      expect(totalIncome).to.equal(1335);
    });
  });
});
