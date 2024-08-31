//find the max sum  of the element of the given array
function sum(arr) {
  let max = 0;
  let sMax = 0;
  let i = 0;
  let j = arr.length - 1;
  while (i <= j) {
    if (arr[i] > max) {
      sMax = max;
      max = arr[i];
    } else if (arr[i] > sMax) {
      sMax = arr[i];
    }

    i++;
  }
  return sMax + max;
}
let arr = [1, 98, 10, 3, 60, 22, 10];
console.log(sum(arr));
