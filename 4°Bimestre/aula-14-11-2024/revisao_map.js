const numeros = [10,15,20,25,30,35]

// const copia = []
// for (numero of numeros){
//     copia.push(numero*2)
// }

// console.log(copia)

function multiplica2(elemento){
    return elemento*2
}
const copia = numeros.map(multiplica2)

const copia2 = numeros.map( function (elemento){
    return elemento*2
}
)

const copia3 = numeros.map( function (elemento){
    return elemento*3
}
)
const multiplica3 = function(elemento){
    return elemento*3
}

const multiplica4 = elemento => elemento*4


console.log(copia)

