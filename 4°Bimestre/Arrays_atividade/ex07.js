//Crie uma função mergeArrays(arr1, arr2) que receba dois arrays e retorne um novo array contendo todos os elementos de ambos os arrays.

function mergeArrays(arr1, arr2){
    arr1.push(...arr2)
    return arr1
}

console.log(mergeArrays([1, 2], [3, 4])); // Deve exibir: [1, 2, 3, 4]
console.log(mergeArrays(["apple"], ["banana", "cherry"])); // Deve exibir: ["apple", "banana", "cherry"]