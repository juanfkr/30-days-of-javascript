/**
 * Link do problema: https://leetcode.com/problems/sleep/?envType=study-plan-v2&envId=30-days-of-javascript
 * Resumo: Dado um inteiro positivo 'millis', escreva uma função assíncrona que hiberna por 'millis' segundos.
 */

/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
    return new Promise(resolve => setTimeout(resolve, millis)); // resolve a promise depois de 'millis'ms.
                                                                // nenhum argumento é passado para o resolve, então devolve undefined
                                                                // na próxima chamada de .then(), apenas servindo para cumprir a promise
}


let t = Date.now()
sleep(100).then(() => console.log(Date.now() - t)) // 100
