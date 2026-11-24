/**
 * Link do problema: https://leetcode.com/problems/return-length-of-arguments-passed/?envType=study-plan-v2&envId=30-days-of-javascript
 * Resumo: Escreva uma função 'argumentsLength' que retorna o número de argumentos passados para a função
 */

/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
var argumentsLength = function(...args) { // <-- '...args' é a sintaxe de rest parameter: um parametro especial
                                          // do tipo array que captura todos os argumentos da sua posição 
                                          // até a posição final dos parametros
    return args.length;
};

/**
 * argumentsLength(1, 2, 3); // 3
 */

console.log(argumentsLength(1, 2, 3))