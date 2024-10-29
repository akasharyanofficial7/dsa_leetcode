// qes-1

function square(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n; j++) {
      row += i + " ";
    }
    console.log(row);
  }
}

// square(5);

// 1 1 1 1 1
// 2 2 2 2 2
// 3 3 3 3 3
// 4 4 4 4 4
// 5 5 5 5 5

function tringle(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += j + " ";
    }
    console.log(row);
  }
}

tringle(5);

// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5







