/**
 * Link do Problema: https://leetcode.com/problems/counter/?envType=study-plan-v2&envId=30-days-of-javascript
 * Resumo: Dado um inteiro n, retorne uma função counter que inicialmente retorna n, depois n+1 e assim em diante.
 */

/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    return () => {
        console.log(n);
        n++;
    };
};

 
const counter = createCounter(10)
counter();
counter();
counter();
