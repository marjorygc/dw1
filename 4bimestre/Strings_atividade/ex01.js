// Crie uma função reverseString(str) que receba uma string como parâmetro e retorne a string invertida.

function reverseString(str){
    let new_str = ""
    let cont = str.length -1
    for(let i = cont; i >= 0 ; i--){
        new_str += str[i]
    }
    return new_str
}

console.log(reverseString("javascript")); // Deve exibir: "tpircsavaj"
console.log(reverseString("hello")); // Deve exibir: "olleh"
