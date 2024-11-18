function prymid(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let k = 1; k <= n; k++) {
      if (i % 2 == 0) {
        row += k + " ";
      } else {
        row += n - k + 1 + " ";
      }
    }
    console.log(row);
  }
}

prymid(5);
