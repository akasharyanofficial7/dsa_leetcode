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
