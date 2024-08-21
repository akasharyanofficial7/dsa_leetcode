//calculate the first index pair which sum is zero then return indexes

function sumZero() {
  const arr = [1, -2, 2, 8, 5];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [i, j];
      }
    }
  }

  return -1;
}

console.log(sumZero());

//second approach by sorting  the array

function sumZero1() {
  const arr1 = [1, -2, 2, 8, 5];
  const arr = arr1.sort();
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];

    if (sum === 0) {
      return [left, right];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
  return -1;
}

console.log(sumZero1());
