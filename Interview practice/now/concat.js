/* let a="abc"
let b="123"
 
let c= a.concat(b)
console.log(c); */

let array=[[0,1],[2,3],[4,5],[6,7]]

let result=array.reduce((rajni,santosh)=>{
     return  [...rajni,...santosh]
})

console.log(result);
