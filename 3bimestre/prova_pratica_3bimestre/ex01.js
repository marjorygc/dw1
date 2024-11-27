let operacao = 0

function somaSerie(cont){
    let n = 1
    let resposta = 0
    let operacao = 0
    
    for( p = 1 ; p <= cont; p += 1){
        operacao = n*p
        n += 2
        resposta += operacao
    }
    console.log(resposta) 
    
}


console.log(somaSerie(3)) // 1 + 6 + 15 = 22
console.log(somaSerie(4)) // 1 + 6 + 15 + 28 = 50
