//Crie uma função countOccurrences(arr, element) que receba um array e um elemento, e retorne o número de vezes que o elemento aparece no array.

function countOccurrences(arr, element){
    let sum = 0 
    for( let i = 0; i < arr.length; i++){
        if( arr[i] == element){
            sum+=1
        }
    }
    return sum
}

console.log(countOccurrences([1, 2, 2, 3, 2, 2], 2)); // Deve exibir: 4
console.log(countOccurrences(["apple", "banana", "apple"], "apple")); // Deve exibir: 2