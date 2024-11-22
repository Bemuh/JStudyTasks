const {describe, it} = require('mocha');
const {expect} = require('chai');
const sinon = require('sinon');

const {
    sum,
    getFullName,
    isOdd,
    getShortest,
    getGoogle,
    getUser,
    getTotalPath,
    discountFunction,
    myObject
} = require('../src/functions');
const {evenValues, oddValues, fullNames, expectedKeys} = require('./data');

describe('sumar', () => {
    it('debería devolver 3 si se pasan 1 y 2', () => {
        expect(sum(1, 2)).to.equal(3);
    });

    it('debería devolver 1 si se pasan -1 y 2', () => {
        expect(sum(-1, 2)).to.equal(1);
    });

    it('debería devolver -3 si se pasan -1 y -2', () => {
        expect(sum(-1, -2)).to.equal(-3);
    });
});

describe('obtenerNombreCompleto', () => {
    fullNames.forEach(name => {
        const [firstName, lastName] = name.split(' ');

        it(`debería devolver "${name}" si se pasan "${firstName}" y "${lastName}"`, () => {
            expect(getFullName({firstName, lastName})).to.equal(name);
        });
    });
});

describe('esImpar', () => {
    evenValues.forEach(value => {
        it(`debería devolver false si se pasa ${value}`, () => {
            expect(isOdd(value)).to.equal(false);
        });
    });

    oddValues.forEach(value => {
        it(`debería devolver true si se pasa ${value}`, () => {
            expect(isOdd(value)).to.equal(true);
        });
    });
});

describe('obtenerMásCorta', () => {
    it('debería devolver "one" si se pasa ["one", "two", "three"]', () => {
        expect(getShortest(['one', 'three', 'four'])).to.equal('one');
    });

    it('debería devolver "x" si se pasa ["one", "two", "three", "x"]', () => {
        expect(getShortest(['one', 'two', 'three', 'x'])).to.equal('x');
    });
});

describe('obtenerGoogle', () => {
    it('debería devolver "goooooogle" si se pasa 6', () => {
        expect(getGoogle(6)).to.equal('goooooogle');
    });

    it('debería devolver "gooogle" si se pasa 3', () => {
        expect(getGoogle(3)).to.equal('gooogle');
    });
});

describe('obtenerUsuario', () => {
    it('debería devolver un objeto si se pasan "John", "Dou", 42', () => {
        const user = getUser('John', 'Dou', 42);
        expect(user.firstName).to.equal('John');
        expect(user.lastName).to.equal('Dou');
        expect(user.age).to.equal(42);
    });

    it('debería devolver propiedades null si no se pasan algunos parámetros', () => {
        const user = getUser('John');
        expect(user.firstName).to.equal('John');
        expect(user.lastName).to.equal(null);
        expect(user.age).to.equal(null);
    });
});

describe('obtenerRutaTotal', () => {
    it('debería devolver la distancia total para 3 segmentos', () => {
        const path = [
            {
                direction: 'Kiyv - Minsk',
                distance: 567,
            },
            {
                direction: 'Kiyv - Paris',
                distance: 2402,
            },
            {
                direction: 'Paris - London',
                distance: 466,
            },
        ];
        expect(getTotalPath(path)).to.equal(3435);
    });

    it('debería devolver la distancia total para 2 segmentos', () => {
        const path = [
            {
                direction: 'Kiyv - Minsk',
                distance: 567,
            },
            {
                direction: 'Kiyv - Paris',
                distance: 2402,
            },
        ];
        expect(getTotalPath(path)).to.equal(2969);
    });
});

describe('funciónDescuento', () => {
    it('debería devolver discount10', () => {
        const discount10 = discountFunction(10);
        expect(discount10(90)).to.equal(81);
    });

    it('debería devolver discount15', () => {
        const discount15 = discountFunction(15);
        expect(discount15(110)).to.equal(93.5);
    });

    it('debería devolver discount20', () => {
        const discount20 = discountFunction(20);
        expect(discount20(1000)).to.equal(800);
    });
});

describe('Métodos del objeto', () => {
    it('debería imprimir las claves del objeto', () => {
        const consoleLogSpy = sinon.spy(console, 'log');
        myObject.keys();
        consoleLogSpy.restore();
        const calls = consoleLogSpy.getCalls().map(call => call.args[0]);
        expect(expectedKeys).to.deep.equal(calls);
    });

    it('debería devolver la cadena proporcionada', () => {
        expect(myObject.call()).to.equal('My name is John Doe, and I am 25 years old. My best friend is Daniel');
    });

    it('debería devolver la cadena proporcionada con datos simulados', () => {
        const sandbox = sinon.createSandbox();
        sandbox.stub(myObject, 'name').value('Brendan');
        sandbox.stub(myObject, 'lastName').value('Eich');
        sandbox.stub(myObject, 'age').value(61);
        sandbox.stub(myObject, 'friends').value(['', '', 'Elon']);

        expect(myObject.call()).to.equal('My name is Brendan Eich, and I am 61 years old. My best friend is Elon');
        sandbox.restore();
    });
});
