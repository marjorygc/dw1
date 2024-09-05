let inputVelocidade_maxima = document.getElementById("velocidade_maxima")
let inputVelocidade_veiculo = document.getElementById("velocidade_veiculo")

let divSaida = document.getElementById("saida")

let botaoCalcular = document.getElementById("calcular")

botaoCalcular.onclick = multa

function multa(){

    let velocidade_maxima = Number(inputVelocidade_maxima.value)
    let velocidade_veiculo = Number(inputVelocidade_veiculo.value)

    let multa50 = velocidade_veiculo > (velocidade_maxima + (velocidade_maxima*0.5))
    let multa20_50 = velocidade_veiculo >= (velocidade_maxima + (velocidade_maxima*0.2) && velocidade_maxima <= (velocidade_maxima*0.5))

    if(multa50 == True){
        divSaida.innerText = "O valor da sua multa é de R$ 880,41"
    } else { 
        if(multa20_50 == True){
            divSaida.innerText = "O valor da sua multa é de R$ 195,23"
        }} else {
            divSaida.innerText = "Você está dentro dos limetes de velocidade permitidos"
        }}