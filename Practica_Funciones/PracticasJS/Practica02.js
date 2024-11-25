const wordsPrompt = () => {
    const words = [];
    let inputUser;

    while (true) {
        inputUser = prompt('Introduza una palabra o dejelo vacio para terminar');
        if (inputUser.trim() === "" || inputUser === null) { //Si es vacio o le da a cancelar
            break;
        } else {
            words.push(inputUser.trim()); //Se agregan las palabras introducidas en el input en el Array eliminando los espacios
        }
    }
    return words;
}
const wordsCount = (words) => {
    let wordsMap = new Map();
    words.forEach((word) => {
        wordsMap.set(word, (wordsMap.get(word) || 0) + 1);
    });
    return wordsMap;
}

const words = wordsPrompt();
const resultado = document.getElementById("resultado");

if (words.length > 0) {
    const count = wordsCount(words);
    let resultadoHTML = '<h2>Conteo de palabras:</h2><ul>';
    count.forEach((valor, clave) => {
        resultadoHTML += `<li>${clave}: ${valor}</li>`;
        });
    resultadoHTML += "</ul>";
    resultado.innerHTML = resultadoHTML;
} else {
    resultado.innerHTML = `<p>No se introdujeron palabras.</p>`;
}