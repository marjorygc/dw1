
// O segundo código é melhor, nesse caso o código não precisa do else, porque ele vai entrar e rodar a linha 6, se ela for verdade ele vai devolver (return) a, e sai da função, quando ela devolve alguma coisa a função termina, então ele não desperdiça processamento rodando o resto. Ele também trata das igualdades, oque resolve os problemas de ter 2 ou 3 números iguais.

function menor1(a, b, c){
    let menor = 0

    if ( a < b && a < c){
        menor = a
    }
    if ( b < a && b < c){
        menor = b
    }
    if ( c < b && c < a){
        menor = c
    } 

    return menor
}

function menor2(a, b, c){

    if ( a <= b && a <= c) return a
    if ( b <= a && b <= c) return b
    else return c
}

console.log(menor1( 1, 2, 3))
console.log(menor2( 1, 2, 3))