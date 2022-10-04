let a="arm"
let b="aramasdas"

let string1=a.split('').sort().join('')
let string2=b.split('').sort().join('')

for (i=0; i<=string1.length-1 || i>=string1.length-1  ;i++){

if(string2[i]===string1[i]){
    console.log('True');
}
else{
    console.log('False');
}
}

/* for (i=0;string2[i]===string1[i] ;i++){

    if(i !=""){
        console.log('True');
    }
    else if (i =""){
        console.log('False');
    }
    } */
    
    
   

/* console.log(a[0]); */