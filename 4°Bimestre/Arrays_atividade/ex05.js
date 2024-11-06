//Crie uma função removeDuplicates(arr) que remova todos os elementos duplicados do array e retorne um novo array com apenas elementos únicos.

function removeDuplicates(arr){
    let newArr = []
    for(let i = 0; i < arr.length; i++){
        if (!newArr.includes(arr[i])) {
            newArr.push(arr[i]);  
        }
    }
    return newArr
}

console.log(removeDuplicates([1, 2, 2, 3, 3, 3, 4])); // Deve exibir: [1, 2, 3, 4]
console.log(removeDuplicates(["apple", "apple", "banana"])); // Deve exibir: ["apple", "banana"]
