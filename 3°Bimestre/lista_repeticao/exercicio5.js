function imprimirPrimos(N) {
    let contador = 0

    while (contador < N) {
        let isPrimo = true

        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrimo = false
                break
            }
        }

        if (isPrimo) {
            console.log(num)
            contador++
        }

        num++
    }
}

imprimirPrimos(10)
