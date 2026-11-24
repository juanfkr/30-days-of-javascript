/**
 * Link do problema: https://leetcode.com/problems/filter-elements-from-array/description/?envType=study-plan-v2&envId=30-days-of-javascript
 * Resumo: Dado um array de inteiros 'arr' e uma função 'fn', retorne um array filtrado 'filteredArr'
 */

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    let filteredArr = [];
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if(fn(arr[i], i)) {
            filteredArr[count] = arr[i];
            count++; // contador auxiliar para inserir nas posições corretas
            filteredArr.push()
        }
    }

    return filteredArr;
};

const newArray = filter([0, 10, 20, 30], (n) => n > 10)

console.log(newArray)