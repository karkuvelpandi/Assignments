

let array = [1, 2, 3, 4, 5, 6]

let n = 8
let b="";
let c=""; 

//using for of loop
for (let a of array){
   for(let x of array){
    b=a
    c=x
   if(b+c===8) {
    console.log(b,c);
   }
   }
    }

//using for loop
/* for(let i=0; i<=array.length-1;i++){
    for(let j=0;j<=array.length-1;j++){
        b=array[i]
        c=array[j]
        if(b+c===8){
        console.log(b,c);
        }
    }

} */