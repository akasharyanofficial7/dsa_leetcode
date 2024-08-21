//calculate the first index pair which sum is zero then return indexes

function sumZero() {
  const arr = [1, -1, 2, 8, 5];
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

//second approach

function sumZero1() {
  const arr = [1, -1, 2, 8, 5];
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
}

console.log(sumZero1());
