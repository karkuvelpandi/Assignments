var arr=[1,2,3,4,5,2,4]
console.log(arr);
console.log(arr.length);

function removeDuplicates(){
     return arr.filter((item,index)=>arr.indexOf(item)===index )
   
}
console.log(removeDuplicates(arr))
console.log(removeDuplicates(arr).length)

//default method for removing duplicate
let newArr=[...new Set(arr)]
console.log(newArr) 