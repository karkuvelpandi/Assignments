var a=10;
var b=21;
var c="10";
var d='Raj';
var e

console.log (typeof (a))
console.log (typeof (c))
console.log(typeof d)
console.log (typeof e)

console.log(a+c) //Number + string value = concodination is "1010"
console.log(a+d) //number + string name =concodination is "10Raj"
console.log(a+e)// number = undefine = Not A Number NAN
console.log(a*c) // number x string value  =100
console.log(a*d) // number x string name = NAN
console.log(a*e) // NUMBER x undefined = NAN

console.log(a==c) //Equals only values so True
console.log(a===c) //first compare data type is"false" then compare values is "true" false && true =false


console.log(d=='Raj' && a <20) //true
console.log(d=='Raj' && a >20) //false
console.log(d=='raj' && a <20) //false
console.log(d=='Raj' || a <20) // true
console.log(d=='Raj' || a >20) //true
console.log(d=='raj' || a >20) //false
