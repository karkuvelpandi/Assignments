var name="Lakshmi"
// var name1=name.split("")
// console.log(name1);
let result=[]
for(a of name.split("")){
    result.unshift(a)
}

console.log(result.join(""));