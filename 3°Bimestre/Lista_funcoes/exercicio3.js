function tipo_triangulo(){
    if (l1 = l2 = l3){
        console.log("Triângulo Equilátero")
    } else if ((l1 = l2 && l1 != l3 )|| (l1 = l3 && l1 != l2 ) || (l3 = l2 && l2 != l1)){
        console.log("Triângulo Isócesles")
    } else if (l1 != l2 != l3){
        console.log("Triângulo Escaleno")
    } 
}

let lado1 = 10
let lado2 = 20
let lado3 = 15

resposta = tipo_triangulo(lado1, lado2, lado3)


