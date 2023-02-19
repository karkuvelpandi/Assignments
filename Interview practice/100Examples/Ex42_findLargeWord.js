// // find a largest word in a string

// let str = `Write an efficient Java/c/Python function that takes two strings as arguments and removes the characters from the first string, which are present in the second string. For example, if the first String "India is great" and the second String is "in" then the output should be "da s great"`

// let str2 = str.split(' ')
// let result = []
// function large(str2) {
//     for (i = 0; i < str2.length; i++) {
//         for (j = 0; j < str2.length - i; j++) {
//             if (str2[j].length > str2[j + 1].length) {
//                 var temp = str[j].length
//                 str[j].length = str2[j + 1].length
//                 str2[j + 1].length = temp
//             }
//         }
//         return str2
//     }
// }
// console.log(large(str2));

var str = `Write an efficigggjghgjjent Java/c/Python function that takes two strings as arguments and removes the characters from the first string, which are present in the second string. For example, if the first String "India is great" and the second String is "in" then the output should be "da s great"`

var strArray = str.split(" ")
console.log(strArray);

var result = ""

for(var i = 0; i<strArray.length - 1;i++){
  if(strArray[i].length > result.length){
    result = strArray[i]
  }
}
console.log(result)

// how to return a word that is repeated in a string .and find the most of the time repeated

// convert a number to a roman number

