// Sintaxe mais curta, funciona para funções simples, de uma linha

const saudacaoPadrao = () => console.log(`Olá`)
const saudacao = nome => console.log(`Olá ${nome}`)

const soma = (a,b) => a+b

const expoente = (a,b) => Math.pow(a,b)


saudacaoPadrao()
saudacao("João")
console.log(soma(2,3))
console.log(expoente(2,3))



const numeros = [10,15,20]
const copia2 = numeros.map(function(elemento){
    return elemento*2
}) 

const numerosString = numeros.map(elemento => "numero" + elemento)

console.log(numeros)
console.log(numerosString) // ["numero 10", "numero 15", "numero 20"]