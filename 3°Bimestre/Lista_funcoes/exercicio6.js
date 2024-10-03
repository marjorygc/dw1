//Faça uma função que receba um valor numérico representando um ano (por exemplo, 1890) e verifique se o ano é ou não bissexto. Um ano é bissexto se ele for divisível por 400 ou se ele for divisível por 4 e não por 100.

function verificacao(ano){
    if((ano % 400 != 0) && (ano % 4 != 0) || (ano % 100 == 0)) return false
    return true
}

ano = 1928

resposta = verificacao(ano)

if (resposta == true){
    console.log("O ano", ano, "é bissexto")
} else {
    console.log("O ano", ano, "não é bissexto")
}