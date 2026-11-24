/**
 * Link do problema: https://leetcode.com/problems/allow-one-function-call/description/?envType=study-plan-v2&envId=30-days-of-javascript
 * Resumo: Dado uma função fn, retorne uma nova função identica a original exceto que fn só seja chamado uma única vez.
 */

/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    let called = false;

    return function(...args){
        if (called) return undefined;
        called = true;
        return fn(...args);
    }
};


let onceFn = once((a, b, c) => a + b + c);

console.log(onceFn(1,2,3)); // 6
console.log(onceFn(2,3,6)); // returns undefined without calling fn

