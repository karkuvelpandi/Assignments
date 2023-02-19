// // find a largest word in a string

var str3 = `Write an efficigggjghgjjent Java/c/Python function that takes two strings as arguments and removes the characters from the first string, which are present in the second string. For example, if the first String "India is great" and the second String is "in" then the output should be "da s great"`

var strArray = str3.split(" ")
// console.log(strArray);
let result=""
let print=()=>{
  for(i=0;i<strArray.length;i++){
    if(strArray[i].length>result.length){
        result=strArray[i]
    }
  }
  console.log(result);
}
print()
// how to return a word that is repeated in a string .and find the most of the time repeated

// convert a number to a roman number

