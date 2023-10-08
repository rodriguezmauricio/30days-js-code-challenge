arr = [
    [1, 5, 3],
    [6, 19, 11],
    [47, 128, 5],
];

//solução curta e elegante
function orderArray(arr) {
    return arr.flat().sort((a, b) => a - b);
}

/*
//solução so jeito básico ES6
function orderArray(arr) {
    const newArr = [];

    for (let i of arr) {
        for (let j of i) {
            newArr.push(j);
        }
    }

    return newArr.sort((a, b) => {
        return a - b;
    });
}
*/

//solução com arrays helpers ES6
// function orderArray(arr) {
//     const newArr = [];
//     arr.forEach((ar) => {
//         return ar.map((n) => {
//             return newArr.push(n);
//         });
//     });
//     return newArr.sort((a, b) => a - b);
// }

console.log(orderArray(arr));

/* 
loop pra entrar no arr maior
loop pra jogar cada numero dentro de um novo array
sort pra ordenar os números
retorna o novo array
 */
