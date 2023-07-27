const array = [1, 5, 2, 7];
const target = 7;

function twoSum(arr, target) {
  let hashMap = new Map();

  for (let i = 0; i < arr.length; i++) {
    const diff = target - arr[i];

    if (hashMap.has(diff)) {
      const valueInHashMap = hashMap.get(diff);
      return [valueInHashMap, i];
    } else {
      hashMap.set(arr[i], i);
    }
  }
}

const answer = twoSum(array, target);
console.log(answer);
