
//star Printing assignment
/* *
   **
   ***
   ****
   *****   */

let n=5 
let str=""
for (let i=0; i<=n; i++){
for(let j=0;j<=i;j++){
     str += "*" ;
}
 str+="\n"
}
console.log(str);


// 3star 1star 3 star Assignment

for(let i=0;i<3;i++){
   for(let j=0;j<3; j++){
    if(i==0 || i===2){console.log("*");}
    else if(j==0 || j==2){console.log("");}
    else{console.log("*");}
   }
}
