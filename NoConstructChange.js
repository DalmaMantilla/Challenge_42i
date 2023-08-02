
function noConstructChange(arr){
    arr.sort((a, b) => a - b);
    minSum = 1; 
    //console.log(arr)

    for (let i = 0; i < arr.length; i++) {
        if(arr[i] > minSum) {
            break;
        } 
        minSum += arr[i];
    }
    return minSum;
}

//TEST
console.log(noConstructChange([5, 7, 1, 1, 2, 3, 22])) //Salida: 20
console.log(noConstructChange([5, 4, 1, 1, 2, 3, 18])) //Salida: 17

//TEST de ejemplos dados
const arr = [1, 2, 5];
const result = noConstructChange(arr);
console.log(result); // Salida: 4

const arr2 = [];
const result2 = noConstructChange(arr2);
console.log(result2); // Salida: 1

