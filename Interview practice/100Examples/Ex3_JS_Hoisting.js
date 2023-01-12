a = 5
console.log(a);         //output---5
var a = 10


var a1;
console.log(a1);        // output undefined   
a1 = 5;


console.log(b);         // output undefined   
var b = 5;


b = 5
console.log(c);         //output---Reference error : cannot access b before initialization
let c = 10               //or const c=10


console.log(d);              //output---Reference error : cannot access d before initialization
let d = 10  //or const d=10


//Function Scope hoisting example

var e = 4;

function greet() {
    f = 'hello';
    console.log(f); // hello
    var f;
}

greet(); // hello
console.log(f);    // reference error due to value "f" hoisting is work within the function scope.
                   //  It will not avail in the global scope