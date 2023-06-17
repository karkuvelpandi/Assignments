function isAnagram(str1,str2){
     str1=str1.replace("/[^a-z]/gi","").toLowerCase()
     str2=str2.replace("/[^a-z]/gi","").toLowerCase()

    str1=str1.split("").sort().join("")
    str2=str2.split("").sort().join("")
    if(str1.length===str2.length && str1===str2){
        console.log("Given strings are anagram");
    }else{
        console.log("No Given strings are not anagram");
    }
}
isAnagram("acfv","fvca")
isAnagram('listen', 'silent')
isAnagram('debit card', 'bad credit')
isAnagram('hello', 'world')

// Tried without inbuilt :)
let one = "maam";
let two = "amma";
if (one.length === two.length) {
  let result = [];
  for (a of one) {
    if (two.includes(a)) {
      result.push(a);
    }
  }
  console.log(result);
  console.log(
    result.length === one.length
      ? "Yes, Its a anogram"
      : "No its not the thing you want...!"
  );
} else {
  console.log("No its not the thing you want...!");
}

// From CSSMani
let str1 = "mary";
let str2 = "yarm";

let strArray1 = str1.split("");
let strArray2 = str2.split("");

if (strArray1.length !== strArray2.length) {
  console.log("It is not a anagram string");
} else {
  let result = [];

  for (let i = 0; i < strArray1.length; i++) {
    for (let j = 0; j < strArray2.length; j++) {
      if (strArray1[i] === strArray2[j]) {
        result.push(strArray1[i]);
      } else {
        result.push(null);
      }
    }
  }
  if (result.join("") === strArray1.join("")) {
    console.log("It is anagram string");
  } else {
    console.log("It is not anagram string");
  }
}