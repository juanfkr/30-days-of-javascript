/**
 * Função anônima que retorna uma closure.
 * createHelloWorld é uma high-order function (função de ordem maior) que 
 * serve como fábrica para funções com diferentes comportamentos, já que cada
 * chamada da função pode ter diferentes argumentos.
 * @return {Function}
 */
var createHelloWorld = function() { // <-- high-order function
    
    return function(...args) {      // <-- closure
        return "Hello World"
    }
};


const f = createHelloWorld();

console.log(f("testeee", "odksoakdos")); // "Hello World" 
console.log(f());                        // "Hello World" também