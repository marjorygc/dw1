// Para que se possa construir um triângulo é necessário que a medida de qualquer um dos lados seja menor que a soma das medidas dos outros dois 

// e maior que o valor absoluto da diferença entre essas medidas. 

// Faça uma função que verifique se três medidas podem constituir um triângulo. A função deve devolver true se as medidas formam um triângulo e false caso contrário.

// operação inversa, poderia ser uma linha com varios && pra atender as condições mas oque o profesor fez foi o caminho cintrário, em vez de verificar se as condições eram verdadeiras pra dizer que é um triângulo, ele assumiu que era um triângulo e colocou ifs que mostram que não é um triãngulo, quando isso acontece o return false vai sair da função entregando um resultado false.

function triangulo(l1,l2,l3){
    if (l1 > l2 + l3 || l1 < Math.abs(l2 - l3)) return false

    if (l2 > l1 + l3 || l2 < Math.abs ( l1 - l3)) return false

    if (l3 > l1 + l2 || l3 <  Math.abs(l2 - l1)) return false

    return true
}

let lado1 = 10
let lado2 = 20
let lado3 = 15

let resposta = triangulo(lado1, lado2, lado3)

if (resposta == true) {
    console.log(`Os lados ${lado1}, ${lado2} e ${lado3} formam um triângulo`)
} else {
    console.log(`Os lados ${lado1}, ${lado2} e ${lado3} NÃO formam um triângulo`)
}
