let inputDistancia = document.getElementById("distancia")
let inputAutonomia = document.getElementById("autonomia")
let inputPreco_combustivel = document.getElementById("preco_combustivel")
let inputPedagio = document.getElementById("pedagio")

let divSaida = document.getElementById("saida")

let botaoCalcular = document.getElementById("calcular")

botaoCalcular.onclick = valor_da_viagem

function valor_da_viagem(){
    alert("Calculando total da viagem")

    let distancia = Number(inputDistancia.value)
    let autonomia = Number(inputAutonomia.value)
    let preco_combustivel = Number(inputPreco_combustivel.value)
    let pedagio = Number(inputPedagio.value)

    let combustivel = (distancia/autonomia)*preco_combustivel
    let total = combustivel + pedagio

    divSaida.innerText = total
}