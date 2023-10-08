function cesarCode(str, num) {
    const arrStr = str.split("");

    let newArrStr = arrStr.map((letter) => {
        return letter.charCodeAt(0) - num;
    });

    const result = newArrStr.map((char) => {
        return String.fromCharCode(char);
    });

    return result.join("");
}

console.log(cesarCode("Vguvg", 2)); // Teste
console.log(cesarCode("Qaiik", 60)); // Isaac
console.log(cesarCode("Amozmlw", 8)); // Segredo
