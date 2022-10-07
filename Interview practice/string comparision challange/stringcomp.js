let a = "hello"
let b = "h3efllo"

let string1 = a.split('').sort().join('')
let string2 = b.split('').sort().join('')

console.log(string1);
console.log(string2);

//Programme for each letter Itteration and Comparision
for (str1 of string1) {
     string2.includes(str1) ? console.log(true) : console.log(false); 
    
}
// for(i=0; i<=string1.length-1; i++){
//     string2.includes(string1[i]) ? console.log(true) : console.log(false);
// }

// This is for word inside the string or not

// string2.includes(string1) ? true : false

console.log(`The word "${string1}" ${string2.includes(string1) ? 'is' : 'is not'} in the sentence`); 





// DRAFT PROGRAMES Don't try



/* let string1=a.split('').sort().join('')
let string2=b.split('').sort().join('')


for (i=0; i<=(string1.length-1 || string2.length-1 );i++){

if(string2[i]===string1[i]){
    console.log('True');
}
else {
    console.log('False');
}
}
 */
/* for (i=0;string2[i]===string1[i] ;i++){

    if(i !=""){
        console.log('True');
    }
    else if (i =""){
        console.log('False');
    }
    } */




/* console.log(a[0]); */