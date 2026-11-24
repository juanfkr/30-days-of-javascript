/**
 * Link do problema: https://leetcode.com/problems/function-composition/description/?envType=study-plan-v2&envId=30-days-of-javascript
 * Resumo: dado um array de funções 'functions', retorne uma  nova função 'fn' 
 * que é a função de composição do array de funções
 */

/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    return function(x) {
        let acc = x;
        // Semelhante ao comportamento do reduce: cada chamada alimenta o argumento da próxima
        for (let i = functions.length - 1; i >= 0; i--) {
            acc = functions[i](acc);
        }

        return acc;
    }
};


const fn = compose([x => x + 1, x => 2 * x])
const teste = fn(4) // 9

console.log(teste);