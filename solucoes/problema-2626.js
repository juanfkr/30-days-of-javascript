/**
 * Link do problema: https://leetcode.com/problems/array-reduce-transformation/description/?envType=study-plan-v2&envId=30-days-of-javascript
 * Resumo: Dado um array de inteiro 'nums', uma função 'fn' e um valor inicial 'init',
 * retorne o resultado final obtido ao executar a função 'fn' para cada elemento da array 'arr'
 */

/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    let val = init;

    for (let i = 0; i < nums.length; i++) {
        val = fn(val, nums[i]); // o retorno da chamada atual serve de valor para a próxima chamada
    }

    return val;
};

nums = [1, 2, 3, 4];

let acc = reduce(nums, (acc, curr) => acc + curr, 0);

console.log(acc)