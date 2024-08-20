function isAnagram() {
  let str1 = 121;
  let str2 = 112;

  str1 = str1.toString();
  str2 = str2.toString();

  if (str1.length !== str2.length) {
    return false;
  }

  const s1 = str1.split("").sort().join("");
  const s2 = str2.split("").sort().join("");

  return s1 === s2;
}

console.log(isAnagram());
