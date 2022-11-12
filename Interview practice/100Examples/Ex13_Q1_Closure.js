function add(a){               //  Q1
    return function addNum(b){
           return a+b
     } 
 }
 let newAdd=add(5)
 let result=newAdd(4)
 console.log(result);
//*************************** */

let string="AaBbCcDdEeE"                     // Q2
var lowStr=string.toLowerCase() .split("")  

let removeDuplicates=(lowStr)=>{
    return lowStr.filter((item,index)=>lowStr.indexOf(item)===index)
} 
let newStr=removeDuplicates(lowStr)
console.log(newStr);
//************************************** */

const array=["2","3","a","5","b","4","c"]

 let newArr=[]
 let numArr=[]
 let strArr=[]
for(arr of array){
  newArr.push(isNaN(arr)===false?Math.floor(arr):arr)
} 
for(a of newArr){
if(isNaN===true){
    numArr.push(a)
}
else if(isNaN===false){
    strArr.push(a)
}
}

for (let i = 0; i < numArr.length; i++) {
    sum += numArr[i];
}






/* for(a of newArr){        
    if(typeof(a)){
       b=a
       c=a+1
       console.log(b+c);
   } 
}  */
