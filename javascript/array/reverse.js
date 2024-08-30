let arr = [1, 4, 2, 55, 88, 77];

function reverseArray(arr1) {
  let a = 0;
  let b = arr.length - 1;

  while (a < b) {
    arr[a] = arr[a] + arr[b];
    arr[b] = arr[a] - arr[b];
    arr[a] = arr[a] - arr[b];
    a++;
    b--;
  }
  return arr;
}

console.log(reverseArray(arr));

function reverseString(str) {
  let arr = str.split("");
  console.log(arr);
  let i = 0;
  let j = arr.length - 1;

  while (i < j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;

    i++;
    j--;
  }

  return arr.join("");
}

console.log(reverseString("hello"));
