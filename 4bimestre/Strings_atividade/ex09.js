// Escreva uma função replaceChar(str, oldChar, newChar) que substitua todas as ocorrências de um caractere específico em uma string por outro caractere.

function replaceChar(str, oldChar, newChar){
    for(i = 0; i < str.length; i++){
        let new_str = str.replace(oldChar, newChar)
    }
    return new_str
}

console.log(replaceChar("hello world", "l", "z")); // Deve exibir: "hezzo worzd"
console.log(replaceChar("banana", "a", "o")); // Deve exibir: "bonono"
