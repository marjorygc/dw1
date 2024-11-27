
let vetor = [10, 20, 30]
console.log(vetor)

// colocar o número que será a última posição (0,1,2 // acabou a lista, acrescentar mais um seria colocar na tercwira posição) é o mesmo que colocar quantos elementos tem a lista
// vetor[3] = 70
// console.log(vetor)

vetor[vetor.length] = 20
console.log(vetor)


//       i         i-1 
// vetor[4] = vetor[3] // [10, 20, 30, , 40]
// vetor[3] = vetor[2] // [10, 20, , 30 , 40]
// vetor[2] = vetor[1] // [10, ,20, 30, 40]

function inserir(vet, pos, valor){
    if(pos < 0) return false
    if(pos > vet.length) return false

    for(let i = vetor.length; i > pos; i--){

    vetor[i] = vetor[i-1]

    }

    vet[pos] = valor
    return true
}

function teste1(){
    inserir(vetor, 0, 40)
    inserir(vetor, vetor.length, 80)
    inserir(vetor, 1, 45)
    inserir(vetor, vetor.length-1, 75)
    inserir(vetor, 3, 55)

    console.log(vetor)
}

function teste2(){
    inserir(vetor, -1, 100)
    console.log(vetor)
}


