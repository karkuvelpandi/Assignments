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
array.sort();
console.log(array);

//Assignment no : 12 Descending  Order
array.sort();
console.log(array);

//Hutech assignment finding Max and Min value without sort()  inside an array

let ara=[5,52,8]  

let [m,n,o]=ara    //Array destructuring

console.log(m);
console.log(n);
console.log(o);

let ax=Math.min(m,n,o) //Min value
console.log(ax);

let ay=Math.max(m,n,o)  //Max value
console.log(ay);

let az=eval(m+n-o)  //Evaluvating the value
console.log(az);

// Substr or Substring (both are same only) method
let srt="Karkuvel007@gmail.com"
console.log(srt.substr(0,8));
console.log(srt.substr(srt.indexOf("@")+1));
console.log(srt.substring(0,srt.indexOf("@")));
// console.log(srt.substring(srt.startsWith("@",14)));