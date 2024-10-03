//Um número primo é um número positivo maior que 1 com apenas dois divisores: 1 e o próprio número.
//Faça uma função para determinar se um número é primo ou não. A função deve devolver true ou false

function isPrimo(num) {
    if (num <= 1) {
        return false
    }

    
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false
        }
    }

    return true
}


