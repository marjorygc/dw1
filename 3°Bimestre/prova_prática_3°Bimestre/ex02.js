function menor_numero(n1,n2,n3){
    let resultado = 0
    if (n1 < n2 && n1 < n3){
        resultado = n1       
    }
    if (n2 < n1 && n2 < n3){
        resultado = n2   
    }
    if (n3 < n1 && n3 < n2){
        resultado = n3   
    }
    console.log("O menor número é", resultado)
}


let numero1 = -3
let numero2 = 2
let numero3 = 8

menor_numero(numero1,numero2,numero3)
