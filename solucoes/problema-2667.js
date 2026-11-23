/**
 * Link do Problema: https://leetcode.com/problems/create-hello-world-function/description/?envType=study-plan-v2&envId=30-days-of-javascript
 * Resumo: crie uma função createHelloWorld que retorna uma função com seu valor sendo sempre "Hello World"
 */

/**
 * Função anônima que retorna outra função.
 * createHelloWorld é uma high-order function (função de ordem maior) que 
 * serve como fábrica para funções com diferentes comportamentos, já que cada
 * chamada da função pode ter diferentes argumentos.
 * @return {Function}
 */
var createHelloWorld = function() { // <-- high-order function
    return (...args) => "Hello World" 
};

const f = createHelloWorld();

console.log(f("testeee", "odksoakdos")); // "Hello World" 
console.log(f());                        // "Hello World" também