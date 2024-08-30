function reverseArray() {
  let arr = [1, 4, 2, 55, 88, 77];
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

console.log(reverseArray());
