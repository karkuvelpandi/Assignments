function add(a){                            //  Q1   Closure
    return function addNum(b){
           return a+b
     } 
 }
 let newAdd=add(5)
 let result=newAdd(4)
 console.log(result);
//*************************** */

let string="AaBbCcDdEeE"                     // Q2    Duplicate removal
var lowStr=string.toLowerCase() .split("")  

let removeDuplicates=(lowStr)=>{
    return lowStr.filter((item,index)=>lowStr.indexOf(item)===index)
} 
let newStr=removeDuplicates(lowStr)
console.log(newStr);
//************************************** */

const array=["2","3","a","5","b","4","c"]     //Q3        Separate and add strings and number in string
var res1=0;
var res2="";




for (a of array){
    if(isNaN(Math.floor(a))===false){
        res1=res1+ Math.floor(a)
    }
    else if (isNaN(Math.floor(a))===true){
        res2=res2+a
    }
}
console.log(res1);
console.log(res2);

/* var res = 0;                             // Reference for array value SUM
for (i=0; i < array.length; i++) {            
     res += array[i]
}
console.log(res); */

/* let numArr=[]                             // Failed tryout 
let strArr=[]
for (a of array){
    if(isNaN(Math.floor(a))===false){numArr.push(a)}
    if (isNaN(Math.floor(a))===true){strArr.push(a)}
}
let result1=numArr.reduce((a,b)=>a+b)
let result2=strArr.reduce((a,b)=>a+b)

console.log(result1);
console.log(result2); */

/****************************************************************** */

const nested=[1,2,3,[4,5,[6,7,[8]]]]              //Q4  Convert nested array to single array without flat method
const single =[]
for(arr1 of nested){
      if(typeof(arr1)==="number"){                 //Can use " if(isNaN(arr1)===false){ " Also
        single.push(arr1)
      }
      else {
        for(arr2 of arr1){
          if(typeof(arr2)==="number"){            //Can use " if(isNaN(arr2)===false){ " Also
              single.push(arr2)
          }
          else{
            for (arr3 of arr2){
                if(typeof(arr3)==="number" ){
                    single.push(arr3)
                 }
                 else{
                    for (arr4 of arr3){
                        if(typeof(arr4)==="number"){
                            single.push(arr4)
                        }
                    }
                 }   
            }
          }
        }
      }
}
console.log(single);


/*  let a7=[8]
let a8=[1,2]
 for(a1 of a7){
    a8.push(a1)
 }
 console.log(a8); */

 /**************************************************************** */