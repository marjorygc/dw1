//Faça uma função que a partir da idade e peso do paciente calcule a dosagem de um medicamento e retorne quantas gotas do medicamento o paciente deve tomar por dose. Considere que o medicamento em questão possui 500 mg por ml, e que cada ml corresponde a 20 gotas.

//Adultos e adolescentes acima de 12 anos, inclusive, se tiverem peso igual ou acima de 60 quilos devem tomar 1000 mg; com peso abaixo de 60 quilos devem tomar 875 mg.

//Para crianças e adolescentes abaixo de 12 anos a dosagem depende do peso: 5 a 9 kg = 125 mg, 9.1 a 16 kg = 250 mg, 16.1 a 24 kg = 500 mg, acima de 24 Kg = 750 mg.

function dosagem(mg){
    let ml = mg / 500
    let resposta = ml * 20
    console.log("O paciente deve tomar", resposta, "gotas por dose")
}

idade = 12
peso = 55

if(idade > 12){
    if(peso >= 60){
        dosagem(1000)
    }else{
       dosagem(875)
    }
} else {
    if((peso >= 5) && (peso <= 9)){
       dosagem(125)
    } else if((peso > 9) && (peso <= 16)){
        dosagem(250)
    } else if( (peso > 16) && (peso <= 24)){
       dosagem(500)
    } else {
       dosagem(750)
    }
}

