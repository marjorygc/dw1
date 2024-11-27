
// captura dos elementos HTML que serão manipulados pelo javascript

let inputPeso = document.getElementById("peso")
let inputAltura = document.getElementById("altura")
let divSaida = document.getElementById("saida")

let botaoCalcular = document.getElementById("calcular")
// vincula a função ao clique do botão
botaoCalcular.onclick = calculaImc

function calculaImc(){
    alert("Calculando")
    // Entrada       
    let peso = Number(inputPeso.value)
    let altura = Number(inputAltura.value)

    // Processamento
    let imc = peso / (altura * altura)

    // Saída
    divSaida.innerText = imc
}

