//find the pair whic sum is closest to k

function sum(k) {
  const arr = [1, 2, 5, 7, 14];
  let minVal = Infinity;
  let result = [];
  let i = 0;
  let j = arr.length - 1;
  while (i < j) {
    let sum = arr[i] + arr[j];
    let diff = Math.abs(sum - k);
    if (diff < minVal) {
      minVal = diff;
      result = [arr[i], arr[j]];
    }

    if (sum < k) {
      i++;
    } else {
      j--;
    }
  }
  return result;
}
console.log(sum(13));
