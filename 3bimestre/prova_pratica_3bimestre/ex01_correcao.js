

function somaSerie(cont){

    // x e (2*x -1), existe a opção de criar 2 variáveis, ou de criar uma só e relacionar a segunda coluna com a primeira desse jeito, como eu posso deixar o código melhor? mais lógica, mais legível
    // soma = soma + 1*1
    // soma = soma + 2*3
    
    let soma = 0
    let y = 1
    
    for(let x=1;  x<= cont;  x++, y += 2){
        soma = soma + x*y
    }

    return soma
}

console.log(somaSerie(5))
