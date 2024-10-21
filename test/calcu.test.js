
const { sum, multi, isUpperCase } = require("../app")

// import { sum } from "../app.js"


test('adds 5 + 2 to equal 7', () => {
    expect(sum(1, 2)).toBe(3);
})

test('adds 5 + 2 to equal 7', () => {
    expect(sum("hola",1, 2)).toBe(3);
})

test("multi 5 * 5 to equal 25", () => {
    expect(multi(5, 5)).toBe(25)
})




describe("Validación de la función isUpperCase", () => {

    test('The string HELLO should return true', () => {
        const result = isUpperCase('HELLO');
        expect(result).toBe(true);
    })


    // Segunda prueba posible

    test('Testing for Hello (mixed)', () => {

        const result = isUpperCase('Hello');

        expect(result).toBe(false);

    })

    // Tercera prueba posible

    test('Testing for hello (lower)', () => {

        const result = isUpperCase('hello');

        expect(result).toBe(false);

    })

    // Cuarta prueba posible

    test('Boolean should return false', () => {

        const result = isUpperCase(true);

        expect(result).toBe(false);

    })

    // Quinta prueba posible

    test('Number should return false', () => {

        const result = isUpperCase(12341234);

        expect(result).toBe(false);

    })
})