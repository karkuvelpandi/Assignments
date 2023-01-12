/* var arr = [1, 2, 3, 4, 5, 2, 4]
console.log(arr);

console.log(arr.length);

function removeDuplicates() {
     return arr.filter((item, index) => arr.indexOf(item) === index)

}
console.log(removeDuplicates(arr))
console.log(removeDuplicates(arr).length)
//default method for removing duplicate
let newArr = [...new Set(arr)]
console.log(newArr) */


//Alternate method

// let arr = [1,2,3,4,3,2,5]
let arr = ['a','b','a']

console.log(arr);
console.log(arr.length);

 function removeDuplicates(arr){
     let newArr = []
    for(i=0;i<arr.length;i++){
     if(newArr.indexOf(arr[i])===-1){
          newArr.push(arr[i])
     }
    }
    return newArr
}
console.log(removeDuplicates(arr));





