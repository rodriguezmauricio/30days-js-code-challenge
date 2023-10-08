console.warn("Quadratica");
function quadratica(num) {
    const splittedNumbers = num.toString().split("");
    const mappedNums = splittedNumbers.map((n) => (Number(n) ** 2).toString());
    return Number(mappedNums.join(""));
}

console.log(quadratica(3541));
console.log(quadratica(994571));
console.log(quadratica(24));
console.log(quadratica(745821698));

/* 
recebe o número
converte em string
separa o número em algarismos
transforma em número
eleva cada número ao quadrado
transforma em string
concatena
 */
