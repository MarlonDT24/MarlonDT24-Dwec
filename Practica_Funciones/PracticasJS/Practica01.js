const wordsPrompt = () => {
    const words = [];
    let inputUser;

    while (true) {
        inputUser = prompt('Introduza una palabra o dejelo vacio para terminar');
        if (inputUser.trim() === '' || inputUser === null) { //Si es vacio o le da a cancelar
            break;
        } else {
            words.push(inputUser.trim()); //Se agregan las palabras introducidas en el input en el Array eliminando los espacios
        }
    }
    return words;
}
const wordsRepeated = (arrayWords) => {
    let noRepeatedWords = Array.from(new Set(arrayWords));
    let orderWords = noRepeatedWords.sort((a, b) => b.localeCompare(a, "es")); //Ordenar de la Z a A
    return orderWords;
}

const words = wordsPrompt();
const resultado = document.getElementById("resultado");

if (words.length > 0) {
    const printWords = wordsRepeated(words);
    resultado.innerHTML = `<h2>Palabras procesadas:</h2><p>${printWords.join(", ")}</p>`;
} else {
    document.body.innerHTML = '<p>No se introdujeron palabras.</p>';
}