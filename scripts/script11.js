function parOrdenado(par) {
    const [x, y] = par;
    const resultado = [];

    for (let i = 0; i <= x; i++) {
        for (let j = 0; j <= y; j++) {
            const pushPar = [i, j];
            resultado.push(pushPar);
        }
    }
    return resultado;
}

console.log(parOrdenado([2, 2]));
console.log(parOrdenado([2, 7]));
console.log(parOrdenado([-3, -3]));
