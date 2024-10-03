//Faça uma função que aceite como entrada uma medida em centímetros e uma string: “m” (metros), “mm” (milímetros)
//ou “km” (quilômetros). 
//A função deve converter e devolver a medida em centímetros conforme a string fornecida: m, mm ou km.

function conversao_de_medidas(medida, valor){
    if( medida == "m"){
        let resposta = (valor / 100)
        console.log(valor, "equivale a", resposta, medida)
    } else if( medida == "km"){
        let resposta = ( valor * 0.0001)
        console.log(valor, "equivale a", resposta, medida)
    } else if (medida == "mm"){
        let resposta =( valor * 10)
        console.log(valor, "equivale a", resposta, medida)
    }
   
}

let medida = "mm"
let valor = 100

conversao_de_medidas(medida, valor)




