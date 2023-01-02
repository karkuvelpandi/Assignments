let person={
    firstName:"karkuvel",
    lastName:"pandi",
    getName:function(){
        console.log(this.firstName+this.lastName);
    }
}

var jane = {};
jane.__proto__ = person;

jane.getName();

console.log(jane);

// function prototype

/*
each and every function has a prototype
Suppose if we create 100 objects using a function constructor, when we define the method getFullName
like this.getFullame = () => {}
it is going to create memory spaces for all the objects created by this function constructor.
even though we use those methods in very few objects.
but if we create the methods in the prototype the memory space is created only once.
anyways, it will be accesible by all the objects created by the function constructor
*/

function Person() {

    this.firstName = "Mani";
    this.lastName = "Gandan";

}

// here we are saving an anonymous function under the Person Object's prototype

Person.prototype.getFullName = function () {
    return this.firstName + " " + this.lastName;
}

var p1 = new Person();
console.log("--------------------------");
console.log(p1.getFullName())
console.log("--------------------------");


// now get the fullname in reverse

Person.prototype.getNameInReverse = function () {
    return this.lastName + " " + this.firstName
}

var p2 = new Person();
console.log(p2.getNameInReverse())

