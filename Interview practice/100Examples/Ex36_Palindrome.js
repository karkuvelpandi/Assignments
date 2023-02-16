// inbuilt method
/* 
let string = "proxy";

let result1 = string.split("").reverse().join("");

if (string === result1) {
  console.log("yes its a palindrome");
} else {
  console.log("No its not a palindrome");
} */

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


//------------------------------------------------------------------------------------------------------------------
// without inbuild method
function palindrome(str) {
  var re = /[^A-Za-z0-9]/g; 
  str = str.toLowerCase().replace(re, '');
 
  var len = str.length;
  console.log(len);
  for (var i = 0; i < len; i++) {
    if (str[i] !== str[len - 1 - i]) { 
        return false; 
    }
  }
  return true; 
 }
 