// Hide last 4 digits

let string = "1245 7894 7568 5487";

function hideDigits() {
  let string1 = string.trim().split("");
  return string1.map((a, i) => {
    if (i > string1.length - 5) {
      return "x";
    } else {
      return a;
    }
  });
}
let result = hideDigits(string);

console.log(result.join(""));




