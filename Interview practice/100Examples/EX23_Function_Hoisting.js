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


// using function before writing it
wish();

function wish() {
    console.log('Hi, there.');
}

// try to use function before writing it with defining it with expression

praise();

let praise = function() {          //output ReferenceError if use var instead
    console.log('Hi, there.');     //of let it will through TypeError
}