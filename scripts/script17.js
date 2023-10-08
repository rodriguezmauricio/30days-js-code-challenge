function relatorio(phrase, word, arr) {
  let result = [];

  if (arr.length === 0) return phrase;

  for (let i = 0; i < phrase.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i === arr[j]) result.push(word);
    }
    result.push(phrase[i]);
  }

  return result.join("");
}
console.log(relatorio("salada de frutas da donzela", ",", [6, 9, 16]));
console.log(relatorio("salada de frutas da donzela", "peroca", []));
