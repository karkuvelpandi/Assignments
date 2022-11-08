

let array = [1, 2, 3, 4, 5, 6]
let array1= [1, 2, 3, 4, 5, 6]
let n = 8
let b="";
let c=""; 

for (let a of array){
   for(let ax of array1){
    b=a
    c=ax
   if(b+c===8) {
    console.log(b,c);
   }
   }
    
   
}