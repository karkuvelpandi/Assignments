// inbuilt method
/* 
let string = "proxy";

let result1 = string.split("").reverse().join("");

if (string === result1) {
  console.log("yes its a palindrome");
} else {
  console.log("No its not a palindrome");
} */

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
 
//    let result=palindrome("A man, a plan, a canal. Panama");
 let result=palindrome("rotator");
 console.log(result);