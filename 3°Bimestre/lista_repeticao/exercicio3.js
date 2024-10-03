let contador = 2

function imprimir(N){
    while(contador < N){
        if(contador % 2 == 0){
            console.log(contador)
        }
        contador += 1
    }
}

imprimir(5)