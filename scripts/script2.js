function chunk(n) {
    let total = "chunk";
    if (n === 1) {
        total = "chunk";
    } else if (n > 1) {
        total += "-" + chunk(n - 1);
    } else {
        return;
    }

    return total;
}

console.log(chunk(3));
