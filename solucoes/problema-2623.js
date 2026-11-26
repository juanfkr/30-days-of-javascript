/**
 * Link do problema:
 * Resumo: Dado uma função 'fn', retorne uma versão 'memoizada' dessa função.
 * Uma função 'memoizada' é uma função que nunca é chamada duas vezes com a mesma entrada. 
 * Ao invés disso, é retornado um valor em cache.
 */

/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    const cache = {}; // objeto para armazenar cache

    return function(...args) {
        const key = JSON.stringify(args); // converte argumentos para JSON

        if (key in cache) return cache[key]; // procura argumentos em cache. Se houver, retorna

        const result = fn(...args); 

        cache[key] = result;

        return result;
    };
}
 
let callCount = 0;
const memoizedFn = memoize(function (a, b) {
    callCount += 1;
  return a + b;
})
memoizedFn(2, 3) // 5
memoizedFn(2, 3) // 5
console.log(callCount) // 1 
