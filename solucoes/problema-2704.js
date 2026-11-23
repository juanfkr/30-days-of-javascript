/**
 * Link do Problema: https://leetcode.com/problems/to-be-or-not-to-be/?envType=study-plan-v2&envId=30-days-of-javascript
 * Resumo: Crie uma função anônima expect que ajuda desenvolvedores a testarem o código deles, essa função deve retornar dois objetos:
 * toBe(val): retorna true se val for igual ao val da high-order function. Do contrário lança um erro.
 * notToBe(val): retorna true se val for diferente do val da high-order function. Do contrário lança um erro.
 */

/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    let expected = val;

    return {
        toBe: (val) => {
            console.log(val === expected)
            if (val === expected) return true;

            throw new Error("Not Equal");
        },

        notToBe: (val) => {
            console.log(val !== expected)
            if (val !== expected) return true;

            throw new Error("Equal");
        }
    }
};

expect(5).toBe(5);    // true
expect(5).notToBe(5); // throws "Equal"