let array=[{
    name:"karkuvel",
    skill:["css","java"]
}
,{
    name:"imad",
    skill:["Bootstrap","react"]
}]

// arr = array[0].skill
// console.log(array[0].skill);

let output=[]
array.map((a)=>{
   let [c,b]=a.skill
   console.log(c);
   console.log(b);
    output.push(c,b)
})
console.log(output)