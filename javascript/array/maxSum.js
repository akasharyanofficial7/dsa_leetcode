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

// find the third greater element

//find the max sum  of the element of the given array
function ThirdGreaterElement(arr1) {
  let max = -Infinity;
  let sMax = -Infinity;
  let tMax = -Infinity;
  let i = 0;
  let j = arr1.length - 1;
  while (i <= j) {
    if (arr1[i] > max) {
      tMax = sMax;
      sMax = max;
      max = arr[i];
    } else if (arr1[i] > sMax && arr1[i] < max) {
      tMax = sMax;
      sMax = arr1[i];
    } else if (arr1[i] > sMax && arr1[i] < sMax) {
      tMax = arr1[i];
    }

    i++;
  }
  return tMax;
}
let arr1 = [1, 8, 10, 3, 60, 22, 100];
console.log(ThirdGreaterElement(arr1));
