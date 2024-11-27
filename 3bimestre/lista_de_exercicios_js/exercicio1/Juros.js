let inputCapital = document.getElementById("capital")
let inputTaixa = document.getElementById("taixa")
let inputPeriodo = document.getElementById("periodo")
let divSaida = document.getElementById("saida")

let botaoCalcular = document.getElementById("calcular")
// vincula a função ao clique do botão
botaoCalcular.onclick = calculaJuros

function calculaJuros(){
    alert("Calculando")
    // Entrada       
    let capital = Number(inputCapital.value)
    let taixa = Number(inputTaixa.value)
    let periodo = Number(inputPeriodo.value)

    // Processamento
    let m = capital * (1+taixa)**periodo

    // Saída
    divSaida.innerText = m
}
