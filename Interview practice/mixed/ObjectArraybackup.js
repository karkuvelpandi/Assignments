/* let obj={
    name:"karkuvel",
    skill:["css","java"]
}
let obj2={
    name:"imad",
    skill:["Bootstrap","react"]
}

//out [css,java,bootstrap,react]

let output=[];
let value1= obj.skill
   value1.map((o)=>{
     output.push(o)
    })
   
console.log(output);

let value2= obj2.skill   
   value2.map((o)=>{
     output.push(o)
    })

    console.log(output);


// console.log(value); */

/* console.log(a1);
console.log(a2); */


//out [css,java,bootstrap,react]
let array=[{
    name:"karkuvel",
    skill:["css","java"]
}
,{
    name:"imad",
    skill:["Bootstrap","react"]
}]

let output=[];
let a1=array.pop()
let a2=array.shift() 


let value1= a1.skill
   value1.map((o)=>{
     output.push(o)
    })
   
let value2= a2.skill   
   value2.map((o)=>{
     output.push(o)
    })
let x=output.sort()
    console.log(x);

    