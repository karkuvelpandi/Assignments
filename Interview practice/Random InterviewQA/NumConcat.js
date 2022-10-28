//concat

let a=5+"9"
let b=5*"9"
console.log(a);
console.log(b);

// substring

var c="scalar"
var result1=c.substring(3,6)
console.log(result1);


//eval default function passing argument inside string

var d=5
var e=6
var  result2=eval("d+e")
console.log(result2);

//error programme dont use  //its for changing array position

function solve(arr,rotation){
    // if(rotation==0)return arr;
    for(let i=0;i<rotation;i++){
     let element=arr.pop()
    let x= arr.unshift(element)
     console.log(x);
    }
    return arr
    // console.log(a)
}
solve([44,1,22,111],5)