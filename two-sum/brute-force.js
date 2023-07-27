const array = [1, 5, 2, 7];
const target = 7;

function twoSum(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i === j) continue; // skip if both index are in same place

      if (arr[i] + arr[j] === target) return [i, j];
    }
  }
}

const answer = twoSum(array, target); // calling function and putting the value in another variable
console.log(answer);
