let string = "proxy";

let result1 = string.split("").reverse().join("");

if (string === result1) {
  console.log("yes its a palindrome");
} else {
  console.log("No its not a palindrome");
}


function palindrome(str) {
  // Step 1. The first part is the same as earlier
  var re = /[^A-Za-z0-9]/g; // or var re = /[\W_]/g;
  str = str.toLowerCase().replace(re, '');

  // Step 2. Create the FOR loop
  var len = str.length; // var len = "A man, a plan, a canal. Panama".length = 30
  console.log(len);
  for (var i = 0; i < len; i++) {
    if (str[i] !== str[len - 1 - i]) { // As long as the characters from each part match, the FOR loop will go on
      return false; // When the characters don't match anymore, false is returned and we exit the FOR loop
    }
  }
  return true; // Both parts are strictly equal, it returns true => The string is a palindrome
}

let result = palindrome("A man, a plan, a canal. Panama");
console.log(result);

//  -----------------------------------------------------------------------------------------------------------------------


let str = "rotator"

let arr1 = []
for (a of str) {
  arr1.unshift(a)
}
console.log(arr1);

let arr2 = []
for (b of str) {
  arr2.push(b)
}
console.log(arr2);

for (let i = 0; i < str.length - 1; i++) {
  if (arr1[i] === arr2[i]) {
    return console.log('yes');
  }
  else {
    return console.log('no');

  }
}