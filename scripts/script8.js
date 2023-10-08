function abreviacoes(str) {
    const arrStr = str.split(" ");
    let result = "";
    for (let name of arrStr) {
        if (name !== arrStr[arrStr.length - 1]) {
            result += ` ${name[0].toUpperCase()}.`;
        } else {
            result = `${name.toUpperCase()}, ` + result;
        }
    }
    return result;
}

console.log(abreviacoes("John Ronald Reuel Tolkien")); // retorna TOLKIEN, JRR
console.log(abreviacoes("Suzanne Marie Collins")); // retorna TOLKIEN, JRR
console.log(abreviacoes("Maurício Alves Rodriguez")); // retorna TOLKIEN, JRR

//SOLUÇÃO 1
// function abreviacoes(str) {
//     const arrStr = str.split(" ");
//     let abreviado = "";
//     abreviado = `${arrStr[arrStr.length - 1].toUpperCase()},`;
//     for (let item of arrStr) {
//         if (item === arrStr[arrStr.length - 1]) {
//             continue;
//         }
//         abreviado += ` ${item[0].toUpperCase()}.`;
//     }
//     return abreviado;
// }

//SOLUÇÃO 2
// function abreviacoes(str) {
//     const arrStr = str.split(" ");
//     const lastName = arrStr.pop().toUpperCase();
//     let result = `${lastName}, `;
//     for (let name of arrStr) {
//         result += ` ${name.slice(0, 1).toUpperCase()}.`;
//     }
//     return result;
// }

//SOLUÇÃO 3
// function abreviacoes(str) {
//     const arrStr = str.split(" ");
//     let result = "";
//     for (let name of arrStr) {
//         if (name !== arrStr[arrStr.length - 1]) {
//             result += ` ${name[0].toUpperCase()}.`;
//         } else {
//             result = `${name.toUpperCase()}, ` + result;
//         }
//     }
//     return result;
// }
