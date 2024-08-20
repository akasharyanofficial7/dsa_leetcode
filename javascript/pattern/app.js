// function pyramid(size) {
//   for (let i = 0; i <= size; i++) {
//     let row = "";
//     for (let j = 0; j <= i; j++) {
//       row += "*";
//     }
//     console.log(row);
//   }
// }
// pyramid(5);

// function square(size) {
//   for (let i = 1; i <= size; i++) {
//     row = "";
//     for (let j = 1; j <= size; j++) {
//       row += "*";
//     }
//     console.log(row);
//   }
// }
// square(5);

// function pyramidInverted(size) {
//   for (let i = size; i >= 1; i--) {
//     let row = "";
//     for (let j = 1; j <= i; j++) {
//       row += "*";
//     }
//     console.log(row);
//   }
// }
// pyramidInverted(5);

// function pyramidInverted1(size) {
//   for (let i = 1; i <= size; i++) {
//     let row = "";
//     let spaces = "";

//     for (let j = 0; j < size - i; j++) {
//       spaces += " ";
//     }
//     for (let k = 0; k < 2 * i - 1; k++) {
//       row += "*";
//     }
//     console.log(spaces + row);
//   }
// }
// pyramidInverted1(4);

// function add(n) {
//   for (let i = 0; i <= n; i++) {
//     let str = "";
//     for (let j = 1; j <= n - i; j++) {
//       str += "*";
//     }
//     console.log(str);
//   }
// }
// add(5);

// *****
// ****
// ***
// **
// *

// function add1(n) {
//   for (let i = 1; i <= n; i++) {
//     let str = "";
//     let spaces = "";
//     for (let j = 1; j <= i; j++) {
//       spaces += " ";
//     }
//     for (let k = 0; k <= 2 * i - 1; k++) {
//       str += "*";
//     }
//     console.log(spaces + str + spaces);
//   }
// }
// add1(5);

// *********
// *******
//  *****
//   ***
//    *

// function add(n) {
//   for (let i = 1; i <= n; i++) {
//     let str = "";
//     let spaces = "";
//     for (let j = 0; j <= n - i; j++) {
//       spaces += " ";
//     }
//     for (let k = 0; k < 2 * i - 1; k++) {
//       str += "*";
//     }

//     console.log(spaces + str + spaces);
//   }
//   for (let i = 1; i <= n; i++) {
//     let str = "";
//     let spaces = "";
//     for (let j = 1; j <= i; j++) {
//       spaces += " ";
//     }
//     for (let k = 0; k <= 2 * (n - i); k++) {
//       str += "*";
//     }
//     console.log(spaces + str + spaces);
//   }
// }
// add(4);

//     *
//    ***
//   *****
//  *******
//  *******
//   *****
//    ***
//     *

// function hallowSquqre(n) {
//   for (let i = 0; i <= n - 1; i++) {
//     let str = "";

//     for (let j = 0; j <= n - 1; j++) {
//       if (i === 0 || i === n - 1) {
//         str += "*";
//       } else {
//         if (j === 0 || j === n - 1) {
//           str += "*";
//         } else {
//           str += " ";
//         }
//       }
//     }

//     console.log(str);
//   }
// }

// hallowSquqre(5);

// *****
// *   *
// *   *
// *   *
// *****

// function add(n) {
//   for (let i = 1; i <= n; i++) {
//     var spaces = "";
//     var str = "";
//     for (var j = 1; j <= n - i; j++) {
//       spaces += " ";
//     }
//     for (let k = 1; k <= 2 * i - 1; k++) {
//       if (i == 1 || i == n) {
//         str += "*";
//       } else {
//         if (k == 1 || k == 2 * i - 1) {
//           str += "*";
//         } else {
//           str += " ";
//         }
//       }
//     }
//     console.log(spaces + str);
//   }
// }
// add(5);

//     *
//    * *
//   *   *
//  *     *
// *********

// function addd(n) {
//   for (let i = n; i >= 1; i--) {
//     let spaces = "";
//     let str = "";

//     for (let j = 1; j <= n - i; j++) {
//       spaces += " ";
//     }

//     for (let k = 1; k <= 2 * i - 1; k++) {
//       if (i == 1 || i == n) {
//         str += "*";
//       } else {
//         if (k == 1 || k == 2 * i - 1) {
//           str += "*";
//         } else {
//           str += " ";
//         }
//       }
//     }

//     console.log(spaces + str + spaces);
//   }
// }

// addd(5);

// *********
//  *     *
//   *   *
//    * *
//     *

// function add(n) {
//   for (let i = 1; i <= n; i++) {
//     let str = "";
//     for (let j = 1; j <= 3; j++) {
//       if (i == 1 || i == 4 || j == 1 || j == 3) {
//         str += "3";
//       } else if (i == 2 && j == 2) {
//         str += "1";
//       } else if (i == 2 || j == 2) {
//         str += "2";
//       }
//     }
//     console.log(str);
//   }
// }

// add(4);

// 333
// 313
// 323
// 333

// let start = 10;

// for (let i = 1; i <= 4; i++) {
//   let line = "";

//   // Add leading spaces
//   for (let j = 1; j < i; j++) {
//     line += " ";
//   }

//   // Generate numbers in the row
//   for (let k = 1; k <= 5 - i; k++) {
//     line += start;
//     start--;
//   }

//   console.log(line);

//}

// let start = 6;
// for (let i = 1; i <= 4; i++) {
//   let spaces = "";

//   let star = "";
//   for (let j = 0; j < 4; j++) {
//     spaces += " ";
//   }
//   for (let k = 1; k <= 5 - i; k++) {
//     if (i == 1 && (k == 1 || k == 2 || k == 3 || k == 4)) {
//       star += start;
//     } else if (i == 2 && (k == 1 || k == 2 || k == 3)) {
//       star += start;
//     } else if (i == 3 && (k == 1 || k == 2)) {
//       star += start;
//     } else if (i == 4 && (k == 1 || k == 2)) {
//       star += start;
//     }
//     if (k >= 5 - i) {
//       start--;
//     }
//   }
//   console.log(star + spaces);
// }

// 6666;
// 555;
// 44;
// 3;

// let start = 3;
// let val = start;
// for (let i = 1; i <= 4; i++) {
//   let spaces = "";
//   let star = "";
//   for (let j = 1; j <= i; j++) {
//     star += val + " ";

//     val++;
//   }
//   console.log(star + spaces);
// }

// 3
// 4 5
// 6 7 8
// 9 10 11 12

// let start = 3;
// let val = start;
// for (let i = 1; i <= 4; i++) {
//   let spaces = "";
//   let star = "";
//   for (let j = 1; j <= i; j++) {
//     star += val + "";
//   }

//   val++;

//   console.log(star + spaces);
// }

// 3
// 44
// 555
// 6666

// let start = 3;

// for (let i = 0; i <= 7; i++) {
//   let star = "";
//   let count = i;

//   if (i >= 4) {
//     count = 8 - i;
//   }
//   for (let j = 1; j <= count; j++) {
//     star += start;
//   }

//   if (i < 4) {
//     start++;
//   } else {
//     start--;
//   }

//   console.log(star);

//}
