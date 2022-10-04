let a="rama"
let b="aram"

let string1=a.split('').sort().join('')
let string2=b.split('').sort().join('')

if(string1===string2){
    console.log('True');
}
else{
    console.log("False");
}
/* console.log(a[0]); */