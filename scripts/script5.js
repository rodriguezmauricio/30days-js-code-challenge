console.warn("Find Bigger Letter");

function findBigger(str) {
    const lower = str.replace(/[^\w]/g, "").toLowerCase().split("").sort();
    return lower[lower.length - 1];
}

console.log(findBigger("Lorem ipsum avanti"));
console.log(findBigger("Hello"));
console.log(findBigger("May the force be with you"));
console.log(findBigger("It's over nine thousand"));
