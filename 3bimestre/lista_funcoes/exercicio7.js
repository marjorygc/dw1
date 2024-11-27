//Faça uma função para verificar se o uso de álcool compensa mais que o uso de gasolina. Se sim, deve-se retornar True, se não, deve-se retornar False. Sabe-se que álcool compensa se o valor do litro do álcool for abaixo de 70% do valor do litro da gasolina

function combustivel(la, lg){
    if( la > ( lg*0.7)) return false
    return true
}

let litro_alcool = 4.04
let litro_gasolina = 6.09

resposta = combustivel(litro_alcool, litro_gasolina)

if(resposta == true){
    console.log("O valor do litro de alcool está compensando mais do que o de gasolina no dia de hoje")
} else {
    console.log("O valor do litro de gasolinha está compensando mais do que o de alcool no dia de hoje")
}
