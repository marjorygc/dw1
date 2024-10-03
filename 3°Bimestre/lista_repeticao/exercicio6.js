function fatorial(n) {
    if (n < 0) {
        return "Fatorial não definido para números negativos.";
    }

    let resultado = 1;

    for (let i = n; i > 1; i--) {
        resultado *= i; 
    }

    return resultado; 
}


console.log(fatorial(5));  
console.log(fatorial(0));  
console.log(fatorial(6));  
consol
