/**
 * Link do problema: https://leetcode.com/problems/apply-transform-over-each-element-in-array/?envType=study-plan-v2&envId=30-days-of-javascript
 * Resumo: Dado uma array de inteiros 'arr' e uma função 'fn', 
 * retorne um novo array com uma transformação aplicada para cada elemento
 */

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    let returnedArray = [];

    // Pra cada elemento na posição da array original -> guarde na nova array na mesma posição 
    // o valor do mesmo elemento transformado e retornado pela função fn
    for (let i = 0; i < arr.length; i++) {
        returnedArray[i] = fn(arr[i], i);
    }

    // retorna array transformado
    return returnedArray;
};

const newArray = map([1, 2, 3], (n) => n+1); // callback só passa 1 argumento (referente ao arr), o segundo é "opcional".
console.log(newArray);