/**
 * Link do Problema: https://leetcode.com/problems/counter-ii/description/?envType=study-plan-v2&envId=30-days-of-javascript
 * Resumo: Escreva uma função anônima createCounter que recebe um inteiro inicial 'init' e retorna um objeto com três funções:
 * increment() incrementa o valor em 1 e retorna ele
 * decrement() decrementa o valor em 1 e retorna ele
 * reset() volta o valor para o seu valor original
 */

/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let val = init;

    return {
        increment: () => {
            val++;
            console.log(val);
            return val;
        },

        decrement: () => {
            val--;
            console.log(val);
            return val;
        },

        reset: () => {
            val = init;
            console.log(val);
            return val;
        }
    }
};


const counter = createCounter(5)
counter.increment(); // 6
counter.reset(); // 5
counter.decrement(); // 4
