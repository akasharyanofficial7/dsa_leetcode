//find the max sum  of the element of the given array
function sum(arr) {
  let max = 0;
  let sMax = 0;
  let i = 0;
  let j = arr.length - 1;
  while (i < j) {
    if (arr[i] > max) {
      if (sMax < max) {
        sMax = max;
      }
      max = arr[i];
    }
    i++;
  }
  return sMax + max;
}
let arr = [1, 8, 10, 3, 6, 22, 1];
console.log(sum(arr));
