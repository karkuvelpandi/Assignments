// Checking prime number

function isPrime(num){
    if(num<=1){
        return false
    }
    for(i=2;i<=Math.sqrt(num);i++){
        if(num%i===0){
            return false
        }
    }
    return true
}
let result=isPrime(45)
console.log(result);
// console.log(Math.sqrt(15));
// console.log(2%1.4142135623730951===0);
// console.log(2%1.4142135623730951);
// console.log(15%3.872983346207417);


// PRINTING PRIME NUMBER

//   for(i=2;i<=29;i++){
//      if(isPrime(i)){
//         console.log(i);
//      }
//   }

let count=0
let num=2

while(count<10){
    if(isPrime(num)){
        console.log(num);
       count++
    }
    num++
}
