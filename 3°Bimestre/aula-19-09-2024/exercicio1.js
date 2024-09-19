// while(mult <= 10){
//     console.log("2 x", mult, "=", 2 * mult)
//     mult ++
// }


// while(mult <= 10){
//     console.log("5 x", mult, "=", 5 * mult)
//     mult ++
// }

function tabuada(n){

    // inicialização
    let mult = 0

    // condição
    while(mult <= 10){
        console.log( n,"x", mult, "=", n * mult)

        // incremento
        mult ++
    }   
    console.log(mult)
}

tabuada(2)

function tabuadafor(n){

    // inicialização ; condição ; incremento
    for ( let mult = 0; mult <= 10; mult++){
        console.log("2 x", mult, "=", 2 * mult)
    }
    // não existe nesse caso, porque o mult nessa função foi declarado dentro do for, por mais que saia do laço de repetição com um valor, ele só existe dentro do for, escopo
    console.log(mult)
}

tabuadafor(2)