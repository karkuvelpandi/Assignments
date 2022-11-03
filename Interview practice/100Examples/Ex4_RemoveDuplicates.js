var arr=[1,2,3,4,5,2,4]

console.log(arr);
console.log(arr.length);

function removeDuplicates(arr){
    return arr.filter((item,index)=>arr.indexOf(item)===index)
}
console.log(removeDuplicates(arr))
console.log(removeDuplicates(arr).length)
