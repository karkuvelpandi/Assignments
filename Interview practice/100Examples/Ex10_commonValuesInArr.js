let x=[1,2,4,5,6]
let y=[2,4,8,7,9]
function commonelement(){
let common=[]
for(a of x){
    if(y.includes(a)){
      common.push(a)
    }


}
console.log(common);}
commonelement()