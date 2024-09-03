// check the given number is number or not
function numbers(input) {
  const regex = /^-?[0-9]+$/;
  if (regex.test(input)) {
    return true;
  }
  return false;
}

console.log(numbers("123"));
