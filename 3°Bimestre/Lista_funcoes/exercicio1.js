// Elabore uma função que dada a idade de um atleta devolve sua classificação de acordo com as seguintes categorias.

function classificacao(idade){
    if(idade >= 5 && idade <= 7 ){
        console.log("Infantil A")
    } else if( idade > 7 && idade <= 10){
        console.log("Infantil B")
    } else if(idade > 10 && idade <= 13){
        console.log("Juvenil A")
    } else if(idade > 13 && idade <= 17){
        console.log("Juvenil B")
    } else if(idade > 17){
        console.log("Adulto")
    }
}

classificacao(40)