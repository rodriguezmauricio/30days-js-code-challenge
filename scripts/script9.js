function verificar(str) {
    const arrStr = str.split("");
    const charMap = {};

    for (let char of arrStr) {
        if (char === " ") {
            continue;
        }

        charMap[char] ? charMap[char]++ : (charMap[char] = 1);

        // if (!charMap[char]) {
        //     charMap[char] = 1;
        // } else {
        //     charMap[char]++;
        // }
    }

    const arrObj = Object.values(charMap);

    return arrObj.every((value) => {
        return value === arrObj[0];
    });
}

console.log(verificar("This is Thee"));
console.log(verificar("ssd"));
console.log(verificar("Lorem ipsum"));
console.log(verificar("QQwweerrttyy"));

/* 
Aprendizados durante esse desafio:

descobri que o Object.values() retorna um array com valor das propriedades
utilizei o método every() pela primeira vez. Ele retorna true ou false dependendo do resultado do filtro

 */
