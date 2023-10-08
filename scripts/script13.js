function verificador(num) {
    const passo1 = somaPar(num); // soma os números na posição par
    const passo2 = passo1 * 3; //multiplica o passo 1 por 3
    const passo3 = passo2 + somaImpar(num); // soma os dígitos na posição ímpar com o passo 2
    const passo4 = passo3 % 10; //encontra o resto da divisão por 10

    // se o resultado for 0 retorna true, se não, retorna false
    if (passo4 === 0) {
        return true;
    } else {
        return false;
    }
}

function somaPar(num) {
    const numArr = num.toString().split("");
    let soma = 0;

    for (let i = 0; i < numArr.length; i = i + 2) {
        soma += Number(numArr[i]);
    }
    return soma;
}

function somaImpar(num) {
    const numArr = num.toString().split("");
    let soma = 0;

    for (let i = 1; i < numArr.length; i = i + 2) {
        soma += Number(numArr[i]);
    }
    return soma;
}

console.log(verificador(547020743789)); // saída = true
console.log(verificador(301354030348)); // saída = true
console.log(verificador(301354030349)); // saída = false
console.log(verificador(123456789872)); // saída = false
