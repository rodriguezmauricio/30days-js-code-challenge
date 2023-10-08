// function conversorRomano(alg) {
//     return;
// }

// console.log(conversorRomano("XLVII")); // 47
// console.log(conversorRomano("CDXXXVIII")); // 438
// console.log(conversorRomano("CMIX")); // 909
// console.log(conversorRomano("MMMCMXCIX")); // 3999

const entry = "xlvii";
const numeralsArray = entry.toUpperCase().split("");

const romanDecimalMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
};

const decimalArray = numeralsArray.map((num) => romanDecimalMap[num]);
const sumArray = decimalArray.reduceRight((accum, curr, index, arr) => {
    if (curr < arr[index + 1]) {
        return accum - curr;
    } else {
        return accum + curr;
    }
});

console.log(sumArray);
