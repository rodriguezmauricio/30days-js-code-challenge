function invertLetter(str) {
    let result = "";
    //converte para letras minúsculas e transforma em array
    const arrStr = str.toLowerCase().split(" ");

    for (let word of arrStr) {
        //pega cada palavra, transofrma em array, inverte a ordem e junta. Concatena em result
        result += `${word.split("").reverse().join("")}`;
    }
    return result;
}

console.log(invertLetter("This is an apple"));
console.log(invertLetter("May the force be with you"));
