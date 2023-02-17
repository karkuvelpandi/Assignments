// writing time
var a = 10;
function f1() {
  console.log(a);
  var a = 20;
}
f1(); 

// Running time
function f1(){
  var a;
  console.log(a);
  a=20
}
f1()