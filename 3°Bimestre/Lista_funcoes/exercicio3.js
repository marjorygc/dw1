function triangulo(l1,l2,l3){
    if (l1 > l2 + l3 || l1 < Math.abs(l2 - l3)) return false

    if (l2 > l1 + l3 || l2 < Math.abs ( l1 - l3)) return false

    if (l3 > l1 + l2 || l3 <  Math.abs(l2 - l1)) return false

    return true
}

let lado1 = 1
let lado2 = 2
let lado3 = 9

let verificacao = triangulo(lado1, lado2, lado3)

if (verificacao == true) {
    resposta = tipo_triangulo(lado1, lado2, lado3)
} else {
    console.log(`Os lados ${lado1}, ${lado2} e ${lado3} NÃO formam um triângulo`)
}

function tipo_triangulo(l1,l2,l3){
    if (l1 == l2 && l2 == l3){
        console.log("Triângulo Equilátero")
    } else if ((l1 == l2 && l1 != l3 )|| (l1 == l3 && l1 != l2 ) || (l3 == l2 && l2 != l1)){
        console.log("Triângulo Isócesles")}
    else if (l1 != l2 && l2 != l3 && l1 != l3){
        console.log("Triângulo Escaleno")
    } 
}






