arr = ["Mia", "Holly", true, 10];

function reverse(arr) {
    const tempArr = [];
    for (let item of arr) tempArr.unshift(item);
    return tempArr;
}

function reverse2(arr) {
    newArr = [];
    arr.forEach((item) => {
        newArr.unshift(item);
    });
    return newArr;
}

console.log(reverse2(arr));
