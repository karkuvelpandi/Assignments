let a=310
let b=200
let c=630


//Assignment No : 7  (Big number)
b<a ?console.log("biggest number is",a):console.log("biggest number is",b)

//Assignment No : 8  (Small number)
b<a ?console.log("Smallest number is",b):console.log("smallest number is" ,a)

//Assignment No : 9   (Bigest number)
var x= Math.max(a,b,c)
console.log("Biggest number",x)

//Assignment no : 9 (Biggist number)
if (a>=b && a>=c) {
    console.log('biggest',a)
}
else if(b>=a && b>=c) {
    console.log('biggest',b)
} 
else {
    console.log('Biggist',c)
}

//Assignment No : 10   (Bigest number)
var x= Math.min(a,b,c)
console.log("Smallest number",x)

//Assignment no : 10 (Biggist number)
if (a<=b && a<=c) {
    console.log('Smallest',a)
}
else if(b<=a && b<=c) {
    console.log('Smallest',b)
} 
else {
    console.log('Smallest',c)
}

//Assignment no : 11 Ascending Order
let array=[a,b,c]
array.sort((a,b)=>a-b);
console.log(array);

//Assignment no : 12 Descending  Order
array.sort((a,b)=>b-a);
console.log(array);