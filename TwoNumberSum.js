function twoNumberSum(arr, target) {

    const sums = new Set();
    sums.add(0);

    const noRepeats = new Set(arr);
    const arrNoRepeats = Array.from(noRepeats);
    
    for (let i = 0; i < arrNoRepeats.length; i++) {
      const sumsCopy = [...sums]  
      for (let j = 0; j < sumsCopy.length; j++) {
        const actualSum = sumsCopy[j] + arrNoRepeats[i];
        if (actualSum === target) {
          return [sumsCopy[j], arrNoRepeats[i]] ;

        } else {
          sums.add(actualSum)
        }
      }
    }
    return [];
  }
  
//Test
console.log(twoNumberSum([4, 10, 5], 9)); //(true)
console.log(twoNumberSum([1, 10, 5, 3], 19)); //(true)
console.log(twoNumberSum([1, 10, 5, 3], 10)); //(true)
console.log(twoNumberSum([1, 1, 10, 5, 3], 2)); //(false)
  
//Test de ejemplos dados
const arr2 = [3, 6, 8, 10];
const target2 = 15;
console.log(twoNumberSum(arr2, target2)); // Output: []

const arr = [2, 7, 11, 15];
const target = 9;
console.log(twoNumberSum(arr, target)); // Output: [2, 7]