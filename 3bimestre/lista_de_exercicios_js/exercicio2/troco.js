let inputValor_da_compra = document.getElementById("valor_da_compra")
let inputValor_pago = document.getElementById("valor_pago")
let divSaida1 = document.getElementById("saida1")

let botaoCalcular = document.getElementById("calcular")

botaoCalcular.onclick = function() {
    calculaTroco();
    let troco = Number(divSaida1.innerText); 
    calculaMenorTroco(troco);
};

function calculaTroco(){
    alert("Calculando")
    // Entrada       

    let valor_da_compra = Number(inputValor_da_compra.value)
    let valor_pago = Number(inputValor_pago.value)

    // Processamento
    let troco = valor_pago - valor_da_compra

    // Saída
    divSaida1.innerText = troco
}

let divCedula20 = document.getElementById("cedula20")
let divCedula10 = document.getElementById("cedula10")
let divMoeda1 = document.getElementById("moeda1")

function calculaMenorTroco(troco){

    let q_cedula20 = Math.floor(troco/20)
    let resto_20 = troco % 20
    let q_cedula10 = Math.floor(resto_20/10)
    let moeda = resto_20 % 10

    divCedula20.innerText = q_cedula20;
    divCedula10.innerText = q_cedula10;
    divMoeda1.innerText = moeda;
}
