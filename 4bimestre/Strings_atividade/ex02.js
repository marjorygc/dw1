// Crie uma função countVowels(str) que conte o número de vogais (a, e, i, o, u) em uma string e retorne esse valor.

// function countVowels_v2(str){
//     let cont_vogais = 0  
//     for(let i = 0; i < str.length; i++){
//         let cont = str.toLowerCase()[i]
//         if( cont == 'a' || cont == 'e' || cont == 'i' || cont == 'o' || cont == 'u'){
//             cont_vogais += 1
//         }
//     }
//     return cont_vogais
// }

// O includes funciona ao contrário, é a mesma coisa de perguntar se uma coisa está inclusa em outra
// vogais.includes(letra)
// "aeiouáàãâó".includes("a")
// "a".includes("aeiouáàãâó")


function countVowels(str){
    let cont_vogais = 0
    // const significa constante, é melhor do que declarar como variável
    const vogais = "aeiouáàãâéêíóõôòú"
    let palavraMinuscula = str.toLowerCase()

    for(let i = 0; i < palavraMinuscula.length; i++){
        let letra = palavraMinuscula[i]
        if (vogais.includes(letra)) {
            cont_vogais++
        }
       
    }
    return cont_vogais
}

console.log(countVowels("OpenAI")); // Deve exibir: 4
console.log(countVowels("Criação")); // Deve exibir: 4
console.log(countVowels("órgão")); // Deve exibir: 3





