function fatorial(n) {
    const num = BigInt(n);
    let result = 1n;

    if (num > 0n) {
        result = num * fatorial(num - 1n);
    }

    return result;
}

console.log(fatorial(4)); // 24n
console.log(fatorial(0)); // 1n
console.log(fatorial(30)); // 265252859812191058636308480000000n
console.log(fatorial(12)); // 479001600n

/* 
aprendizados durante o desafio:
Bigint() Eu nem sabia que existia
 */
