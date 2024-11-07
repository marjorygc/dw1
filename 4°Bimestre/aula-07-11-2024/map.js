

function Samara(elemento){
    return elemento * 2
}

function marjory(elemento){
    return elemento / 2
}

function bruno(elemento){
    return elemento -1
}

function map(vetor,funcao){
    let novoVetor = []
    for(elemento of vetor){
        novoVetor.push(funcao(elemento))
    }
}

// v1 = vetor, vale pros dois lados, não é atribuição, mas sim uma referência
// let v1 = vetor
// v1[0] = 90

let vetor = [10, 20, 30]

let v1 = map(vetor, Samara)
let v2 = map(vetor, bruno)
let v3 = map(vetor, marjory)

let v4 = vetor.map(Samara)
let v5 = vetor.map(bruno)
let v6 = vetor.map(marjory)

// criando uma função dentro do map
let v7 = vetor.map( elemento => elemento + 1)

console.log(vetor)
console.log(v1)
console.log(v2)
console.log(v3)
console.log(v4)
console.log(v5)
console.log(v6)