<<<<<<< HEAD
function prymid(n) {
=======
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
>>>>>>> fe12da394ebb02323caa5d6f4cae19aefdd36bc6
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

<<<<<<< HEAD
prymid(5);
=======
tringle(5);

// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5


function tringle(n) {
  for (let i = n; i >= 1; i--) {
    let row = "";
    for (j = 1; j <= i; j++) {
      row += j + " ";
    }
    console.log(row);
  }
}
tringle(6);


1 2 3 4 5 6 
1 2 3 4 5
1 2 3 4
1 2 3
1 2
1


function prymid(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n - i; j++) {
      row += " ";
    }
    for (let k = 1; k <= i; k++) {
      row += " " + i;
    }
    console.log(row);
  }
}

prymid(6);



      1
     2 2
    3 3 3
   4 4 4 4
  5 5 5 5 5
 6 6 6 6 6 6


function prymid(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n - i; j++) {
      row += " ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
      row += i;
    }

    console.log(row);
  }

  for (let i = n; i >= 1; i--) {
    let row1 = "";
    for (let j = 1; j <= n - i; j++) {
      row1 += " ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
      row1 += i;
    }

    console.log(row1);
  }
}

prymid(5);


    1
   222
  33333
 4444444
555555555
555555555
 4444444
  33333
   222
    1



//1 to 15
function prymid(n) {
  let num = 1;
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let k = 1; k <= i; k++) {
      row += num++ + " ";
    }
    console.log(row);
  }
}

prymid(5);





1 
2 3 
4 5 6 
7 8 9 10 
11 12 13 14 15



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
5 4 3 2 1 
1 2 3 4 5
5 4 3 2 1
1 2 3 4 5
5 4 3 2 1


>>>>>>> fe12da394ebb02323caa5d6f4cae19aefdd36bc6
