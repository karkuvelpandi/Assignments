let a=310
let b=200
let c=630


//Assignment No : 1
if(a%7==0){
    console.log('Divisible')
}
else{
    console.log('Not Divisible')
}

//Assignment No : 2
if(a*3==930){
    console.log('Multiple of 3')
}
else{
    console.log('Not Multiple of 3')
}

//Assignment No : 3 (Ternary Operation)
a>=1 ? console.log('Positive number'):console.log('Negetive number')

//Assignment No : 5 (Ternary Operation)

 a<=999 && a>=100? console.log('yes this is 3 digit number'):console.log('No this is not a 3 digit number')

//Assignment No : 5  (Need clarity about this why not get even answer while using a value)
b%2==0 ? console.log ("Yes this is a even number"):console.log ("No this is not a even number")

//Assignment No : 7  (Big number)
b<a ?console.log("biggest number is",a):console.log("biggest number is",b)

//Assignment No : 8  (Small number)
b<a ?console.log("Smallest number is",b):console.log("smallest number is" ,a)

//Assignment extra (greatest of 3 numbers)
if(a>b && a>c){
    console.log(a +' '+ "is greater");
}
else if(b>a && b>c){
    console.log(b + ' '+'is greater');
}
else{
    console.log(c + ' '+"is greater");
}

//Assignment extra (smallest of 3 numbers)
if(a<b && a<c){
    console.log(a +' '+ "is smallest");
}
else if(b<a && b<c){
    console.log(b + ' '+'is smallest');
}
else{
    console.log(c + ' '+"is smallest");
}

//Assignment minimun and maximum numbers inside an array

let arr=[4,2,1,3]
console.log(arr);
let sorted_arr = arr.sort()
console.log(sorted_arr)
min_arr = console.log(arr[0]); 
max_arr = console.log(arr.length); 
